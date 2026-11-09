import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Rule } from "@/components/ui";
import ConversionPing from "./ConversionPing";
import Greeting from "./Greeting";
import { site, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for your interest in Ananta One, Vasai East.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

const steps = [
  { title: "We call you", text: "Our relationship manager will reach out shortly." },
  { title: "Get the details", text: "Receive the price sheet, e-brochure & floor plans." },
  { title: "Visit the site", text: "Experience Ananta One in person at Madhuban, Vasai East." },
];

export default function ThankYouPage() {
  return (
    <section className="bg-tiles relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 pb-28 pt-32 text-cream">
      <Image src="/images/hero-tower-exterior.webp" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-15 mix-blend-luminosity" />
      <ConversionPing />

      <div className="mx-auto w-full max-w-3xl text-center">
        <span
          className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold-400 text-4xl text-maroon-950 shadow-[0_0_0_12px_rgba(227,166,76,0.18)]"
          style={{ animation: "dialog-in 0.8s both" }}
        >
          <Icon name="check" />
        </span>
        <h1 className="mt-8 leading-none" style={{ animation: "dialog-in 0.9s 0.1s both" }}>
          <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-gold-300 sm:text-base">
            <Suspense fallback="Thank you">
              <Greeting />
            </Suspense>
          </span>
          <span className="font-display mt-4 block text-5xl font-semibold uppercase tracking-wide sm:text-7xl">Your upgrade begins</span>
        </h1>
        <Rule className="mx-auto mt-6" />
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream/75">
          We&apos;ve received your enquiry for <strong className="text-cream">{site.name}</strong>. Our team will get in touch with
          you shortly with everything you need.
        </p>

        <ol className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-3xl border border-cream/15 bg-cream/5 p-6 backdrop-blur"
              style={{ animation: `dialog-in 0.8s ${0.2 + i * 0.1}s both` }}
            >
              <span className="font-display text-3xl font-semibold text-gold-300">0{i + 1}</span>
              <h2 className="mt-2 font-semibold">{s.title}</h2>
              <p className="mt-1 text-sm text-cream/65">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a href={telHref} className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-maroon-950 transition hover:bg-gold-300">
            <Icon name="phone" /> Call {site.phoneDisplay}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold transition hover:bg-cream hover:text-maroon-800"
          >
            <Icon name="whatsapp" /> WhatsApp Us
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold transition hover:bg-cream hover:text-maroon-800"
          >
            Back to Home <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
