"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "../Icon";
import { Container } from "../ui";
import { gallery } from "@/lib/content";

/** Brochure lifestyle spreads as a swipeable, snap-scrolling carousel. */
export default function Gallery() {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = (i + gallery.length) % gallery.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="gallery" aria-labelledby="gallery-title" aria-roledescription="carousel" className="bg-maroon-950 py-20 text-cream sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div data-reveal>
            <p className="eyebrow text-gold-300">Life at Ananta One</p>
            <h2 id="gallery-title" className="font-display mt-3 text-4xl font-semibold uppercase tracking-wide sm:text-5xl">
              Homes that say &ldquo;we&apos;ve arrived&rdquo;
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous image"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-cream/25 text-xl transition hover:border-gold-300 hover:bg-gold-400 hover:text-maroon-950"
            >
              <Icon name="chevronLeft" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next image"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-cream/25 text-xl transition hover:border-gold-300 hover:bg-gold-400 hover:text-maroon-950"
            >
              <Icon name="chevronRight" />
            </button>
          </div>
        </div>

        <ul ref={track} className="no-scrollbar mt-10 flex snap-x snap-mandatory overflow-x-auto rounded-[2rem]">
          {gallery.map((g, i) => (
            <li
              key={g.image}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${gallery.length}: ${g.title}`}
              className="relative w-full shrink-0 snap-start"
            >
              <Image
                src={g.image}
                alt={g.alt}
                width={1920}
                height={813}
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="h-[26rem] w-full object-cover sm:h-[32rem] lg:h-[36rem]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-maroon-950/90 via-maroon-950/40 to-transparent p-6 pt-28 sm:p-10 sm:pt-36">
                <p className="font-display text-2xl font-semibold uppercase tracking-wide sm:text-4xl">{g.title}</p>
                <p className="mt-2 max-w-xl text-sm text-cream/80 sm:text-base">{g.text}</p>
              </div>
              <p className="absolute right-4 top-4 rounded-full bg-maroon-950/50 px-3 py-1 text-[10px] text-cream/80 backdrop-blur">
                Artist&apos;s impression
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-center gap-2">
          {gallery.map((g, i) => (
            <button
              key={g.image}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={index === i}
              className={`h-1.5 cursor-pointer rounded-full transition-all ${index === i ? "w-10 bg-gold-400" : "w-4 bg-cream/30 hover:bg-cream/60"}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
