import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Fixed dates: update when content changes (a runtime `new Date()` would make this route dynamic).
const UPDATED = new Date("2026-11-09");
const LEGAL_UPDATED = new Date("2026-11-09");

const images = [
  "hero-tower-exterior",
  "amenity-swimming-pool",
  "amenity-yoga-deck",
  "amenity-fitness-track",
  "amenity-gymnasium",
  "amenity-kids-play-area",
  "amenity-gazebo",
  "amenity-senior-citizen-corner",
  "retail-shops-entrance",
  "living-room-family-view",
  "living-room-interior",
  "bedroom-interior",
  "floor-plan-typical",
  "location-map",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: UPDATED,
      changeFrequency: "weekly",
      priority: 1,
      images: images.map((i) => `${site.url}/images/${i}.webp`),
    },
    { url: `${site.url}/privacy-policy`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terms-and-conditions`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.3 },
  ];
}
