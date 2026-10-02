This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Dependencies and validation

Use Node.js 22 or 24 LTS for development and deployment. The declared minimum
is Node.js 20.9, as required by Next.js and Sharp. Install the committed lockfile
with `npm ci`.

Before deployment, run:

```bash
npm run lint
npm run test:dependencies
npm run build
npm audit
```

`test:dependencies` exercises Sharp with a real site image, composes a Nodemailer
message without sending email, and checks Axios against a loopback HTTP server.
Also check the production build's page routes, image optimization, keyboard
navigation, and the disabled booking responses after dependency upgrades.

Next.js and `eslint-config-next` are aligned at 16.3.8. ESLint uses the native
flat configuration and the standalone CLI. ESLint 9.39.5 is retained because
`eslint-plugin-react` still excludes ESLint 10 from its peer range. ESLint 9 is
end-of-life: move to ESLint 10 when the configuration's plugins support it;
do not bypass their peer requirements with `--force` or `--legacy-peer-deps`.

### Content, motion and optional widgets

Homepage content is visible in the server-rendered HTML. The shared `Motion`
wrapper adds a small translation after initialization; it never hides content
and skips or cancels movement when reduced motion is requested. The menu page
has no entrance animations. Both photo carousels are manually operated, with
Bootstrap's reduced-motion styles retained.

Google Maps is an optional enhancement gated by CookieYes's `functional`
category. `ConsentMap` reads `getCkyConsent()` and subscribes to
`cookieyes_banner_load` and `cookieyes_consent_update`, including withdrawal.
Keep the map's category aligned with the CookieYes configuration. See the
[consent API](https://www.cookieyes.com/documentation/retrieving-consent-data-using-api-getckyconsent/),
[banner-load event](https://www.cookieyes.com/documentation/events-on-cookie-banner-load/)
and [consent-change event](https://www.cookieyes.com/documentation/events-on-cookie-banner-interactions/).
Without the provider or consent, the embedded map remains absent.

The address and directions link remain visible independently of the map, and
telephone booking is available independently of the homepage booking widget.
These contact details share `lib/restaurant.js`. The Quandoo configuration is
unchanged.

### Custom booking system

The custom booking system is preserved but disabled by
`CUSTOM_BOOKING_ENABLED` in `lib/booking-config.js`. `/booking` returns 404
with `noindex`, and `/api/booking` rejects POST requests with 404 before
parsing the request or sending email. The page is excluded from the sitemap;
booking links point to the existing homepage widget.

Twilio was removed from the installed dependencies because its only reference
is the commented-out WhatsApp prototype. That reference code remains preserved;
restoring WhatsApp would require a separately reviewed integration and dependency.

Before re-enabling, resolve the booking audit findings: server validation,
HTTP error statuses, email escaping, abuse protection, duplicate submissions,
and accessible form controls and feedback. Review the page's intentional
`noindex` setting, sitemap inclusion, and navigation separately.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
