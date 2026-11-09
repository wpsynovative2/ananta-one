import type { ReactNode, SVGProps } from "react";

// Minimal stroke icon set (24×24, currentColor) so the page ships no icon library.
const paths: Record<string, ReactNode> = {
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
  whatsapp: (
    <>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M9 8.5c0 3.3 3.2 6.5 6.5 6.5l1-1.6-2.1-1-1 .9a4.6 4.6 0 0 1-2.2-2.2l.9-1-1-2.1Z" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  download: <path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  check: <path d="M20 6 9 17l-5-5" />,
  cross: <path d="M17 7 7 17M7 7l10 10" />,
  plus: <path d="M12 5v14M5 12h14" />,
  expand: <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />,
  chevronLeft: <path d="m15 18-6-6 6-6" />,
  chevronRight: <path d="m9 18 6-6-6-6" />,
  lobby: (
    <>
      <path d="M3 21h18M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-5h6v5M10 11h4" />
    </>
  ),
  lift: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="1.5" />
      <path d="M12 2v20M8 9l-1.5 2h3ZM16 13l1.5-2h-3Z" />
    </>
  ),
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />,
  cctv: (
    <>
      <path d="m3 7 13 5 2-4L5 3ZM9 10l-1 4H4M4 11v6" />
      <path d="M18 8l3 1-1 3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 21a7 7 0 0 1 14 0M16 4.5a3.5 3.5 0 0 1 0 7M22 21a7 7 0 0 0-4-6.3" />
    </>
  ),
  rain: (
    <>
      <path d="M7 15a5 5 0 1 1 1.5-9.8A6 6 0 0 1 20 9a4 4 0 0 1-2 6Z" />
      <path d="M8 19l-1 2M12 18l-1 3M16 19l-1 2" />
    </>
  ),
  bath: (
    <>
      <path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5ZM7 19l-1 2M17 19l1 2" />
      <path d="M6 12V5a2 2 0 0 1 4 0M9 7h2" />
    </>
  ),
  kitchen: (
    <>
      <rect x="3" y="3" width="18" height="6" rx="1" />
      <rect x="3" y="12" width="18" height="9" rx="1" />
      <path d="M12 12v9M7 6h.01M12 6h.01M17 6h.01M9.5 16v1M14.5 16v1" />
    </>
  ),
  sofa: (
    <>
      <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v4H3ZM5 17v2M19 17v2" />
    </>
  ),
  bed: <path d="M3 19V6M21 19v-6a3 3 0 0 0-3-3H3M3 15h18M6 10V8.5A1.5 1.5 0 0 1 7.5 7h3A1.5 1.5 0 0 1 12 8.5V10" />,
  train: (
    <>
      <rect x="5" y="3" width="14" height="14" rx="3" />
      <path d="M5 11h14M9 21l-2-4M15 21l2-4M9 14h.01M15 14h.01" />
    </>
  ),
  road: <path d="M5 21 9 3M19 21 15 3M12 5v2M12 11v2M12 17v2" />,
  building: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
    </>
  ),
  store: (
    <>
      <path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 10h8V3M11 21v-6h10M15 10h6" />
    </>
  ),
  rera: (
    <>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
      <path d="M14 3v6h6M8 13h8M8 17h5" />
    </>
  ),
  sparkle: <path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />,
};

export default function Icon({ name, ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width="1em"
      height="1em"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
