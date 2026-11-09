import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";
import Icon from "./Icon";
import EnquiryButton from "./EnquiryButton";
import { Container } from "./ui";
import { disclaimer, mailHref, mapsHref, navLinks, site, telHref, whatsappHref } from "@/lib/site";

// Cached so the current year doesn't make every page render at request time (cacheComponents).
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="bg-tiles relative overflow-hidden pb-24 text-cream/80 md:pb-0" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <Container className="relative pt-16">
        <div className="grid gap-12 border-b border-cream/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.1fr]">
          <div>
            <Image src="/images/logo-ananta-one-light.webp" alt={`${site.name} logo`} width={1200} height={146} className="h-auto w-52" />
            <p className="font-display mt-5 max-w-xs text-lg uppercase leading-snug tracking-wide text-cream/85">{site.tagline}</p>
            <div className="mt-6 space-y-1 text-xs text-cream/60">
              <p className="eyebrow text-gold-300">Promoted by</p>
              {site.developers.map((d) => (
                <p key={d.name}>
                  <span className="font-semibold text-cream">{d.name}</span> · {d.tagline}
                </p>
              ))}
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-4 text-xs text-cream/60">
              <div>
                <dt className="text-cream/45">Architects</dt>
                <dd className="font-semibold text-cream/85">{site.architect}</dd>
              </div>
              <div>
                <dt className="text-cream/45">RCC Consultant</dt>
                <dd className="font-semibold text-cream/85">{site.rccConsultant}</dd>
              </div>
            </dl>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-5 text-gold-300">Explore</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:grid-cols-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={`/${l.href}`} className="transition hover:text-gold-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-5 text-gold-300">Visit Us</p>
            <address className="space-y-4 text-sm not-italic">
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:text-gold-300">
                <Icon name="pin" className="mt-0.5 shrink-0 text-lg text-gold-300" />
                {site.addressLine}
              </a>
              <a href={telHref} className="flex items-center gap-3 transition hover:text-gold-300">
                <Icon name="phone" className="shrink-0 text-lg text-gold-300" />
                {site.phoneDisplay}
              </a>
              {site.email && (
                <a href={mailHref} className="flex items-center gap-3 break-all transition hover:text-gold-300">
                  <Icon name="mail" className="shrink-0 text-lg text-gold-300" />
                  {site.email}
                </a>
              )}
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-gold-300">
                <Icon name="whatsapp" className="shrink-0 text-lg text-gold-300" />
                WhatsApp us
              </a>
            </address>
          </div>

          <div>
            <p className="eyebrow mb-5 text-gold-300">MahaRERA</p>
            <a
              href={site.reraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-4 text-sm transition hover:border-gold-300/50"
            >
              <Image src="/images/maharera-qr.png" alt={`MahaRERA QR code for ${site.name}`} width={370} height={370} className="h-20 w-20 rounded-md bg-white p-1" />
              <span>
                <span className="block text-xs text-cream/60">Registration No.</span>
                <span className="block font-semibold text-cream">{site.rera}</span>
                <span className="mt-1 block text-xs text-cream/60">maharera.maharashtra.gov.in</span>
              </span>
            </a>
            <EnquiryButton source="Footer" title="Book a Site Visit" variant="gold" className="mt-5 w-full">
              Book a Site Visit <Icon name="arrow" />
            </EnquiryButton>
          </div>
        </div>

        <p className="py-8 text-[11px] leading-relaxed text-cream/50">
          <strong className="font-semibold text-cream/70">Disclaimer:</strong> {disclaimer}
        </p>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-6 text-xs text-cream/55 sm:flex-row">
          <p>
            © <CopyrightYear /> {site.developer}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="transition hover:text-gold-300">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms-and-conditions" className="transition hover:text-gold-300">
              Terms &amp; Conditions
            </Link>
            <span aria-hidden="true">·</span>
            <span>MahaRERA Reg. No. {site.rera}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
