# Design System - Lalith Ebinezer Portfolio

> **Source**: Stitch Project 3274976851825864082 - Variant C  
> **Last Updated**: 2026-02-13  
> **Purpose**: Single source of truth for design specifications to maintain consistency with Stitch design

## Color Palette

### Primary Colors

```css
--primary: #d4a574; /* Warm gold - buttons, links, accents */
--primary-hover: #c89456; /* Darker gold for hover states */
--primary-light: rgba(212, 165, 116, 0.1); /* Light gold backgrounds */
```

### Background Colors

```css
--background-light: #faf8f5; /* Warm cream background */
--background-dark: #1a1410; /* Deep brown background */
--surface-light: #ffffff; /* Light mode cards/surfaces */
--surface-dark: #2a2218; /* Dark brown cards/surfaces */
```

### Sand/Desert Scale (Neutral Colors)

```css
--sand-50: #faf8f5;
--sand-100: #f5f0e8;
--sand-200: #e8dcc8;
--sand-300: #d4c4a8;
--sand-400: #b8a080;
--sand-500: #9c8060;
--sand-600: #7a6248;
--sand-700: #5a4830;
--sand-800: #3a2e20;
--sand-900: #1a1410;
```

### Semantic Colors

```css
--text-primary-light: #1a1410; /* Main text in light mode */
--text-primary-dark: #f5f0e8; /* Main text in dark mode */
--text-secondary-light: #7a6248; /* Secondary text in light mode */
--text-secondary-dark: #b8a080; /* Secondary text in dark mode */
```

## Typography

### Font Families

```css
--font-display: "Outfit", sans-serif; /* Headings, hero text, brand */
--font-body: "Inter", sans-serif; /* Body text, UI elements */
```

### Font Sizes

```css
--text-xs: 0.625rem; /* 10px - tiny labels, badges */
--text-sm: 0.875rem; /* 14px - small text, captions */
--text-base: 1rem; /* 16px - body text */
--text-lg: 1.125rem; /* 18px - large body text */
--text-xl: 1.25rem; /* 20px - section subtitles */
--text-2xl: 1.5rem; /* 24px - card titles */
--text-3xl: 1.875rem; /* 30px - section headings */
--text-4xl: 2.25rem; /* 36px - page headings */
--text-6xl: 3.75rem; /* 60px - hero text (mobile) */
--text-8xl: 6rem; /* 96px - hero text (desktop) */
```

### Font Weights

```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;
```

### Line Heights

```css
--leading-tight: 1.25; /* Headings */
--leading-normal: 1.5; /* Body text */
--leading-relaxed: 1.625; /* Comfortable reading */
```

### Letter Spacing

```css
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em; /* Uppercase labels */
```

## Spacing System

Base unit: **8px**

```css
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
--space-32: 8rem; /* 128px */
```

## Border Radius

```css
--radius-sm: 0.25rem; /* 4px - small elements */
--radius-default: 0.5rem; /* 8px - cards, inputs (PRIMARY) */
--radius-md: 0.75rem; /* 12px - medium cards */
--radius-lg: 1rem; /* 16px - large cards */
--radius-xl: 1.5rem; /* 24px - hero images */
--radius-2xl: 2rem; /* 32px - feature cards */
--radius-full: 9999px; /* Circular - buttons, badges */
```

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-default:
  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md:
  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg:
  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl:
  0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

## Animations

### Transition Durations

```css
--duration-fast: 150ms; /* Quick interactions */
--duration-normal: 300ms; /* Standard transitions */
--duration-slow: 500ms; /* Emphasis animations */
```

### Easing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Common Animations

- **Hover Scale**: `transform: scale(1.05)` with `transition: transform 300ms ease-out`
- **Fade In**: `opacity: 0 → 1` with `transition: opacity 300ms ease-out`
- **Slide Up**: `transform: translateY(20px) → translateY(0)` with `transition: transform 500ms ease-out`
- **Image Zoom**: `transform: scale(1) → scale(1.05)` on hover

## Component Specifications

### Navigation Bar

- **Height**: 80px (5rem)
- **Background**: `rgba(255, 255, 255, 0.8)` with `backdrop-filter: blur(10px)`
- **Border**: Bottom 1px solid `--slate-200`
- **Position**: Fixed, top: 0, z-index: 50
- **Logo Font**: Outfit, bold, 1.25rem
- **Link Spacing**: 2rem between items
- **Link Hover**: Color changes to `--primary` with 300ms transition

### Hero Section

- **Padding**: Top 8rem, bottom 5rem
- **Layout**: 60/40 split (text/image) on desktop
- **Image Aspect Ratio**: 4:5
- **Image Border Radius**: 1.5rem (24px)
- **Image Filter**: `grayscale(100%) contrast(1.25)`
- **Heading Size**: 6rem (desktop), 3.75rem (mobile)
- **Subheading Color**: `--slate-400` (light), `--slate-600` (dark)

### Timeline Components

- **Line Width**: 1px
- **Line Color**: `--slate-200` (light), `--slate-700` (dark)
- **Dot Size**: 10px (0.625rem)
- **Active Dot Color**: `--primary`
- **Inactive Dot Color**: `--slate-300` (light), `--slate-700` (dark)
- **Dot Ring**: 4px solid `rgba(37, 99, 235, 0.2)` for active

### Cards

- **Background**: `--surface-light` / `--surface-dark`
- **Border**: 1px solid `--slate-100` (light), `--slate-800` (dark)
- **Border Radius**: 1rem (16px) for standard, 2rem (32px) for feature cards
- **Padding**: 2rem (32px) for standard, 3rem (48px) for large
- **Hover Border**: Changes to `rgba(37, 99, 235, 0.3)`
- **Shadow**: `--shadow-sm` default, `--shadow-md` on hover

### POC/Expertise Cards

- **Background Image Opacity**: 0.05 default, 0.1 on hover
- **Icon Container**: 48px × 48px, rounded-xl (12px)
- **Icon Hover**: Background changes to `--primary`, text to white
- **Tag Border**: 1px solid `--slate-200` (light), `--slate-700` (dark)
- **Tag Padding**: 0.25rem 0.5rem
- **Tag Font**: 10px, bold, uppercase, tracking-wider

### Buttons

- **Primary**: Background `--slate-900` (light), white (dark)
- **Border Radius**: 9999px (fully rounded)
- **Padding**: 0.625rem 1.25rem (small), 1rem 2.5rem (large)
- **Font Weight**: 600 (semibold)
- **Hover**: `opacity: 0.9` with scale(1.05)
- **Transition**: all 300ms ease-out

### Stats Cards

- **Number Font Size**: 2.25rem (36px)
- **Number Font Weight**: 900 (black)
- **Number Color**: `--primary`
- **Label Font Size**: 0.75rem (12px)
- **Label Transform**: uppercase
- **Label Tracking**: 0.1em (widest)

### Section Spacing

- **Vertical Padding**: 6rem (96px) for major sections
- **Container Max Width**: 80rem (1280px)
- **Container Padding**: 1.5rem (24px) horizontal

## Responsive Breakpoints

```css
--breakpoint-sm: 640px; /* Small devices */
--breakpoint-md: 768px; /* Tablets */
--breakpoint-lg: 1024px; /* Laptops */
--breakpoint-xl: 1280px; /* Desktops */
```

## Dark Mode

Dark mode is toggled via a class on the `<html>` element:

- Add class `dark` to enable dark mode
- Remove class `dark` to enable light mode
- Persist preference in `localStorage`

## Material Icons

- **Family**: Material Icons Outlined / Material Symbols Outlined
- **Default Size**: 24px
- **Color**: Inherits from parent or uses `--primary` for accents
- **Variation Settings**: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`

## Accessibility

- **Focus Visible**: 2px solid `--primary` with 2px offset
- **Minimum Touch Target**: 44px × 44px
- **Color Contrast**: WCAG AA compliant (4.5:1 for normal text, 3:1 for large text)
- **Reduced Motion**: Respect `prefers-reduced-motion` media query
