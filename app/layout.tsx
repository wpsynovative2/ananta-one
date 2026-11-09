import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import MobileCtaBar from "@/components/MobileCtaBar";
import { site } from "@/lib/site";
import "./globals.css";

// Fonts are self-hosted (app/fonts, latin subset, variable weights) so the build never fetches from Google.

// Headings: uppercase serif, close to the brochure's heading face.
const cormorant = localFont({
  variable: "--font-cormorant",
  src: "./fonts/cormorant-garamond-variable.woff2",
  weight: "300 700",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
// Accent serif (numbers, italics).
const playfair = localFont({
  variable: "--font-playfair",
  src: [
    { path: "./fonts/playfair-display-variable.woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/playfair-display-italic-variable.woff2", weight: "400 700", style: "italic" },
  ],
  display: "swap",
  fallback: ["Georgia", "serif"],
});
// Body: clean geometric sans like the brochure body copy.
const montserrat = localFont({
  variable: "--font-montserrat",
  src: "./fonts/montserrat-variable.woff2",
  weight: "400 700",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const title = "Ananta One Vasai East | 1 & 2 BHK Flats by Setuone & Sokha Realty";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.developer, url: site.url }],
  creator: site.developer,
  publisher: site.developer,
  category: "Real Estate",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Vasai East, Vasai-Virar",
  },
};

export const viewport: Viewport = {
  themeColor: "#5c211b",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only z-[200] rounded-full bg-cream px-4 py-2 text-copper-700 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
        <EnquiryModal />

        {RECAPTCHA_SITE_KEY && (
          <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} strategy="lazyOnload" />
        )}
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </body>
    </html>
  );
}
