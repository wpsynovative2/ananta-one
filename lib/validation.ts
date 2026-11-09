// Shared by the enquiry form (client) and /api/enquiry (server).

export const CONFIG_OPTIONS = ["1 BHK", "2 BHK", "Not sure yet"] as const;

/** Returns the 10-digit Indian mobile number, or null if invalid. Accepts +91 / 91 / 0 prefixes. */
export function normalizeIndianMobile(input: string): string | null {
  const digits = input.replace(/[\s\-().]/g, "").replace(/^\+/, "");
  const m = digits.match(/^(?:91|0)?([6-9]\d{9})$/);
  if (!m) return null;
  // Reject obvious junk such as 9999999999 or 6000000000.
  if (/^(\d)\1{9}$/.test(m[1]) || /^[6-9]0{9}$/.test(m[1])) return null;
  return m[1];
}

export function validateName(input: string): string | null {
  const name = input.trim().replace(/\s+/g, " ");
  if (name.length < 2) return "Please enter your full name";
  if (name.length > 80) return "Name is too long";
  if (!/^[\p{L}][\p{L} .'-]*$/u.test(name)) return "Name can contain letters, spaces, . ' and - only";
  return null;
}

export function validateEmail(input: string): string | null {
  const email = input.trim();
  if (!email) return null; // optional
  if (email.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return "Please enter a valid email address";
  return null;
}

export type EnquiryPayload = {
  name: string;
  mobile: string;
  email?: string;
  configuration?: string;
  source?: string;
  page?: string;
  utm?: Record<string, string>;
  recaptchaToken?: string;
  website?: string; // honeypot
};
