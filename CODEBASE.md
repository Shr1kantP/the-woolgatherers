# Woolgatherers Codebase Overview

## Project Summary

This repository is a Next.js 16 App Router project built with TypeScript and Tailwind CSS. It is a single-page experience with a hero section centered around a meadow/tree background, a decorative key element, and a visually styled stay request card.

## Key Files and Structure

### Root Files
- `package.json` - project dependencies and scripts.
- `next.config.ts` - Next.js configuration.
- `tsconfig.json` - TypeScript settings.
- `app/layout.tsx` - root layout for the app. Applies global fonts and CSS imports.
- `app/page.tsx` - the home page entrypoint. It renders the `Hero` component.
- `app/globals.css` - global styles, Tailwind import, custom font face, and card mask styles.

### App Folder
- `app/components/hero.tsx` - hero section component. Contains the background image, upper frame image, gradient overlay, key image, and heading.
- `app/components/smoothscroll.tsx` - additional component present in the app (not currently used by the hero layout).
- `app/lib/gsap.ts` - GSAP registration module for `ScrollTrigger` and `MotionPathPlugin`.

### Public Assets
- `public/images/hero-bg.jpg` - hero background image.
- `public/images/hero/upper-frame.png` - decorative upper frame overlay image.
- `public/images/floating_key.svg` - key graphic displayed in the hero.
- `public/images/card-blob-mask.svg` - SVG mask used by the card shape.
- `public/fonts/OSWALD-BOLD.TTF` - local custom font asset loaded through `@font-face`.

## Component Behavior

### `app/page.tsx`
- Simple page component that imports and renders `Hero`.

### `app/components/hero.tsx`
- Marked as a client component with `"use client"`.
- Uses `next/image` for optimized images.
- Renders a full viewport hero section with:
  - a background image using `fill` and `object-cover`
  - an upper frame overlay positioned in the top-left area
  - a dark gradient at the bottom for text contrast
  - a key graphic as an absolutely positioned decorative element
  - a large centered heading at the bottom
- The hero uses Tailwind for layout, z-index stacking, and responsive sizing.

### `app/components/smoothscroll.tsx`
- Contains client-side scroll handling logic using `lenis` and `gsap`.
- Not directly used in the current `Hero` component.
- It likely supports scroll-based motion or smooth page scrolling if wired into a later version.

### `app/lib/gsap.ts`
- Registers GSAP plugins for scroll-based animations.
- This is a shared helper imported by any animation-driven component.

## Styling and Custom UI

### Global CSS
- `@import "tailwindcss";` enables Tailwind styles.
- `:root` defines color and font CSS variables.
- `body` has a default dark background and base font settings.
- `@font-face` declares `Oswald` from the local font file.
- `.font-heading` maps the custom heading font family.
- `.wavy-card` applies the SVG mask asset to create the scalloped card shape.

### Hero Styles
- `hero.tsx` relies on absolute positioning and `z-[*]` stacking for all hero layers.
- The hero heading uses `text-[14vw]` and `md:text-[10vw]` for responsive scaling.
- The key and frame assets use inline and Tailwind positioning to preserve animation-ready layout.

## Known Issues and Notes

- The app has had hydration mismatches due to browser autofill attributes on form inputs. A stable fix is to disable browser autocomplete and use `suppressHydrationWarning` if needed.
- The current `Hero` layout may still require direct left-edge alignment tweaks if the frame or card should be flush left.
- There is no `HeroCard.tsx` file present in the current repository; the card is implemented directly inside `hero.tsx`.

## How an Agent Should Use This Summary

For future automation or editing:
1. `app/page.tsx` is the page entrypoint.
2. `app/components/hero.tsx` is the main visual layout component to modify.
3. `app/globals.css` contains Tailwind setup, custom fonts, and the card mask rule.
4. `public/images/` contains all visual assets referenced by the hero.
5. `app/lib/gsap.ts` is the GSAP utility for any animation work.

If asked to change the hero design, modify `hero.tsx` first. If asked to change the card style, update `.wavy-card` in `globals.css` and the card markup in `hero.tsx`.
