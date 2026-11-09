// Server-only: delivers a lead to the Google Apps Script web app (Google Sheet + email alert).

export type Lead = {
  timestamp: string;
  name: string;
  mobile: string; // +91XXXXXXXXXX
  email: string;
  configuration: string;
  source: string;
  page: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  fbclid: string;
  recaptcha_score: number | "";
  ip: string;
  user_agent: string;
};

const TIMEOUT_MS = 12000;

/** True once a real Apps Script /exec URL is set (ignores the .env.example placeholder). */
export function googleSheetConfigured() {
  const url = process.env.GOOGLE_SCRIPT_URL;
  return !!url && !url.includes("XXXXXXXX");
}

export async function pushToGoogleSheet(lead: Lead): Promise<void> {
  const url = process.env.GOOGLE_SCRIPT_URL;
  if (!url) throw new Error("GOOGLE_SCRIPT_URL not configured");
  // text/plain avoids a CORS preflight / 405 from Apps Script; it still receives the JSON body.
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ token: process.env.GOOGLE_SCRIPT_TOKEN || "", ...lead }),
    redirect: "follow",
    cache: "no-store",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  const text = await res.text();
  let result: { ok?: boolean; error?: string };
  try {
    result = JSON.parse(text);
  } catch {
    throw new Error(`Apps Script returned non-JSON (HTTP ${res.status}). Is the web app deployed with access "Anyone"?`);
  }
  if (!result.ok) throw new Error(result.error || "Apps Script rejected the lead");
}
