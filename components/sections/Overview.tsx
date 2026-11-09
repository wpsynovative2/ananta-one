import Image from "next/image";
import CountUp from "../CountUp";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { overviewStats } from "@/lib/content";
import { site } from "@/lib/site";

export default function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="relative overflow-hidden py-20 sm:py-28">
      <Container>
        <div className="lg:grid lg:grid-cols-[14rem_1.2fr_1fr] lg:items-center lg:gap-12 xl:grid-cols-[18rem_1.2fr_1fr]">
          {/* The copper "A" from the brochure, standing on the section's bottom edge as on the brochure page */}
          <div className="relative -mb-28 hidden self-stretch lg:block" aria-hidden="true">
            <Image src="/images/brand-copper-a.webp" alt="" fill sizes="18rem" className="object-contain object-bottom" />
          </div>
          <div>
            <SectionHeading
              id="overview-title"
              eyebrow="Welcome to Ananta One"
              title="A world of your own"
              intro={
                <>
                  <p>
                    As life evolves, so do your dreams. {site.name} welcomes you to a home that gives you room to grow,
                    reflects your way of living, and makes every new beginning feel special.
                  </p>
                  <p className="mt-4">
                    Committed to shaping residential developments that bring together practical design, everyday comfort
                    and the needs of modern families, {site.developers[0].name} and {site.developers[1].name} present a
                    modern high-rise address in Vasai, where your family gets the space, safety and comfort it deserves.
                  </p>
                </>
              }
            />
            <div data-reveal className="mt-8 flex flex-wrap gap-3">
              <EnquiryButton source="Overview" title="Get Price & Availability">
                Check Availability <Icon name="arrow" />
              </EnquiryButton>
              <EnquiryButton source="Overview - Site Visit" title="Book a Site Visit" variant="outline">
                Book a Site Visit
              </EnquiryButton>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-copper-100 bg-copper-100 lg:mt-0">
            {overviewStats.map((s, i) => (
              <div key={s.label} data-reveal style={{ ["--reveal-delay" as string]: `${i * 90}ms` }} className="bg-cream p-6 sm:p-8">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display block text-5xl font-semibold text-copper-500 sm:text-6xl">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="mt-2 block text-xs font-medium uppercase tracking-[0.16em] text-ink/60">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
