import Image from "next/image";
import EnquiryForm from "../EnquiryForm";
import Icon from "../Icon";
import { Container, Rule } from "../ui";
import { mailHref, mapsHref, site, telHref, whatsappHref } from "@/lib/site";

export default function Contact() {
  const items = [
    { icon: "pin", label: "Site address", value: site.addressLine, href: mapsHref, external: true },
    { icon: "phone", label: "Call", value: site.phoneDisplay, href: telHref },
    { icon: "whatsapp", label: "WhatsApp", value: site.phoneDisplay, href: whatsappHref, external: true },
    ...(site.email ? [{ icon: "mail", label: "Email", value: site.email, href: mailHref }] : []),
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-sand/60 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div data-reveal>
          <p className="eyebrow text-copper-600">Contact us</p>
          <h2 id="contact-title" className="font-display mt-4 text-[2.35rem] font-semibold uppercase leading-[1.05] tracking-wide text-copper-500 sm:text-5xl">
            Your upgrade begins with a site visit
          </h2>
          <Rule className="mt-5" />
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70">
            Visit us to see the homes, the amenities and the neighbourhood for yourself. Share your details and our relationship
            manager will set up a convenient time.
          </p>

          <ul className="mt-8 space-y-3">
            {items.map((it) => (
              <li key={it.label}>
                <a
                  href={it.href}
                  {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-start gap-4 rounded-2xl border border-copper-100 bg-cream p-4 transition hover:border-copper-300 hover:shadow-lg hover:shadow-copper-900/10"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-copper-50 text-xl text-copper-500">
                    <Icon name={it.icon} />
                  </span>
                  <span>
                    <span className="block text-xs text-ink/55">{it.label}</span>
                    <span className="block text-[15px] font-semibold text-ink">{it.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={site.reraUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-4 rounded-2xl border border-copper-100 bg-cream p-3 pr-5"
          >
            <Image src="/images/maharera-qr.png" alt="MahaRERA QR code" width={370} height={370} className="h-16 w-16" />
            <span className="text-xs leading-relaxed">
              <span className="block font-semibold uppercase tracking-wider text-copper-600">MahaRERA Reg. No.</span>
              <span className="block text-sm font-semibold text-ink">{site.rera}</span>
              <span className="block text-ink/55">maharera.maharashtra.gov.in</span>
            </span>
          </a>
        </div>

        <div data-reveal className="self-start rounded-[2rem] bg-cream p-6 shadow-2xl shadow-copper-900/10 ring-1 ring-copper-100 sm:p-10">
          <p className="eyebrow text-copper-600">Enquire now</p>
          <h3 className="font-display mt-2 text-3xl font-semibold uppercase text-forest">Get the price sheet</h3>
          <p className="mb-7 mt-2 text-sm text-ink/60">Receive the price sheet, e-brochure and floor plans on WhatsApp.</p>
          <EnquiryForm source="Contact Section" submitLabel="Request a Call Back" />
        </div>
      </Container>
    </section>
  );
}
