import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { standoutFeatures } from "@/lib/content";

export default function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title" className="bg-tiles relative overflow-hidden py-20 text-cream sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <figure data-reveal className="relative order-last overflow-hidden rounded-[2rem] lg:order-first">
          <Image
            src="/images/bedroom-family-moments.webp"
            alt="Family sharing a story in a warmly lit bedroom"
            width={1400}
            height={1522}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/4.2] h-auto w-full object-cover"
          />
          <span className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-gold-300/30" aria-hidden="true" />
        </figure>

        <div>
          <SectionHeading
            id="highlights-title"
            tone="dark"
            eyebrow="Thoughtfully built in"
            title="Standout features"
            intro={<p>Evenings by the pool. Mornings without worry. Everything a modern family needs, built in from day one.</p>}
          />
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10">
            {standoutFeatures.map((f, i) => (
              <li key={f.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-gold-300/30 bg-cream/5 text-2xl text-gold-300">
                  <Icon name={f.icon} />
                </span>
                <span>
                  <span className="block text-sm font-semibold leading-snug text-cream sm:text-[15px]">{f.title}</span>
                  <span className="mt-0.5 block text-xs text-cream/60 sm:text-[13px]">{f.text}</span>
                </span>
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-10">
            <EnquiryButton source="Highlights" title="Get the Complete Brochure" variant="gold">
              Get the Complete Brochure <Icon name="arrow" />
            </EnquiryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
