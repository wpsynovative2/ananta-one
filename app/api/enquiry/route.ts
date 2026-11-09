import { normalizeIndianMobile, validateEmail, validateName, CONFIG_OPTIONS, type EnquiryPayload } from "@/lib/validation";
import { googleSheetConfigured, pushToGoogleSheet, type Lead } from "@/lib/leads";

// Server-side leg of the enquiry form:
// 1. re-validate input, 2. verify reCAPTCHA v3, 3. forward to Google Apps Script (Sheet + email).

const MIN_SCORE = Number(process.env.RECAPTCHA_MIN_SCORE || 0.5);
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_MAX;
}

const json = (body: unknown, status = 200) => Response.json(body, { status });
const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");

async function verifyRecaptcha(token: string | undefined, ip: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn("[enquiry] RECAPTCHA_SECRET_KEY is not set: skipping bot verification.");
    return { ok: true, score: null as number | null };
  }
  if (!token) return { ok: false, score: null };
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  const data = (await res.json()) as { success: boolean; score?: number; action?: string };
  const ok = data.success && data.action === "enquiry" && (data.score ?? 0) >= MIN_SCORE;
  return { ok, score: data.score ?? null };
}

export async function POST(request: Request) {
  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return json({ ok: false, error: "Too many attempts. Please try again in a few minutes." }, 429);

  let body: EnquiryPayload;
  try {
    body = (await request.json()) as EnquiryPayload;
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  // Honeypot: pretend success so bots learn nothing.
  if (body.website) return json({ ok: true });

  const name = clip(body.name, 80).replace(/\s+/g, " ");
  const nameErr = validateName(name);
  if (nameErr) return json({ ok: false, error: nameErr }, 422);

  const mobile = normalizeIndianMobile(clip(body.mobile, 20));
  if (!mobile) return json({ ok: false, error: "Enter a valid 10-digit Indian mobile number." }, 422);

  const email = clip(body.email, 120);
  const emailErr = validateEmail(email);
  if (emailErr) return json({ ok: false, error: emailErr }, 422);

  const configuration = (CONFIG_OPTIONS as readonly string[]).includes(body.configuration || "") ? body.configuration! : "";

  const captcha = await verifyRecaptcha(body.recaptchaToken, ip).catch(() => ({ ok: false, score: null }));
  if (!captcha.ok) {
    return json({ ok: false, error: "We couldn't verify your request. Please refresh the page and try again." }, 403);
  }

  const utm: Record<string, string> = {};
  if (body.utm && typeof body.utm === "object") {
    for (const [k, v] of Object.entries(body.utm).slice(0, 10)) utm[clip(k, 30)] = clip(v, 120);
  }

  const lead: Lead = {
    timestamp: new Date().toISOString(),
    name,
    mobile: `+91${mobile}`,
    email,
    configuration,
    source: clip(body.source, 80),
    page: clip(body.page, 300),
    utm_source: utm.utm_source || "",
    utm_medium: utm.utm_medium || "",
    utm_campaign: utm.utm_campaign || "",
    utm_term: utm.utm_term || "",
    utm_content: utm.utm_content || "",
    gclid: utm.gclid || "",
    fbclid: utm.fbclid || "",
    recaptcha_score: captcha.score ?? "",
    ip,
    user_agent: clip(request.headers.get("user-agent"), 250),
  };

  if (!googleSheetConfigured()) {
    console.error("[enquiry] GOOGLE_SCRIPT_URL is not configured. Lead not delivered:", lead);
    return json({ ok: false, error: "Our enquiry service is temporarily unavailable. Please call us directly." }, 503);
  }

  try {
    await pushToGoogleSheet(lead);
  } catch (err) {
    console.error("[enquiry] Google Sheet delivery failed:", err);
    return json({ ok: false, error: "Something went wrong while sending your enquiry. Please try again or call us." }, 502);
  }

  return json({ ok: true });
}
