# Agent Instructions & Project Guidelines: Vendor Outbound Malang

## 1. Project Overview & Architecture
- **Brand / Site**: Vendor Outbound Malang (`vendoroutboundmalang.web.id`)
- **Focus**: High-performance, SEO-optimized, accessible static website for outbound services, team building, gathering, rafting, paintball, and offroad in Malang & Kota Batu.
- **Tech Stack**: HTML5, Vanilla CSS3 (custom design system), Bootstrap 5.3.3 (grid/modals), Vanilla JavaScript.

## 2. High Performance & PageSpeed (Target: 95–100)
When making changes to HTML, CSS, or media assets, adhere to these Core Web Vitals standards:
- **Zero Render-Blocking CSS**:
  - Critical above-the-fold CSS must be inlined in `<head>`.
  - External stylesheets (`bootstrap.min.css`, `style.css`, Google Fonts) must load asynchronously using `media="print" onload="this.media='all'"` with `<noscript>` fallbacks.
  - Preconnect & DNS-prefetch must be placed at the top of `<head>` for `fonts.googleapis.com`, `fonts.gstatic.com`, and `cdn.jsdelivr.net`.
- **Largest Contentful Paint (LCP)**:
  - Always preload the above-the-fold hero/featured image via `<link rel="preload" as="image" href="..." fetchpriority="high">`.
  - The hero image must have `loading="eager" fetchpriority="high" decoding="async"`.
- **Image Optimization**:
  - Always use modern `.webp` formats.
  - Properly size images for their display containers (e.g. use `-thumb.webp` for cards, full size for hero banners).
  - All below-the-fold images must have `loading="lazy" decoding="async"` and explicit `width` and `height`.
- **JavaScript Execution**:
  - All script tags must have the `defer` attribute.
  - JavaScript must not execute heavy calculations during page load (keep TBT = 0ms).
- **Caching & Compression**:
  - Maintain 1-year cache headers (`Cache-Control: max-age=31536000, public, immutable`) and Gzip/Brotli (`mod_deflate`) in `.htaccess` and `vercel.json`.

## 3. Structured Data (Schema.org JSON-LD) Standards
- Maintain 100% valid JSON-LD graph syntax on all pages:
  - **Service Pages (`layanan/*.html`)**: `Product`, `offers` (Merchant Listing), `aggregateRating`, `review`, `BreadcrumbList`, `Organization` / `LocalBusiness`.
  - **Blog Articles (`blog/*.html`)**: `BlogPosting`, `BreadcrumbList`, `LocalBusiness`, `Organization`, with proper ISO-8601 datetimes (`+07:00`).
  - **Author Pages (`author/*.html`)**: `ProfilePage`, `Person`, `BreadcrumbList`.
  - **Content Pages**: `BreadcrumbList`, `LocalBusiness`, `Organization`.

## 4. UI Design & Mobile Accessibility
- Adhere to the editorial nature palette (Deep Forest Green `#173627`, Deep Teal `#0D5C64`, Burnt Sienna `#B85324`, Ivory `#FAF8F4`).
- Maintain WCAG AA contrast standards (minimum 4.5:1 for body text, 3:1 for large text and UI components).
- Ensure all interactive elements have visible `:focus-visible` styles and minimum 44x44px touch targets.

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, load the antislop skill for the task:
- Core filter, always on: `antislop`
- UI / visual: `antislop-ui`
- Copy & text: `antislop-copywriting`
- People: `antislop-human`
- Mobile / responsive: `antislop-layoutmobile`
- Code comments: `antislop-code`
Before starting, ask the user when antislop applies: during the work, or after it is done.
<!-- antislop:end -->
