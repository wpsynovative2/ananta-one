"use client";

import type { ReactNode } from "react";

export const ENQUIRE_EVENT = "ao:enquire";

export type EnquireDetail = { source: string; title?: string };

const SUBMITTED_KEY = "ao-submitted";

/** True once this browser has sent an enquiry (persists across visits). */
export function hasSubmittedEnquiry() {
  try {
    return localStorage.getItem(SUBMITTED_KEY) === "1" || !!sessionStorage.getItem("ao-lead");
  } catch {
    return false;
  }
}

export function markEnquirySubmitted() {
  try {
    localStorage.setItem(SUBMITTED_KEY, "1");
  } catch {}
}

export function openEnquiry(detail: EnquireDetail) {
  window.dispatchEvent(new CustomEvent<EnquireDetail>(ENQUIRE_EVENT, { detail }));
}

const variants = {
  primary: "bg-copper-gradient text-white shadow-[0_12px_30px_-12px_rgba(173,87,44,0.8)] hover:brightness-110",
  gold: "bg-gold-400 text-maroon-950 hover:bg-gold-300 shadow-[0_12px_30px_-14px_rgba(227,166,76,0.9)]",
  outline: "border border-copper-500/40 text-copper-600 hover:bg-copper-500 hover:text-white",
  ghost: "border border-cream/40 text-cream hover:bg-cream hover:text-maroon-800",
} as const;

/** Any button on the page that opens the popup enquiry form. */
export default function EnquiryButton({
  children,
  source,
  title,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  source: string;
  title?: string;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => openEnquiry({ source, title })}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
