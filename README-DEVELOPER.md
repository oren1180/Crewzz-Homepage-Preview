# Crewzz Cinematic Homepage

## Locked commercial-language decision

- Crewzz charges a disclosed flat monthly fee.
- Crewzz does not add a percentage markup to approved pass-through project costs for materials, trade labor, or change orders.
- Do not use "zero markup" or "Net Pricing" as an undefined standalone claim.
- Any separate procurement, administration, design, supervision, coordination, delivery, storage, payment-processing, insurance, or specialty-service charge must be disclosed before client approval.
- Crewzz does not currently receive vendor rebates, referral fees, commissions, or purchasing incentives.
- Future vendor-specific compensation arrangements are permitted only when disclosed clearly for the applicable vendor and client transaction.
- Public copy must not promise that Crewzz will never receive vendor compensation in the future.

## What is included

- `index.html`: standalone review and GitHub Pages preview.
- `crewzz-homepage.php`: WordPress child-theme page template that renders the reviewed `index.html` source without copy or layout drift.
- `resource-center.html`: the Resource Center hub, answer library, search interaction, and structured-data reference.
- `resource-page.css`: Resource Center-specific responsive layout and visual system.
- `hack-my-home.html`: focused Hack My Home invitation page with the GHL form modal and community FAQ.
- `hack-my-home-page.css`: Hack My Home invitation-page layout, responsive behavior, and sub-brand treatment.
- `how-crewzz-works.html`, `design.html`, `build.html`, `estates.html`, and `secure.html`: substantial internal-page previews with production canonical URLs.
- `internal.css`: shared internal-page design system.
- `robots.txt` and `sitemap.xml`: production-ready starting points that must be installed at the site root and verified after deployment.
- `assets/images/`: temporary generated concept images plus official Crewzz logo assets.
- `manifesto.html` and `contact.html`: completed company and contact destinations for the review site.
- `privacy-policy.html`, `terms.html`, `cookie-policy.html`, `accessibility.html`, and `disclaimer.html`: substantive legal and accessibility drafts that require final counsel and integration review before production.
- `standard-page.css` and `site-shell.js`: shared presentation, navigation normalization, legal routing, and privacy-choice access for the completed preview.

The ten concept images are temporary and must not be represented as Crewzz projects. Replace them with Crewzz-owned photography or properly licensed final media before production launch.

## WordPress installation

1. Copy this entire `crewzz-wordpress-homepage` folder into the active WordPress child theme.
2. In WordPress, create or edit the Home page.
3. Set its page template to `Crewzz Cinematic Homepage`.
4. Make the page the site homepage under **Settings > Reading**.
5. Confirm that the current theme does not add a second header or footer to this full-document template.

This package does not replace any internal page, Elementor template, plugin, or existing site content. The developer may translate each chapter into Elementor containers if ongoing visual editing inside Elementor is preferred. Preserve the chapter-specific visual treatments instead of converting every section into the same background-image template.

Create `/resources/` in WordPress using `resource-center.html` as the content and information-architecture reference. The current preview keeps the first answer set on the hub so it does not depend on unbuilt category pages. Create individual guides and topic archives only when real content is ready, then confirm the final WordPress permalinks and update the ItemList structured data before launch.

## Required integrations before launch

- Build the four internal page previews as native WordPress pages at their canonical paths. The PHP wrapper maps preview links to those production routes.

- Project-fit application: GoHighLevel, followed by the ASM scheduling flow.
- Crewzz Secure application: GoHighLevel.
- Wellness and Longevity application: GoHighLevel, restricted to Crewzz Estates clients and project fit.
- LIVE waitlist: GoHighLevel.
- Hack My Home: capture in GoHighLevel, then redirect to GoKollab registration.
- Add approved consent and privacy language before collecting phone numbers.
- Replace preview-only form behavior with real success, error, and duplicate-contact handling.
- Preserve the two-step project-fit form and guided path selector when connecting the real CRM flow.
- Replace every block labeled `Approved placeholder` or `Concept imagery` with approved Crewzz-owned proof before launch.
- Add approved GA4 and Meta Pixel identifiers.
- Configure a production consent-management platform after the final analytics, advertising, CRM, video, and embedded-form vendors are confirmed.
- Have qualified counsel review the legal pages against the final data map, contracts, operating jurisdictions, consent flows, and service-provider list.

### Verified Hack My Home form audit, August 4, 2026

- The live form ID is `3JHQVItMxeyb0ViSiNmn`.
- First name, last name, and phone are required. Email is currently optional, even though the confirmation page tells the member to check their inbox for login details. Make email required or change the delivery method before traffic starts.
- The required checkbox currently consents only to non-marketing text messages about community activity. Do not use that consent for webinar invitations, paid offers, or other marketing. Any separate marketing consent must be optional, specific, and reviewed by counsel.
- The consent names `Oren Dagan Hack My Home Community`, while the page presents Hack My Home as a Crewzz community. Confirm the correct legal sender identity and make the form, privacy notice, and automation match it.
- The form button currently says `Submit`. Change it in GoHighLevel to `Request My Free Invitation`.
- The form currently redirects to a GoHighLevel confirmation page, not directly to GoKollab. Preserve an owned, trackable confirmation step before the community handoff.
- Track the Crewzz form completion and the completed community-access event separately. A form record is not the same as an active community member.
- The confirmation page currently directs access questions to `oren@orendagan.com`. Confirm whether that is the approved support address before launch.
- GoKollab is the verified platform spelling. Do not use `GoCollab`.
- Do not publish fixed completion times, one-email promises, no-call promises, or automatic-removal claims unless the live automation and moderation policy enforce them exactly.

## Video replacement pattern

Use cinematic background video only on the Promise and Design + Build chapters. The current images remain as poster fallbacks until approved video files are supplied. Add an HTML5 video inside those chapters:

```html
<video class="slide-media" autoplay muted loop playsinline poster="poster-image.webp">
  <source src="crewzz-slide-video.webm" type="video/webm">
  <source src="crewzz-slide-video.mp4" type="video/mp4">
</video>
```

Use a short, compressed, silent 16:9 loop. Retain the poster image, do not autoplay audio, and replace the video with its poster for visitors who prefer reduced motion. The menu intentionally retains the existing Crewzz brand video. WordPress should serve final files from the Media Library or a configured CDN.

## Copy decisions included

- Crewzz brings Stewardship to the homeowner experience and leads a movement for a better model.
- No homepage webinar or Reality Check promotion.
- Hack My Home members are called Home Hackers.
- Community promise: `Learn without being treated like a lead.`
- Supporting protection: no unsolicited contractor chasing.
- Security and Safety is by application and project fit.
- Wellness and Longevity are for Crewzz Estates clients, by application and project fit.
- LIVE is currently at capacity and routes to a waitlist.

## SEO and AI-search launch requirements

- Add the Resource Center to the XML sitemap and the primary navigation.
- Publish original, expert-reviewed articles with visible authors, updated dates, descriptive headings, contextual internal links, and useful images or video.
- Add `Article`, `BreadcrumbList`, and `VideoObject` structured data only where the visible page content supports it.
- Confirm `robots.txt` allows Googlebot, Bingbot, and OAI-SearchBot to crawl public content. Do not block required CSS, JavaScript, images, or video posters.
- Verify canonical URLs, Open Graph images, redirects, Core Web Vitals, and Search Console indexing after production deployment.
- Do not add invented FAQ markup, ratings, locations, services, research, or claims solely for search visibility.
