import { allAmenities, configurations, faqs } from "@/lib/content";
import { site } from "@/lib/site";

/** Structured data for rich results: Organization, WebSite, WebPage, ApartmentComplex, FAQPage, BreadcrumbList. */
export default function JsonLd() {
  const url = site.url;
  const address = {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  };
  const email = site.email || undefined;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "RealEstateAgent"],
        "@id": `${url}/#organization`,
        name: site.developer,
        url,
        logo: `${url}/icons/icon-512.png`,
        image: `${url}/images/hero-tower-exterior.webp`,
        telephone: site.phoneE164,
        email,
        address,
        areaServed: ["Vasai", "Vasai-Virar", "Palghar", "Mumbai Metropolitan Region"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phoneE164,
          email,
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: site.name,
        inLanguage: "en-IN",
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: `${site.name} | 1 & 2 BHK Flats in Vasai East`,
        description: site.description,
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#residence` },
        primaryImageOfPage: `${url}/images/hero-tower-exterior.webp`,
        breadcrumb: { "@id": `${url}/#breadcrumb` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [{ "@type": "ListItem", position: 1, name: site.name, item: url }],
      },
      {
        "@type": "ApartmentComplex",
        "@id": `${url}/#residence`,
        name: site.name,
        description: site.description,
        url,
        telephone: site.phoneE164,
        address,
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`,
        numberOfAccommodationUnits: 214,
        image: [
          `${url}/images/hero-tower-exterior.webp`,
          `${url}/images/amenity-swimming-pool.webp`,
          `${url}/images/living-room-family-view.webp`,
          `${url}/images/floor-plan-typical.webp`,
        ],
        amenityFeature: allAmenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
        containsPlace: configurations.map((c) => ({
          "@type": "Apartment",
          name: `${site.name} ${c.type}`,
          numberOfRooms: parseInt(c.type, 10) + 1,
          numberOfBedrooms: parseInt(c.type, 10),
          description: c.blurb,
        })),
        identifier: { "@type": "PropertyValue", name: "MahaRERA Registration No.", value: site.rera },
        brand: site.developers.map((d) => ({ "@type": "Brand", name: d.name, slogan: d.tagline })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />;
}
