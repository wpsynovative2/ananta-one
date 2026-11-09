import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { configurations, everyHomeIncludes } from "@/lib/content";

export default function Configuration() {
  return (
    <section id="configuration" aria-labelledby="configuration-title" className="bg-sand/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="configuration-title"
          align="center"
          eyebrow="The homes"
          title="Choose your configuration"
          intro={<p>Smart starter homes and spacious family homes, each with a modular kitchen and branded fittings.</p>}
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {configurations.map((c, i) => (
            <article
              key={c.type}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-copper-100 bg-cream p-7 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-copper-900/15 sm:p-9"
            >
              <span aria-hidden="true" className="bg-copper-gradient absolute inset-x-0 top-0 h-1.5" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-copper-600">{c.name}</p>
                  <h3 className="font-display mt-2 text-5xl font-semibold text-forest sm:text-6xl">{c.type}</h3>
                </div>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-copper-50 text-3xl text-copper-500">
                  <Icon name={i === 0 ? "sofa" : "bed"} />
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">{c.blurb}</p>

              <dl className="mt-6 divide-y divide-copper-100 border-y border-copper-100">
                <div className="flex items-center justify-between py-3 text-sm">
                  <dt className="text-ink/60">RERA carpet area</dt>
                  <dd className="font-semibold text-copper-600">On request</dd>
                </div>
                {c.rooms.map((r) => (
                  <div key={r.room} className="flex items-center justify-between py-3 text-sm">
                    <dt className="text-ink/60">{r.room}</dt>
                    <dd className="font-semibold text-ink">{r.size}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-[11px] text-ink/45">Room sizes from the typical floor plan; indicative only.</p>

              <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-2">
                <EnquiryButton source={`Configuration - ${c.type} Price`} title={`${c.type} Price Details`}>
                  Get Price
                </EnquiryButton>
                <EnquiryButton source={`Configuration - ${c.type} Plan`} title={`${c.type} Floor Plan`} variant="outline">
                  View Plan
                </EnquiryButton>
              </div>
            </article>
          ))}
        </div>

        <div data-reveal className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-copper-100 bg-white/60 p-7 sm:p-9">
          <p className="eyebrow text-copper-600">What every home comes with</p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {everyHomeIncludes.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-ink/80">
                <Icon name="check" className="shrink-0 text-base text-copper-500" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-ink/55">
            Some layouts also include a study room (9&apos;0&quot; × 10&apos;0&quot;). Detailed floor plans and price sheets are
            available at our site office.
          </p>
        </div>
      </Container>
    </section>
  );
}
