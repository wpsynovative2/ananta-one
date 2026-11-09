"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { openEnquiry } from "./EnquiryButton";
import { navLinks, site, telHref } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Section links work from inner pages too (/privacy-policy → /#amenities).
  const hrefFor = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen ? "bg-maroon-950/90 py-2.5 shadow-lg shadow-maroon-950/30 backdrop-blur-xl" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo-ananta-one-light.webp"
            alt={`${site.name} logo`}
            width={1200}
            height={146}
            priority
            className={`h-auto transition-all duration-500 ${scrolled ? "w-36 sm:w-40" : "w-40 sm:w-48"}`}
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 xl:gap-5">
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={hrefFor(l.href)}
                    className={`relative flex items-center whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium leading-none tracking-wide transition hover:text-gold-300 ${
                      active === l.href ? "text-gold-300" : "text-cream/85"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gold-300 transition-transform duration-300 ${
                        active === l.href ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={telHref}
            aria-label={`Call ${site.phoneDisplay}`}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-cream transition hover:text-gold-300 md:inline-flex"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-cream/25">
              <Icon name="phone" />
            </span>
            <span className="xl:hidden 2xl:inline">{site.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={() => openEnquiry({ source: "Header", title: "Book a Site Visit" })}
            className="cursor-pointer whitespace-nowrap rounded-full bg-gold-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-maroon-950 transition hover:bg-gold-300 sm:px-6 sm:text-[13px]"
          >
            Enquire Now
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-cream/25 text-xl text-cream xl:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!menuOpen} className="h-[calc(100dvh-4.5rem)] overflow-y-auto px-6 pb-10 pt-6 xl:hidden">
        <ul className="space-y-1">
          {navLinks.map((l, i) => (
            <li key={l.href} style={{ animation: `dialog-in 0.5s ${i * 40}ms both` }}>
              <a
                href={hrefFor(l.href)}
                onClick={() => setMenuOpen(false)}
                className="font-display flex items-center justify-between border-b border-cream/10 py-4 text-2xl uppercase tracking-wide text-cream"
              >
                {l.label}
                <Icon name="arrow" className="text-base text-gold-300" />
              </a>
            </li>
          ))}
        </ul>
        <a href={telHref} className="mt-8 flex items-center gap-3 text-lg font-semibold text-gold-300">
          <Icon name="phone" /> {site.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
