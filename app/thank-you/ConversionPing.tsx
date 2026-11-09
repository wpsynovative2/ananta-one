"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Fires a single conversion event for GTM / Google Ads / Meta when a lead lands here. */
export default function ConversionPing() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("ao-lead") !== "1") return;
      sessionStorage.setItem("ao-lead", "reported");
    } catch {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "generate_lead", form_name: "ananta_one_enquiry" });
  }, []);
  return null;
}
