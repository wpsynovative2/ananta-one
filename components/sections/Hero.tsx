import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import EnquiryForm from "../EnquiryForm";
import Icon from "../Icon";
import { Container } from "../ui";
import { heroStats } from "@/lib/content";
import { site } from "@/lib/site";

function ReraBadge({ className = "" }: { className?: string }) {
  return (
    <a href={site.reraUrl} target="_blank" rel="noopener noreferrer" className={`items-center gap-3 ${className}`}>
      <Image src="/images/maharera-qr.png" alt="MahaRERA QR code" width={370} height={370} className="h-12 w-12 shrink-0 rounded-md bg-white p-0.5" />
      <span className="text-[11px] leading-snug text-cream/70">
        <span className="block font-semibold uppercase tracking-wider text-gold-300">MahaRERA Reg. No.</span>
        <span className="block font-semibold text-cream">{site.rera}</span>
        maharera.maharashtra.gov.in
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] overflow-hidden bg-maroon-950 lg:min-h-[max(100svh,760px)]">
      {/* Tower render: full-bleed on phones/tablets; anchored right at full height on desktop so the tower stays clear of the copy */}
      <div className="absolute inset-0 -z-20 overflow-hidden lg:left-[calc(max(0px,(100vw-80rem)/2)+29rem)] xl:left-[calc(max(0px,(100vw-80rem)/2)+31rem)]">
        <Image
          src="/images/hero-tower-exterior.webp"
          alt="Artist's impression of the Ananta One G+22 tower at Madhuban, Vasai East"
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="animate-kenburns object-cover object-[30%_top] lg:object-left"
        />
        {/* Soft blend into the maroon on desktop (no hard edge) */}
        <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-2/5 bg-linear-to-r from-maroon-950 via-maroon-950/60 to-transparent lg:block" />
      </div>
      {/* Warm copper glow behind the copy */}
      <div aria-hidden="true" className="absolute -left-40 top-1/4 -z-10 hidden h-[36rem] w-[36rem] rounded-full bg-copper-700/25 blur-3xl lg:block" />
      {/* Legibility layers */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-maroon-950/35 lg:hidden" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-44 bg-linear-to-b from-maroon-950/75 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-[85%] bg-linear-to-t from-maroon-950 via-maroon-950/85 to-transparent lg:h-56 lg:via-maroon-950/70" />

      <p className="absolute right-4 top-24 text-[10px] tracking-wide text-cream/60 sm:right-6 lg:top-auto lg:bottom-3">Artist&apos;s impression</p>
      <ReraBadge className="absolute right-6 top-28 hidden rounded-2xl border border-cream/15 bg-maroon-950/45 p-2.5 pr-4 backdrop-blur-md lg:flex xl:right-10" />

      <Container className="relative flex flex-col justify-end gap-10 pb-24 pt-32 md:pb-10 lg:justify-between lg:gap-8">
        <div className="max-w-xl lg:max-w-[30rem] xl:max-w-[33rem]">
          <p
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur-md"
            style={{ animation: "dialog-in 0.9s 0.2s both" }}
          >
            <Icon name="pin" className="text-sm text-gold-300" /> Madhuban, Vasai East
          </p>
          <h1
            id="hero-title"
            className="font-display mt-6 text-[2.5rem] font-semibold uppercase leading-[1] tracking-wide text-cream min-[400px]:text-[2.8rem] sm:text-6xl lg:text-[3.2rem] xl:text-[3.5rem]"
            style={{ animation: "dialog-in 1s 0.3s both" }}
          >
            Extraordinary living
            <span className="text-copper-gradient mt-1 block">for extraordinary you</span>
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-cream/80 sm:text-lg" style={{ animation: "dialog-in 1s 0.45s both" }}>
            Premium 1 &amp; 2 BHK homes in a G+22 tower, with a podium swimming pool, sky garden and shops just downstairs.
          </p>
          <div className="mt-7 flex flex-wrap gap-3" style={{ animation: "dialog-in 1s 0.55s both" }}>
            <EnquiryButton source="Hero - Price" title="Get Exclusive Price Details" variant="gold" className="px-7 py-3.5">
              Get Price Details <Icon name="arrow" />
            </EnquiryButton>
            <EnquiryButton source="Hero - Brochure" title="Download the E-Brochure" variant="ghost" className="px-7 py-3.5 backdrop-blur-sm">
              <Icon name="download" /> Download Brochure
            </EnquiryButton>
          </div>
          <ReraBadge className="mt-8 flex lg:hidden" />
        </div>

        {/* Bottom bar: key facts + quick enquiry */}
        <div
          className="grid gap-6 rounded-[1.75rem] border border-cream/15 bg-maroon-950/55 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl xl:grid-cols-[auto_1fr] xl:items-center xl:gap-8"
          style={{ animation: "dialog-in 1s 0.65s both" }}
        >
          <dl className="grid grid-cols-2 gap-y-5 sm:grid-cols-4">
            {heroStats.map((s, i) => (
              <div key={s.label} className={`sm:px-5 sm:first:pl-0 ${i ? "sm:border-l sm:border-cream/15" : ""}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display block text-3xl font-semibold leading-none text-cream">{s.value}</span>
                  <span className="mt-2 block whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-300/90">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="hidden border-l border-cream/15 pl-8 xl:block">
            <EnquiryForm source="Hero Bar" tone="dark" layout="inline" submitLabel="Get Price" />
          </div>
        </div>
      </Container>
    </section>
  );
}
