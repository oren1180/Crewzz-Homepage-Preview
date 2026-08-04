# Crewzz Cinematic Homepage

## What is included

- `index.html`: standalone review and GitHub Pages preview.
- `crewzz-homepage.php`: WordPress child-theme page template.
- `assets/images/`: temporary generated concept images plus official Crewzz logo assets.

The ten concept images are temporary and must not be represented as Crewzz projects. Replace them with Crewzz-owned photography or properly licensed final media before production launch.

## WordPress installation

1. Copy this entire `crewzz-wordpress-homepage` folder into the active WordPress child theme.
2. In WordPress, create or edit the Home page.
3. Set its page template to `Crewzz Cinematic Homepage`.
4. Make the page the site homepage under **Settings > Reading**.
5. Confirm that the current theme does not add a second header or footer to this full-document template.

This package does not replace any internal page, Elementor template, plugin, or existing site content. The developer may translate each slide into Elementor containers if ongoing visual editing inside Elementor is preferred.

## Required integrations before launch

- Project-fit application: GoHighLevel, followed by the ASM scheduling flow.
- Crewzz Secure application: GoHighLevel.
- Wellness and Longevity application: GoHighLevel, restricted to Crewzz Estates clients and project fit.
- LIVE waitlist: GoHighLevel.
- Hack My Home: capture in GoHighLevel, then redirect to GoKollab registration.
- Add approved consent and privacy language before collecting phone numbers.
- Replace preview-only form behavior with real success, error, and duplicate-contact handling.
- Add approved GA4 and Meta Pixel identifiers.

## Video replacement pattern

For cinematic video, replace a slide's generated background with an HTML5 video inside that slide:

```html
<video class="slide-media" autoplay muted loop playsinline poster="poster-image.webp">
  <source src="crewzz-slide-video.webm" type="video/webm">
  <source src="crewzz-slide-video.mp4" type="video/mp4">
</video>
```

Use a short, compressed, silent 16:9 loop. Retain the poster image, do not autoplay audio, and disable autoplay motion for visitors who prefer reduced motion. WordPress should serve the files from the Media Library or a configured CDN.

## Copy decisions included

- Crewzz brings Stewardship to the homeowner experience and leads a movement for a better model.
- No homepage webinar or Reality Check promotion.
- Hack My Home members are called Home Hackers.
- Community promise: `Learn without being treated like a lead.`
- Supporting protection: no unsolicited contractor chasing.
- Crewzz Secure is by application and project fit.
- Wellness and Longevity are for Crewzz Estates clients, by application and project fit.
- LIVE is currently at capacity and routes to a waitlist.

