import Image from "next/image";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { specifications } from "@/lib/content";

export default function Specifications() {
  return (
    <section id="specifications" aria-labelledby="specifications-title" className="relative overflow-hidden bg-[#f3f1ee] py-20 sm:py-28">
      <Image
        src="/images/specifications-interior.webp"
        alt=""
        width={1995}
        height={2101}
        // object-cover fills a tall, narrow column, so the rendered width follows the section height, not the 38% column width.
        sizes="(min-width: 1024px) 75vw, 1px"
        className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-[38%] object-cover object-right lg:block"
      />
      <div aria-hidden="true" className="absolute inset-y-0 left-[38%] hidden w-40 bg-linear-to-r from-transparent to-[#f3f1ee] lg:block" style={{ transform: "translateX(-100%)" }} />

      <Container className="relative lg:pl-[38%]">
        <div className="lg:pl-10">
          <SectionHeading
            id="specifications-title"
            eyebrow="Specifications"
            title="Finished with care"
            intro={<p>Quality materials and fittings in every room, from the vitrified floors to the concealed wiring.</p>}
          />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {specifications.map((s, i) => (
              <div key={s.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
                <h3 className="font-display flex items-center gap-3 text-2xl font-semibold uppercase tracking-wide text-copper-500">
                  <Icon name={s.icon} className="text-xl" />
                  {s.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-ink/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper-400" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
