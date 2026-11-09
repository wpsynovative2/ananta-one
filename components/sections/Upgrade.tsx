import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { personas, upgrade } from "@/lib/content";

export default function Upgrade() {
  return (
    <section id="why-ananta-one" aria-labelledby="upgrade-title" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="upgrade-title"
              eyebrow="The upgrade you've earned"
              title="Not just a bigger house. A better life."
              intro={
                <p>
                  For years you&apos;ve made smaller rooms work. You&apos;ve climbed the stairs of an ageing building, renewed the
                  rent agreement, and told yourself &ldquo;next year&rdquo;. Ananta One is that next year: a modern high-rise
                  address in Vasai, at a price that respects a working family&apos;s budget.
                </p>
              }
            />
            <div data-reveal className="mt-8">
              <EnquiryButton source="Upgrade" title="Plan Your Upgrade">
                Plan Your Upgrade <Icon name="arrow" />
              </EnquiryButton>
            </div>
          </div>

          <div data-reveal className="grid overflow-hidden rounded-[2rem] border border-copper-100 sm:grid-cols-2">
            <div className="bg-white/60 p-6 sm:p-8">
              <p className="eyebrow text-ink/50">Life on rent today</p>
              <ul className="mt-5 space-y-4">
                {upgrade.renting.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-ink/65">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink/10 text-ink/50">
                      <Icon name="cross" className="text-[11px]" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-tiles p-6 text-cream sm:p-8">
              <p className="eyebrow text-gold-300">Life at Ananta One</p>
              <ul className="mt-5 space-y-4">
                {upgrade.owning.map((t) => (
                  <li key={t} className="flex gap-3 text-sm font-medium">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-400 text-maroon-950">
                      <Icon name="check" className="text-[11px]" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <p data-reveal className="eyebrow text-center text-copper-600">
            Homes for every story
          </p>
          <h3 data-reveal className="font-display mt-3 text-center text-3xl font-semibold uppercase tracking-wide text-forest sm:text-4xl">
            Made for extraordinary families like yours
          </h3>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {personas.map((p, i) => (
              <li
                key={p.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="group relative rounded-3xl border border-copper-100 bg-white/70 p-6 transition duration-500 hover:-translate-y-1 hover:border-copper-300 hover:shadow-xl hover:shadow-copper-900/10"
              >
                <span className="font-display text-4xl font-semibold text-copper-300">0{i + 1}</span>
                <h4 className="font-display mt-3 text-xl font-semibold leading-snug text-copper-600">{p.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
