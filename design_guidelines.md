# StartupStack Design Guidelines

## Design Philosophy
**Quiet Luxury Aesthetic** — Linear, Stripe, Vercel, Notion-level polish. Zero visual noise, premium feel through restraint and precision. Every element earns its place.

## Color System

### Backgrounds
- Primary: `#FAFAF9` (main canvas)
- Secondary: `#F6F6F3` (alternating sections)
- Tertiary: `#F3F4F6` (subtle contrast)
- Cards: `#EDEDED` (elevated surfaces)

### Borders
- Light: `#E5E7EB` (subtle dividers)
- Default: `#D1D5DB` (standard borders)
- Strong: `#C7C9CC` (emphasized separation)

### Text Hierarchy
- Primary: `#374151` (body text)
- Secondary: `#4B5563` (supporting text)
- Tertiary: `#6B7280` (captions, metadata)
- Ink: `#111827` (headlines, emphasis)
- Graphite: `#1A1A1A` (deep contrast)
- Soft Black: `#0F0F0F` (maximum contrast)

### Accent & Semantic
- Single Accent: `#3A5FCD` (blue-grey, use sparingly)
- Success: `#059669` (high demand, positive states)
- Warning: `#D97706` (medium demand, cautions)
- Error: `#DC2626` (low demand, errors)

## Typography

**Display:** Instrument Serif for headlines, hero text, section titles
**Body:** Geist Sans for all UI text, descriptions, buttons
**Mono:** Geist Mono for tags, badges, metadata, code snippets

### Scale
- Hero: 48-64px (Instrument Serif, tight line-height)
- H1: 36-42px (Instrument Serif)
- H2: 28-32px (Instrument Serif)
- H3: 20-24px (Geist Sans Medium)
- Body Large: 18px (paragraphs, card descriptions)
- Body: 16px (standard UI text)
- Caption: 14px (metadata, supporting info)
- Small: 12px (Geist Mono for badges)

## Spacing & Layout

**8px Grid System** — All spacing in multiples of 8px
- Micro: 8px (tight grouping)
- Small: 16px (related elements)
- Medium: 24px (component padding)
- Large: 32px (section spacing)
- XL: 48px (major section breaks)
- XXL: 64px+ (hero, landing page sections)

**Generous Whitespace** — Let content breathe, never cramped

## Visual Elements

### Cards
- Background: White (`#FFFFFF`)
- Border: 1px solid `#E5E7EB`
- Border Radius: 6px
- Shadow: `0 1px 3px rgba(0,0,0,0.04)` (default)
- Hover Shadow: `0 4px 12px rgba(0,0,0,0.08)` (gentle elevation)
- Transition: 150ms ease

### Buttons
- Border Radius: 4px
- Padding: 12px 24px (medium), 8px 16px (small)
- Primary: Soft black background, white text
- Secondary: White background, 1px border, primary text
- Hover: Subtle darken (150ms transition)

### Modals
- Border Radius: 8px
- Backdrop: Blur effect with rgba overlay
- Shadow: `0 10px 40px rgba(0,0,0,0.12)`
- Max Width: 600px

### Badges & Tags
- Border Radius: 4px
- Padding: 4px 12px
- Font: Geist Mono, 12px
- Demand High: `#059669` dot + text
- Demand Medium: `#D97706` dot + text
- Demand Low: `#6B7280` dot + text

## Component Patterns

### IdeaCard Variants
**Full:** White card, all details visible, hover elevation
**Preview:** Title + one-liner + tags, truncated content
**Locked:** Blur effect on content, centered "Upgrade" overlay

### Filters
- Pill-style category buttons
- Active state: Accent color background
- Inactive: Transparent with border
- B2B/B2C toggle: Segmented control pattern

### PaywallModal
- Centered, backdrop blur
- Clear hierarchy: Reason (H2) → Benefit list → CTA button
- No close button for hard gates

### Execution Plan Layout
- Numbered sections (1-5)
- Each section: Title (H3) → Content card
- User stories: Numbered list, italic "As a..." format
- Checklist: Numbered steps with checkbox aesthetic
- "Copy All" button (top-right, secondary style)

## Micro-interactions

- **Transitions:** 150ms ease for all hovers/states
- **No Flashy Animations:** Subtle opacity/transform only
- **Loading States:** Skeleton screens matching card structure
- **Toast Notifications:** Bottom-right, slide-in, 4s auto-dismiss

## Landing Page Structure

**Hero:** Full viewport, Instrument Serif headline (56px+), one-line subheading, CTA button (no hero image - focus on typography)

**How It Works:** 3-column grid, icon + title + description per step

**Social Proof:** Centered testimonial or stat callout

**CTA Section:** Simple, centered, high-contrast

## Library Page (Public /ideas)

**Layout:** Grid (3 columns desktop, 2 tablet, 1 mobile)
**Filters:** Top row, sticky on scroll
**Cards:** Uniform height, hover elevation
**Pagination:** Bottom center, simple prev/next

## Dashboard Layout

**Sidebar:** Left, 240px fixed width, off-white background
**Main:** Right, max-width 1200px, centered
**Header:** User info + usage counters + settings link

## Accessibility & Polish

- Focus states: 2px accent color ring
- Keyboard navigation: Clear visual feedback
- Empty states: Centered icon + message + CTA
- Error states: Inline, red text, helpful message
- Loading: Skeleton cards, never blank screens

## Images

**No Hero Image** — Typography-driven hero section
**No Decorative Images** — Product screenshots or idea illustrations only if demonstrating specific features
**Icon Usage:** Heroicons via CDN for UI elements (filter icons, badges, etc.)