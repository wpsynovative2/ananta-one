"use client";

import { useEffect } from "react";

/** Adds scroll-in animation to every [data-reveal] element. Content stays visible without JS. */
export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    // Mark elements already on screen as visible before enabling the hidden state, to avoid a flash.
    const vh = window.innerHeight;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh) el.classList.add("is-visible");
      else io.observe(el);
    });
    document.documentElement.classList.add("reveal-ready");
    return () => io.disconnect();
  }, []);
  return null;
}
