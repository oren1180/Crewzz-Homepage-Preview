# Crewzz Cinematic Homepage

## What is included

- `index.html`: standalone review and GitHub Pages preview.
- `crewzz-homepage.php`: WordPress child-theme page template that renders the reviewed `index.html` source without copy or layout drift.
- `resource-center.html`: the proposed Resource Center architecture and preview landing page.
- `assets/images/`: temporary generated concept images plus official Crewzz logo assets.

The ten concept images are temporary and must not be represented as Crewzz projects. Replace them with Crewzz-owned photography or properly licensed final media before production launch.

## WordPress installation

1. Copy this entire `crewzz-wordpress-homepage` folder into the active WordPress child theme.
2. In WordPress, create or edit the Home page.
3. Set its page template to `Crewzz Cinematic Homepage`.
4. Make the page the site homepage under **Settings > Reading**.
5. Confirm that the current theme does not add a second header or footer to this full-document template.

This package does not replace any internal page, Elementor template, plugin, or existing site content. The developer may translate each chapter into Elementor containers if ongoing visual editing inside Elementor is preferred. Preserve the chapter-specific visual treatments instead of converting every section into the same background-image template.

Create `/resources/` in WordPress using `resource-center.html` as the content and information-architecture reference. The preview contains proposed category links. Confirm the final WordPress permalinks before launch.

## Required integrations before launch

- Create and publish `/how-crewzz-works/` before activating the WordPress template. The standalone preview routes those CTAs to the Stewardship slide until that page exists.

- Project-fit application: GoHighLevel, followed by the ASM scheduling flow.
- Crewzz Secure application: GoHighLevel.
- Wellness and Longevity application: GoHighLevel, restricted to Crewzz Estates clients and project fit.
- LIVE waitlist: GoHighLevel.
- Hack My Home: capture in GoHighLevel, then redirect to GoKollab registration.
- Add approved consent and privacy language before collecting phone numbers.
- Replace preview-only form behavior with real success, error, and duplicate-contact handling.
- Add approved GA4 and Meta Pixel identifiers.

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
