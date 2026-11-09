import type { ReactNode } from "react";

/** Section heading in the brochure style: spaced eyebrow, uppercase serif title and a gold rule. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  id,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
  className?: string;
}) {
  const dark = tone === "dark";
  const center = align === "center";
  return (
    <div data-reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 flex items-center gap-3 ${center ? "justify-center" : ""} ${dark ? "text-gold-300" : "text-copper-600"}`}>
          <Diamond />
          {eyebrow}
          {center && <Diamond />}
        </p>
      )}
      <h2
        id={id}
        className={`font-display text-[2.35rem] font-semibold uppercase leading-[1.05] tracking-wide sm:text-5xl lg:text-[3.4rem] ${
          dark ? "text-cream" : "text-copper-500"
        }`}
      >
        {title}
      </h2>
      <Rule className={`mt-5 ${center ? "mx-auto" : ""}`} />
      {intro && <div className={`mt-6 text-[15px] leading-relaxed sm:text-base ${dark ? "text-cream/75" : "text-ink/70"}`}>{intro}</div>}
    </div>
  );
}

/** Thin gold rule with a centred triangle, echoing the "A" in the logo. */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 12" className={`h-3 w-40 text-gold-400 ${className}`} aria-hidden="true">
      <path d="M0 6h68M92 6h68" stroke="currentColor" strokeWidth="1" />
      <path d="M80 1 86 11H74Z" fill="currentColor" />
    </svg>
  );
}

export function Diamond() {
  return <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-current" />;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/** The copper frame strip from the brochure's page edges. */
export function CopperEdge({ side = "left", className = "" }: { side?: "left" | "right"; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute top-0 hidden h-full w-2 bg-copper-gradient lg:block ${side === "left" ? "left-0" : "right-0"} ${className}`}
    />
  );
}
