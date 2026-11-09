import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { allAmenities, amenityGroups } from "@/lib/content";

export default function Amenities() {
  return (
    <section id="amenities" aria-labelledby="amenities-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="amenities-title"
          align="center"
          eyebrow="Amenities"
          title="A pause that feels like paradise"
          intro={
            <p>
              Between everything life asks of you, find a moment to simply be. Sometimes, a little pause changes the way the whole
              day feels.
            </p>
          }
        />

        {/* Podium pool */}
        <div data-reveal className="relative mt-14 overflow-hidden rounded-[2rem]">
          <Image
            src="/images/amenity-swimming-pool.webp"
            alt="Resident relaxing by the podium-level swimming pool"
            width={1600}
            height={1213}
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="h-[24rem] w-full object-cover object-[60%_center] sm:h-[30rem]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-maroon-950/70 via-maroon-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-7 text-cream sm:p-12">
            <p className="eyebrow text-gold-300">Podium level</p>
            <p className="font-display mt-2 text-4xl font-semibold uppercase tracking-wide sm:text-5xl">Swimming pool</p>
          </div>
        </div>

        <div className="mt-16 space-y-16 sm:mt-24 sm:space-y-24">
          {amenityGroups.map((g, gi) => (
            <div
              key={g.id}
              className={`grid items-center gap-10 lg:gap-14 ${gi % 2 ? "lg:grid-cols-[1.6fr_0.75fr]" : "lg:grid-cols-[0.75fr_1.6fr]"}`}
            >
              <div data-reveal className={gi % 2 ? "lg:order-last" : ""}>
                <h3 className="font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-copper-500 sm:text-4xl">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-copper-700">{g.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] text-ink/80">
                      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-copper-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="grid grid-cols-3 gap-3 sm:gap-5">
                {g.photos.map((p, i) => (
                  <li
                    key={p.title}
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
                    className="group relative overflow-hidden rounded-2xl sm:rounded-3xl"
                  >
                    <Image
                      src={p.image}
                      alt={p.alt}
                      width={900}
                      height={1604}
                      sizes="(min-width: 1024px) 22vw, 33vw"
                      className="aspect-[9/15] h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-maroon-950/85 to-transparent p-3 pt-12 text-[11px] font-semibold leading-tight text-cream sm:p-5 sm:pt-16 sm:text-sm">
                      {p.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full amenity list, marquee style */}
        <div className="relative mt-20 overflow-hidden border-y border-copper-100 py-5" aria-label="All amenities">
          <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            {[...allAmenities, ...allAmenities].map((a, i) => (
              <li key={`${a}-${i}`} aria-hidden={i >= allAmenities.length} className="font-display flex items-center gap-10 whitespace-nowrap text-xl uppercase tracking-wider text-copper-600">
                {a}
                <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="mt-10 text-center">
          <EnquiryButton source="Amenities" title="Visit the Amenities in Person">
            Explore on a Site Visit <Icon name="arrow" />
          </EnquiryButton>
        </div>
      </Container>
    </section>
  );
}
