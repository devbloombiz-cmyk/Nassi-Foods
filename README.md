# Nazzifoods Website

Product-focused React website for Nazzifoods, a ready-made mix package provider.

## Core Sections

- Hero with static background image
- Responsive product video grid
- Order CTA with branded background
- Device-optimized process video section
- Service highlights and contact enquiry section

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (lightweight section transitions)

## Run Locally

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Optimization Notes

- Heavy startup loader and cursor effects removed from homepage flow.
- Videos use `preload="metadata"` and responsive sizing.
- Main page sections are simplified for faster load and scroll stability.
