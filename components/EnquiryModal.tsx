"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import EnquiryForm from "./EnquiryForm";
import Icon from "./Icon";
import { ENQUIRE_EVENT, hasSubmittedEnquiry, type EnquireDetail } from "./EnquiryButton";
import { site } from "@/lib/site";

const AUTO_OPEN_MS = 20000;
const PERKS = ["1 & 2 BHK Homes", "Podium Swimming Pool", "13+ Lifestyle Amenities", "Free Site Visit Assistance"];

/** Global popup form. Opened by any <EnquiryButton>, and once per session after a delay. */
export default function EnquiryModal() {
  const ref = useRef<HTMLDialogElement>(null);
  const [detail, setDetail] = useState<EnquireDetail>({ source: "Popup" });
  // Remount the form on each open so stale errors/state are cleared.
  const [openCount, setOpenCount] = useState(0);
  const pathname = usePathname();

  // The modal lives in the root layout, so close it when a submit navigates to /thank-you.
  useEffect(() => {
    if (ref.current?.open) ref.current.close();
  }, [pathname]);

  const open = useCallback((d: EnquireDetail) => {
    const dlg = ref.current;
    if (!dlg || dlg.open) return;
    setDetail(d);
    setOpenCount((c) => c + 1);
    dlg.showModal();
    document.documentElement.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const onEvent = (e: Event) => open((e as CustomEvent<EnquireDetail>).detail);
    window.addEventListener(ENQUIRE_EVENT, onEvent);

    let auto: ReturnType<typeof setTimeout> | undefined;
    try {
      if (pathname === "/" && !sessionStorage.getItem("ao-auto-popup") && !hasSubmittedEnquiry()) {
        auto = setTimeout(() => {
          sessionStorage.setItem("ao-auto-popup", "1");
          open({ source: "Auto Popup", title: "Get Exclusive Price Details" });
        }, AUTO_OPEN_MS);
      }
    } catch {}

    const dlg = ref.current;
    const onClose = () => {
      document.documentElement.style.overflow = "";
    };
    dlg?.addEventListener("close", onClose);
    return () => {
      window.removeEventListener(ENQUIRE_EVENT, onEvent);
      dlg?.removeEventListener("close", onClose);
      if (auto) clearTimeout(auto);
    };
  }, [open, pathname]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="enquiry-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      className="m-auto w-[min(56rem,calc(100vw-1.5rem))] max-w-none overflow-visible bg-transparent p-0"
    >
      <div className="grid max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-[1.75rem] bg-cream shadow-2xl md:grid-cols-[0.9fr_1.1fr] md:overflow-hidden">
        <div className="relative hidden overflow-hidden p-8 text-cream md:flex md:flex-col md:justify-between">
          <Image src="/images/hero-tower-exterior.webp" alt="" fill sizes="400px" className="object-cover object-left" />
          <div className="absolute inset-0 bg-linear-to-b from-maroon-950/80 via-maroon-900/40 to-maroon-950/90" />
          <div className="relative">
            <Image src="/images/logo-ananta-one-light.webp" alt={site.name} width={1200} height={146} className="h-auto w-44" />
            <p className="eyebrow mt-3 text-gold-300">Madhuban · Vasai East</p>
          </div>
          <div className="relative space-y-3">
            {PERKS.map((t) => (
              <p key={t} className="flex items-center gap-3 text-sm">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-gold-400 text-maroon-950">
                  <Icon name="check" className="text-xs" />
                </span>
                {t}
              </p>
            ))}
            <p className="pt-4 text-[11px] text-cream/70">MahaRERA No. {site.rera}</p>
          </div>
        </div>

        <div className="relative p-6 sm:p-9">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Close enquiry form"
            className="absolute right-4 top-4 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-copper-50 text-copper-700 transition hover:bg-copper-500 hover:text-white"
          >
            <Icon name="close" />
          </button>
          <p className="eyebrow text-copper-600">Enquire Now</p>
          <h2 id="enquiry-title" className="font-display mt-2 pr-10 text-3xl font-semibold uppercase leading-tight text-copper-500">
            {detail.title || "Register Your Interest"}
          </h2>
          <p className="mb-6 mt-2 text-sm text-ink/65">Share your details and our relationship manager will call you back shortly.</p>
          <EnquiryForm key={openCount} source={detail.source} compact />
        </div>
      </div>
    </dialog>
  );
}
