import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { mailHref, site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.developer} collects, uses and protects personal information shared through the ${site.name} website.`,
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "9 November 2026";

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <p>
        This website promotes <strong>{site.name}</strong>, a residential project promoted by <strong>{site.developer}</strong>{" "}
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) at {site.addressLine}, registered under MahaRERA No. {site.rera}.
        This policy explains how we handle personal information you share with us through this website, in line with the Digital
        Personal Data Protection Act, 2023 and the Information Technology Act, 2000 and rules made under them.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>When you submit an enquiry form, we collect:</p>
        <ul>
          <li>Your full name and mobile number (required);</li>
          <li>Your email address and preferred configuration (1 or 2 BHK), if you choose to share them;</li>
          <li>The form or button you used and the page you were on.</li>
        </ul>
        <p>We also collect some information automatically:</p>
        <ul>
          <li>Campaign details in the page link, such as UTM tags and Google/Meta click identifiers (gclid, fbclid);</li>
          <li>Your IP address and browser user-agent, used for security and to prevent spam;</li>
          <li>A spam-risk score from Google reCAPTCHA v3 (see &ldquo;Third-party services&rdquo;);</li>
          <li>Small items stored in your browser, such as whether you have already seen the enquiry pop-up.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <ul>
        <li>To respond to your enquiry and share the price sheet, brochure, floor plans and project updates you request;</li>
        <li>To arrange site visits and follow up through our sales team or authorised channel partners;</li>
        <li>To understand which advertising campaigns bring enquiries, so we can improve our marketing;</li>
        <li>To protect the website and our forms from spam, fraud and abuse;</li>
        <li>To comply with legal and regulatory obligations, including those under RERA.</li>
      </ul>
    ),
  },
  {
    id: "consent",
    title: "Your consent to be contacted",
    body: (
      <p>
        By submitting a form, you consent to {site.developer} and its authorised representatives contacting you about {site.name}{" "}
        by phone call, SMS, email or WhatsApp. This consent overrides any registration on the National Do Not Call (DND/NDNC)
        registry for these communications. You can withdraw consent at any time by calling <a href={telHref}>{site.phoneDisplay}</a>{" "}
        and asking us to stop.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>We do not sell your personal information. We share it only with:</p>
        <ul>
          <li>
            <strong>Google</strong>, through Google Sheets and Apps Script, which keep our enquiry log and send email alerts to our
            sales team;
          </li>
          <li>Our employees and authorised channel partners who need it to assist you with your enquiry;</li>
          <li>Government authorities or courts, where the law requires it.</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services and cookies",
    body: (
      <>
        <ul>
          <li>
            <strong>Google reCAPTCHA v3</strong> protects our forms from bots. It collects hardware and software information and
            sends it to Google for analysis. Its use is subject to the Google{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>
            .
          </li>
          <li>
            <strong>Google Maps</strong> is embedded to show the project location and may set its own cookies.
          </li>
          <li>
            <strong>Analytics and advertising tags</strong>, such as Google Tag Manager, Google Analytics or Meta Pixel, may be used
            to measure visits and ad performance. These may use cookies or similar technologies.
          </li>
        </ul>
        <p>You can block or delete cookies in your browser settings. Some parts of the site, such as the map, may not work fully if you do.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <p>
        We keep enquiry information only as long as needed for the purposes above: generally for the duration of your interest in
        the project and any resulting purchase, plus any period required by law. After that, we delete or anonymise it.
      </p>
    ),
  },
  {
    id: "security",
    title: "How we protect it",
    body: (
      <p>
        The website is served over HTTPS, and form submissions are checked and sent to our systems through secure server-side
        connections. Access to enquiry data is limited to people who need it. No method of transmission or storage is completely
        secure, but we take reasonable steps to protect your information.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Subject to applicable law, you may:</p>
        <ul>
          <li>Ask what personal information we hold about you and how we use it;</li>
          <li>Ask us to correct, complete or update it;</li>
          <li>Ask us to erase it, or withdraw your consent to further processing;</li>
          <li>Raise a grievance about how we have handled it;</li>
          <li>Nominate another person to exercise these rights on your behalf.</li>
        </ul>
        <p>To make a request, contact us using the details below. We may need to verify your identity first.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        This website is intended for adults. We do not knowingly collect personal information from anyone under 18. If you believe a
        child has sent us their details, please contact us and we will delete them.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top shows when it was last revised.</p>,
  },
  {
    id: "contact",
    title: "Contact and grievances",
    body: (
      <>
        <p>For questions, requests or complaints about your personal information, contact:</p>
        <address className="not-italic">
          <strong>Grievance Officer, {site.developer}</strong>
          <br />
          {site.addressLine}
          <br />
          Phone: <a href={telHref}>{site.phoneDisplay}</a>
          {site.email && (
            <>
              <br />
              Email: <a href={mailHref}>{site.email}</a>
            </>
          )}
        </address>
        <p>
          We will acknowledge your request and respond within the time required by law. If you are not satisfied with our response,
          you may approach the Data Protection Board of India.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED} sections={sections} />;
}
