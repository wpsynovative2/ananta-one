import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { disclaimer, site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms of use for the ${site.name} website, including RERA and indicative-information notices.`,
  alternates: { canonical: "/terms-and-conditions" },
};

const LAST_UPDATED = "9 November 2026";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    body: (
      <p>
        By using this website you agree to these terms. The website is operated on behalf of {site.developer}, the promoters of{" "}
        {site.name}. If you do not agree, please do not use the website.
      </p>
    ),
  },
  {
    id: "information-only",
    title: "Information only, not an offer",
    body: (
      <>
        <p>
          The content on this website is for general information about {site.name}. It does not constitute an offer, an invitation
          to offer, or a contract of any kind. Any purchase is governed solely by the registered Agreement for Sale and applicable
          law.
        </p>
        <p>
          The project is registered with MahaRERA under Registration No. <strong>{site.rera}</strong>. Registration details are
          available at{" "}
          <a href={site.reraUrl} target="_blank" rel="noopener noreferrer">
            maharera.maharashtra.gov.in
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "indicative",
    title: "Images, plans and specifications",
    body: (
      <ul>
        <li>All images, renders and illustrations are artist&apos;s impressions and may differ from the actual project. People shown are illustrative.</li>
        <li>Specifications, amenities, layouts, room dimensions and carpet areas are indicative and subject to change as per approvals from the competent authorities.</li>
        <li>Furniture, fixtures and décor shown are not part of the standard offering unless specified in the Agreement for Sale.</li>
        <li>Carpet area is as defined under RERA. Room sizes shown on the website are taken from typical plans and are indicative.</li>
      </ul>
    ),
  },
  {
    id: "infrastructure",
    title: "Location and infrastructure",
    body: (
      <p>
        Infrastructure projects mentioned on this website are planned or executed by government agencies. Their scope and timelines
        may change and are not within the promoters&apos; control. Maps are not to scale. Travel times are approximate and depend on
        traffic and mode of transport.
      </p>
    ),
  },
  {
    id: "enquiries",
    title: "Enquiries and communication",
    body: (
      <p>
        When you submit an enquiry, you confirm the details are yours and accurate, and you consent to be contacted as described in
        our <Link href="/privacy-policy">Privacy Policy</Link>. Prices, offers and availability shared by our team are valid only
        as confirmed in writing by the promoters.
      </p>
    ),
  },
  {
    id: "channel-partners",
    title: "Agents and channel partners",
    body: (
      <p>
        The promoters are not responsible for information or commitments given by real estate agents, brokers or channel partners
        that are not confirmed in writing by the promoters. Please verify all details directly with us before making any payment.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <p>
        The {site.name} name, logo, images, text and design on this website belong to the promoters or are used with permission.
        You may not copy, reproduce or reuse them without written consent.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        We try to keep the website accurate and available, but we do not guarantee it is free of errors or interruptions. To the
        extent permitted by law, the promoters are not liable for any loss arising from reliance on unverified website content.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: <p>{disclaimer}</p>,
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India. Courts at Vasai/Palghar, Maharashtra shall have jurisdiction. For any
        questions, call <a href={telHref}>{site.phoneDisplay}</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" lastUpdated={LAST_UPDATED} sections={sections} />;
}
