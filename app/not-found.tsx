import Link from "next/link";
import Icon from "@/components/Icon";
import { Rule } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-tiles flex min-h-[80svh] items-center px-4 pb-20 pt-36 text-center text-cream">
      <div className="mx-auto max-w-xl">
        <p className="font-display text-8xl font-semibold text-gold-300">404</p>
        <h1 className="font-display mt-4 text-4xl font-semibold uppercase tracking-wide">Page not found</h1>
        <Rule className="mx-auto mt-5" />
        <p className="mt-6 text-cream/75">The page you&apos;re looking for has moved or doesn&apos;t exist.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-maroon-950 transition hover:bg-gold-300"
        >
          Back to Ananta One <Icon name="arrow" />
        </Link>
      </div>
    </section>
  );
}
