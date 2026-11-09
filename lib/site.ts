// Single source of truth for project facts used across the page, metadata and schema.
// Details come from the ANANTA ONE coffee-table brochure (source-assets/).

export const site = {
  name: "Ananta One",
  developer: "Setuone & Sokha Realty",
  developers: [
    { name: "Setuone", tagline: "Building Trust, Creating Futures" },
    { name: "Sokha Realty", tagline: "Homes for Life" },
  ],
  architect: "Sanat Mehta & Associates",
  rccConsultant: "Bhavin C Shah",
  tagline: "Extraordinary Living for Extraordinary You",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.anantaone.in").replace(/\/$/, ""),
  phoneDisplay: "+91 91672 87797",
  phoneE164: "+919167287797",
  whatsapp: "919167287797",
  // Not printed in the brochure. Set NEXT_PUBLIC_SALES_EMAIL to show it on the site.
  email: process.env.NEXT_PUBLIC_SALES_EMAIL || "",
  rera: "PM1240002601890",
  reraUrl: "https://maharerait.maharashtra.gov.in/project/view/66045",
  address: {
    street: "Madhuban Hills, Golani Naka",
    locality: "Vasai East",
    city: "Vasai-Virar",
    region: "Maharashtra",
    postalCode: "401208",
    country: "IN",
  },
  addressLine: "Madhuban Hills, Golani Naka, Vasai East, Vasai-Virar, Maharashtra 401208",
  mapsQuery: "Madhuban Hills, Golani Naka, Vasai East, Vasai-Virar, Maharashtra 401208",
  description:
    "Ananta One by Setuone & Sokha Realty: 1 & 2 BHK homes in a G+22 tower at Madhuban, Vasai East. Podium pool, sky garden, gym, 4 lifts. MahaRERA PM1240002601890.",
  keywords: [
    "Ananta One",
    "Ananta One Vasai",
    "Ananta One Vasai East",
    "Setuone Sokha Realty",
    "1 BHK flats in Vasai East",
    "2 BHK flats in Vasai East",
    "new projects in Vasai East",
    "Madhuban Vasai East flats",
    "Golani Naka Vasai flats",
    "flats near Vasai Road station",
    "residential projects Vasai-Virar",
    "flats with swimming pool in Vasai",
    "MahaRERA PM1240002601890",
  ],
};

export const telHref = `tel:${site.phoneE164}`;
export const mailHref = site.email ? `mailto:${site.email}` : "";
export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi, I'm interested in Ananta One, Vasai East. Please share the details.",
)}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

export const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#amenities", label: "Amenities" },
  { href: "#configuration", label: "Configuration" },
  { href: "#floor-plan", label: "Floor Plan" },
  { href: "#specifications", label: "Specifications" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
] as const;

// From the brochure cover, plus the standard indicative-information notes.
export const disclaimer =
  "All information, plans, specifications, images, configurations, dimensions and facilities mentioned herein are indicative, provisional and subject to approval by the concerned authorities. The Promoter reserves the right to make changes or alterations at its sole discretion. The images, visuals, descriptions and other details contained herein are purely conceptual and do not constitute an advertisement, offer for sale or invitation to acquire under the Real Estate (Regulation and Development) Act, 2016 (\"RERA\"). Any purchase shall be governed by the terms and conditions of the Agreement for Sale. Interested parties are advised to independently verify all information with the Promoter before purchase. The Promoter shall not be responsible for any inaccuracies, omissions or actions taken in reliance on unverified information provided on websites, brochures or by Real Estate Agents/Brokers/Channel Partners. Infrastructure projects mentioned are planned or executed by government agencies; their scope and timelines are subject to change and are not within the Promoter's control. *T&C Apply.";
