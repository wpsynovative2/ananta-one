import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { faqs } from "@/lib/content";

// Native <details>, so answers are in the HTML for search engines and work without JS.
export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQs"
          title="Questions, answered"
          intro={<p>Everything you need to know about Ananta One before your site visit.</p>}
        />
        <div data-reveal className="divide-y divide-copper-100 border-y border-copper-100">
          {faqs.map((f, i) => (
            <details key={f.q} className="group py-1" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="font-display text-xl font-semibold leading-snug text-forest sm:text-2xl">{f.q}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-copper-200 text-copper-500 transition group-open:rotate-45 group-open:bg-copper-500 group-open:text-white">
                  <Icon name="plus" />
                </span>
              </summary>
              <p className="pb-6 pr-12 text-[15px] leading-relaxed text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
