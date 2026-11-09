"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "./Loader";

// Brand splash on first paint. Hides on window load (capped at 2s) and falls back
// to a CSS auto-hide so content is never trapped behind it if JS fails.
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("ao-preloaded") === "1";
      sessionStorage.setItem("ao-preloaded", "1");
    } catch {}
    const finish = () => setDone(true);
    if (seen || document.readyState === "complete") {
      const t = setTimeout(finish, seen ? 0 : 400);
      return () => clearTimeout(t);
    }
    const cap = setTimeout(finish, 2000);
    window.addEventListener("load", finish, { once: true });
    return () => {
      clearTimeout(cap);
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <div
      aria-hidden={done}
      className={`preloader bg-tiles fixed inset-0 z-[100] grid place-items-center overflow-hidden ${done ? "is-done" : ""}`}
      style={{ animation: "preloader-auto 0.6s ease 4s forwards" }}
    >
      <div className="flex flex-col items-center gap-10">
        <Image
          src="/images/logo-ananta-one-light.webp"
          alt=""
          width={1200}
          height={146}
          priority
          className="h-auto w-56 sm:w-72"
        />
        <Loader scale="clamp(10px, 2.6vw, 14px)" />
        <p className="eyebrow text-gold-300/80">Extraordinary living for extraordinary you</p>
      </div>
    </div>
  );
}
