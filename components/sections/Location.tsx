import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { connectivity, nearbyRoads, westernLine } from "@/lib/content";
import { mapsEmbed, mapsHref, site } from "@/lib/site";

const statusStyle: Record<string, string> = {
  "Connected today": "bg-emerald-700 text-white",
  "Under execution": "bg-gold-400 text-maroon-950",
  Proposed: "bg-cream text-copper-700",
};

export default function Location() {
  return (
    <section id="location" aria-labelledby="location-title" className="bg-tiles py-20 text-cream sm:py-28">
      <Container>
        <SectionHeading
          id="location-title"
          tone="dark"
          align="center"
          eyebrow="Location"
          title="A location that connects the dots of daily life"
          intro={
            <p>
              Rooted in Vasai, connected to Mumbai. Vasai is one of the fastest-growing suburbs of the Mumbai Metropolitan Region,
              with the comfort of an established town and the reach of the Western line.
            </p>
          }
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* On desktop the map fills the card's full height so it lines up with the right-hand column. */}
          <figure data-reveal className="flex flex-col overflow-hidden rounded-[2rem] ring-1 ring-gold-300/25">
            <div className="relative aspect-[6/5] lg:aspect-auto lg:min-h-[26rem] lg:flex-1">
              <Image
                src="/images/location-map.webp"
                alt="Location map of Ananta One near Veer Savarkar Road, Gokhivare Road and Vasai Railway Station"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[60%_40%]"
              />
            </div>
            <figcaption className="bg-maroon-950/60 px-5 py-3 text-[11px] text-cream/60">Map not to scale. For representation only.</figcaption>
          </figure>

          <div className="flex flex-col gap-6">
            <div data-reveal className="rounded-[2rem] border border-cream/15 bg-cream/5 p-6 sm:p-8">
              <p className="eyebrow text-gold-300">Roads &amp; landmarks around the site</p>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {nearbyRoads.map((r) => (
                  <li key={r} className="flex items-center gap-2.5 text-sm text-cream/85">
                    <Icon name={r.includes("Station") ? "train" : "road"} className="shrink-0 text-base text-gold-300" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal className="rounded-[2rem] border border-cream/15 bg-cream/5 p-6 sm:p-8">
              <p className="eyebrow text-gold-300">Western Railway suburban line</p>
              <ol className="relative mt-6 flex justify-between gap-1" aria-label="Select stations, not to scale">
                <span aria-hidden="true" className="absolute inset-x-1 top-[5px] h-0.5 bg-cream/25" />
                {westernLine.map((s) => {
                  const here = s === "Vasai Road";
                  return (
                    <li key={s} className="relative flex flex-1 flex-col items-center text-center">
                      <span className={`h-3 w-3 rounded-full ring-4 ${here ? "bg-gold-400 ring-gold-400/30" : "bg-cream ring-maroon-900"}`} />
                      <span className={`mt-3 text-[9px] leading-tight sm:text-[11px] ${here ? "font-bold text-gold-300" : "text-cream/70"}`}>{s}</span>
                    </li>
                  );
                })}
              </ol>
              <p className="mt-5 text-xs text-cream/55">Select stations, not to scale.</p>
            </div>

            <div data-reveal className="overflow-hidden rounded-[2rem] ring-1 ring-cream/15">
              <iframe
                title={`Google Map of ${site.name}`}
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0 grayscale-[30%]"
              />
            </div>
          </div>
        </div>

        <h3 data-reveal className="font-display mt-20 text-center text-3xl font-semibold uppercase tracking-wide sm:text-4xl">
          Infrastructure that connects you to more of the city
        </h3>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {connectivity.map((c, i) => (
            <li
              key={c.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              className="overflow-hidden rounded-3xl bg-cream text-ink"
            >
              <div className="relative">
                <Image src={c.image} alt={c.alt} width={588} height={496} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[6/5] h-auto w-full object-cover" />
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${statusStyle[c.status]}`}>
                  {c.status}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-display text-xl font-semibold leading-snug text-copper-600">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-[11px] text-cream/55">
          Infrastructure projects are planned or executed by government agencies; their scope and timelines may change and are not
          within the promoters&apos; control. Travel times depend on traffic and mode of transport.
        </p>

        <div data-reveal className="mt-10 flex flex-wrap justify-center gap-3">
          <EnquiryButton source="Location" title="Book a Site Visit" variant="gold">
            Book a Site Visit <Icon name="arrow" />
          </EnquiryButton>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold transition hover:bg-cream hover:text-maroon-800"
          >
            <Icon name="pin" /> Get Directions
          </a>
        </div>
      </Container>
    </section>
  );
}
