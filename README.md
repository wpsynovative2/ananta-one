# Ananta One — Landing Page

The landing page for **Ananta One** (Setuone & Sokha Realty), 1 & 2 BHK homes in a G+22 tower at Madhuban Hills, Golani Naka, Vasai East. Built with Next.js 16 (App Router, Cache Components), TypeScript and Tailwind CSS v4. Leads go to a Google Sheet and are emailed to the sales team through Google Apps Script. reCAPTCHA v3 protects the form.

## Run locally

```bash
cp .env.example .env.local   # fill in the keys (see below)
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Tailwind runs through the `@tailwindcss/turbopack` loader in `next.config.ts` (there is no PostCSS config), so keep building with Turbopack (the default). `next build --webpack` would skip Tailwind.

## Lead pipeline setup

1. **Google Sheet + Apps Script**: create a Google Sheet, open *Extensions → Apps Script* and paste [google-apps-script/Code.gs](google-apps-script/Code.gs).
   Under *Project Settings → Script Properties*, add `TOKEN` (a long random string), `NOTIFY_EMAILS` (comma-separated) and, optionally, `AUTO_REPLY=true`.
   Run `testSetup` once to grant permissions, then *Deploy → New deployment → Web app* with *Execute as: Me* and *Who has access: Anyone*. Copy the `/exec` URL.
2. **reCAPTCHA v3**: create a key at <https://www.google.com/recaptcha/admin> (score based) and add your domain.
3. Fill in `.env.local` / the hosting env vars:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (default `https://www.anantaone.in`) |
| `NEXT_PUBLIC_SALES_EMAIL` | Optional sales email shown in the footer, contact section and schema |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` | reCAPTCHA v3 keys |
| `RECAPTCHA_MIN_SCORE` | Minimum score to accept (default `0.5`) |
| `GOOGLE_SCRIPT_URL` | Apps Script web-app `/exec` URL |
| `GOOGLE_SCRIPT_TOKEN` | Must equal the `TOKEN` script property |
| `NEXT_PUBLIC_GTM_ID` | Optional Google Tag Manager container. Pushes `generate_lead` on /thank-you |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Search Console verification |

Flow: form (client validation: name + Indian mobile required) → `POST /api/enquiry`. The route re-validates, checks the honeypot, rate-limits per IP and verifies reCAPTCHA v3. It then posts the lead to Apps Script, which appends a row and emails sales. On success the user is redirected to `/thank-you`.

## Structure

- `lib/site.ts`: project facts (name, phone, RERA, address, disclaimer).
- `lib/content.ts`: all copy, amenities, room sizes, specifications and connectivity, transcribed from the brochures.
- `components/sections/*`: Hero, Overview, About, Upgrade, Highlights, Amenities, Gallery, Configuration, Floor Plan, Specifications, Location, FAQ, Contact.
- `components/EnquiryButton.tsx`: any button that opens the popup form (`openEnquiry({ source, title })`). The popup also opens once per session after 20 s.
- `components/Loader.tsx`: the loader from `loading.txt`, used for the preloader, route loading and form submission.
- `source-assets/`: the original brochures and logo. Images in `public/images` were cropped from the coffee-table brochure. These files are kept out of `public/` so they aren't deployed.

## SEO

Metadata, Open Graph/Twitter images, canonical URL, robots, sitemap (with images), web manifest and icons are all set. The page carries JSON-LD for Organization, WebSite, WebPage, BreadcrumbList, ApartmentComplex and FAQPage, and `public/llms.txt` covers AI search. /thank-you is noindex. The MahaRERA QR code is shown in the hero, contact section and footer.

After you deploy, submit the sitemap in Google Search Console and create a Google Business Profile for the site office with the same name, address and phone number.
