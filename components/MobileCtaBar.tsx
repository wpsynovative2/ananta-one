"use client";

import Icon from "./Icon";
import { openEnquiry } from "./EnquiryButton";
import { telHref, whatsappHref } from "@/lib/site";

/** Sticky bottom action bar on phones, plus a floating WhatsApp button and side tab on larger screens. */
export default function MobileCtaBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-cream/10 bg-maroon-950/95 pb-[env(safe-area-inset-bottom)] text-cream backdrop-blur md:hidden">
        <a href={telHref} className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold">
          <Icon name="phone" className="text-lg text-gold-300" /> Call
        </a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold">
          <Icon name="whatsapp" className="text-lg text-gold-300" /> WhatsApp
        </a>
        <button
          type="button"
          onClick={() => openEnquiry({ source: "Mobile Sticky Bar" })}
          className="bg-copper-gradient flex cursor-pointer flex-col items-center gap-1 py-2.5 text-[11px] font-bold text-white"
        >
          <Icon name="mail" className="text-lg" /> Enquire
        </button>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl transition hover:scale-110 md:grid"
      >
        <Icon name="whatsapp" />
      </a>
      <button
        type="button"
        onClick={() => openEnquiry({ source: "Side Tab", title: "Get Price Details" })}
        className="bg-copper-gradient fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rotate-180 cursor-pointer rounded-r-xl px-2.5 py-5 [writing-mode:vertical-rl] text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition hover:brightness-110 md:block"
      >
        Get Price
      </button>
    </>
  );
}
