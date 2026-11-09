import type { ReactNode } from "react";
import Link from "next/link";
import { Container, Rule } from "./ui";
import { site } from "@/lib/site";

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Shared layout for the Privacy Policy and Terms & Conditions pages. */
export default function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="bg-tiles relative overflow-hidden pb-16 pt-36 text-cream sm:pb-20 sm:pt-44">
        <Container>
          <p className="eyebrow text-gold-300">
            {site.name} · {site.developer}
          </p>
          <h1 className="font-display mt-4 text-5xl font-semibold uppercase tracking-wide sm:text-7xl">{title}</h1>
          <Rule className="mt-5" />
          <p className="mt-6 text-sm text-cream/70">Last updated: {lastUpdated}</p>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[16rem_1fr]">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-32">
            <p className="eyebrow mb-4 text-copper-600">On this page</p>
            <ol className="space-y-2 border-l border-copper-100 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="-ml-px block border-l border-transparent pl-4 text-ink/65 transition hover:border-copper-500 hover:text-copper-600">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="max-w-3xl space-y-12 text-[15px] leading-relaxed text-ink/80 [&_a]:font-semibold [&_a]:text-copper-600 [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_p+p]:mt-4 [&_p+ul]:mt-3 [&_strong]:text-ink [&_ul+p]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-copper-400">
          {intro && <div className="rounded-3xl bg-copper-50 p-6 text-ink/75">{intro}</div>}
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-32">
              <h2 id={`${s.id}-h`} className="font-display mb-4 flex items-baseline gap-3 text-2xl font-semibold text-forest sm:text-3xl">
                <span className="text-base text-copper-400">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              {s.body}
            </section>
          ))}

          <p className="flex flex-wrap gap-x-6 gap-y-2 border-t border-copper-100 pt-8 text-sm">
            <Link href="/">← Back to {site.name}</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </p>
        </article>
      </Container>
    </>
  );
}
