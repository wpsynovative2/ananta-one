import Image from "next/image";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-sand/60 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="about-title"
              eyebrow="About the project"
              title={
                <>
                  A story that&apos;s <br className="hidden sm:block" />
                  yours to write
                </>
              }
              intro={
                <p>
                  Every home holds a story beyond its walls. {site.name} brings together 22 floors of spacious living and the
                  privacy of a standalone gated community, made for the unplanned moments and lasting memories that make life
                  special.
                </p>
              }
            />

            <div data-reveal className="mt-10 grid gap-4 sm:grid-cols-2">
              {site.developers.map((d) => (
                <div key={d.name} className="rounded-2xl border border-copper-100 bg-cream p-5">
                  <p className="eyebrow text-copper-600">Promoter</p>
                  <p className="font-display mt-2 text-2xl font-semibold uppercase tracking-wide text-forest">{d.name}</p>
                  <p className="mt-1 text-sm text-ink/60">{d.tagline}</p>
                </div>
              ))}
            </div>
            <dl data-reveal className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-copper-100 bg-cream px-5 py-4">
                <Icon name="layout" className="shrink-0 text-xl text-copper-500" />
                <div>
                  <dt className="text-xs text-ink/55">Architects</dt>
                  <dd className="font-semibold text-ink">{site.architect}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-copper-100 bg-cream px-5 py-4">
                <Icon name="building" className="shrink-0 text-xl text-copper-500" />
                <div>
                  <dt className="text-xs text-ink/55">RCC Consultant</dt>
                  <dd className="font-semibold text-ink">{site.rccConsultant}</dd>
                </div>
              </div>
            </dl>
          </div>

          <figure data-reveal className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-copper-900/15">
            <Image
              src="/images/retail-shops-entrance.webp"
              alt="Couple walking past the ground-floor shops at the Setuone entrance gate"
              width={1600}
              height={1345}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3.4] h-auto w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-maroon-950/90 via-maroon-950/50 to-transparent p-6 pt-20 text-cream sm:p-8 sm:pt-24">
              <p className="font-display text-2xl font-semibold uppercase leading-tight tracking-wide sm:text-3xl">
                Your neighbourhood shops, just downstairs!
              </p>
              <p className="mt-2 max-w-md text-sm text-cream/80">
                Why go far when the shops are just downstairs? Everyday essentials, always within easy reach.
              </p>
            </figcaption>
          </figure>
        </div>

        {/* Madhuban: a part of Vasai's growing story */}
        <div data-reveal className="relative mt-16 overflow-hidden rounded-[2rem] sm:mt-24">
          <Image
            src="/images/madhuban-vasai-skyline.webp"
            alt="Aerial view of Vasai's growing skyline at golden hour"
            width={1920}
            height={576}
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="h-[26rem] w-full object-cover sm:h-[22rem] lg:h-[24rem]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-copper-800/90 via-copper-700/55 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-7 text-cream sm:p-12 lg:max-w-2xl">
            <p className="eyebrow inline-flex w-fit bg-copper-600/90 px-3 py-1.5 text-cream">Madhuban</p>
            <h3 className="font-display mt-4 text-3xl font-semibold uppercase leading-tight tracking-wide sm:text-5xl">
              A part of Vasai&apos;s growing story
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/85 sm:text-base">
              Every city holds memories of its past and promises of what lies ahead. As Vasai evolves with changing skylines
              and new beginnings, Madhuban becomes part of its unfolding story, where the best chapters are yet to be written.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
