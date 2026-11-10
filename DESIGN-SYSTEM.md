# ShrotiHost – Design System & Component Guidelines

**Version:** 1.0.0 (Production Release)  
**Engineering Stack:** Tailwind CSS v3 / Next.js / TypeScript / Lucide React  
**Brand Identity:** High-Performance Cloud Infrastructure & Precision Software Engineering  
**Tone & Feel:** Modern, Technical, Clean, Highly Trustworthy, Purposeful, Frictionless

---

## 1. Design Principles

1. **Clarity Over Decoration:** Every visual element must serve information delivery. Avoid gratuitous multi-color rainbow gradients, floating blurry orbs, or distracting non-functional animations.
2. **Speed as a Brand Value:** The UI must visually reflect the raw speed of LiteSpeed and NVMe storage—crisp borders, sharp typography, fast transitions (150ms–200ms ease), and zero layout shift.
3. **Engineering Rigor:** Present technical specifications (RAM, CPU cores, inode limits, DNS records) with high typographic fidelity, monospace labels where appropriate, and clear unit notations.
4. **Radical Transparency:** Prices, renewal terms, fair-use policies, and money-back conditions must be presented with unmistakable prominence and zero deceptive asterisks.

---

## 2. Color System & Design Tokens

The palette is engineered with a deep slate/neutral foundation paired with an authoritative royal indigo brand primary, an electric cyan accent for speed and network indicators, and semantic status colors. Both Dark and Light surfaces are specified.

### 2.1 Brand & Neutral Palettes

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ BRAND PRIMARY (Indigo / Cobalt)                                             │
│ #4F46E5 (Primary Brand) | #4338CA (Brand Hover) | #3730A3 (Brand Active)   │
│ #EEF2FF (Brand Subtle Tint) | #C7D2FE (Brand Border)                       │
├─────────────────────────────────────────────────────────────────────────────┤
│ BRAND ACCENT (Cyan / Electric Sky)                                          │
│ #06B6D4 (Accent Speed)  | #0891B2 (Accent Hover) | #ECFEFF (Accent Tint)    │
├─────────────────────────────────────────────────────────────────────────────┤
│ NEUTRALS & SURFACES (Dark Mode - Primary Experience)                        │
│ #0B0F19 (Background Base)     | #111827 (Surface Card / Panel)              │
│ #1E293B (Surface Elevated)     | #334155 (Subtle Borders / Dividers)        │
│ #64748B (Muted Text / Icons)   | #94A3B8 (Secondary Text)                   │
│ #E2E8F0 (High Contrast Text)   | #FFFFFF (Pure White Highlights)            │
├─────────────────────────────────────────────────────────────────────────────┤
│ NEUTRALS & SURFACES (Light Mode - High Legibility Alternative)              │
│ #FFFFFF (Surface Base)         | #F8FAFC (Surface Muted)                    │
│ #F1F5F9 (Surface Subdued)      | #E2E8F0 (Border Light)                     │
│ #64748B (Text Muted)           | #334155 (Text Secondary)                   │
│ #0F172A (Text Primary)         | #020617 (Heading Pure Contrast)            │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Semantic Status & Feedback Colors

| Token Name | Hex Code | Purpose & Application |
| :--- | :--- | :--- |
| `status-success` | `#10B981` | 99.9% Uptime guarantee, active service badges, plan feature checkmarks |
| `status-warning` | `#F59E0B` | Low-stock domain alerts, Fair-use threshold advisories |
| `status-danger` | `#EF4444` | Non-refundable exclusions, prohibited AUP items, payment errors |
| `status-info` | `#3B82F6` | Informational callouts, DNS explanation tips, migration guides |
| `badge-popular` | `#6366F1` | "Most Popular", "Best Value", "Redis Included" recommendation tags |

---

## 3. Typography & Hierarchy

The typography pairs a high-performance geometric sans-serif for UI and editorial copy with a precision monospace font for technical specifications, DNS syntax, and server metrics.

* **Primary Sans:** Inter / Plus Jakarta Sans (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
* **Technical Monospace:** JetBrains Mono / SF Mono (`'JetBrains Mono', 'Fira Code', 'Courier New', monospace`)

### 3.1 Type Scale & Hierarchy

| Level | Size (Desktop / Mobile) | Weight | Line Height | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 1** | `48px (3rem) / 36px (2.25rem)` | Bold (700) | `1.15` | `-0.025em` | Homepage hero headline |
| **Heading 1** | `36px (2.25rem) / 28px (1.75rem)` | Bold (700) | `1.2` | `-0.02em` | Product & Service page main titles |
| **Heading 2** | `28px (1.75rem) / 22px (1.375rem)` | SemiBold (600) | `1.25` | `-0.015em` | Section headers, major feature groupings |
| **Heading 3** | `22px (1.375rem) / 18px (1.125rem)` | SemiBold (600) | `1.3` | `-0.01em` | Plan card titles, service cards, FAQ questions |
| **Heading 4** | `18px (1.125rem) / 16px (1rem)` | Medium (500) | `1.35` | `0` | Subsection titles, table column headers |
| **Body Large** | `18px (1.125rem) / 16px (1rem)` | Regular (400) | `1.6` | `0` | Hero intro paragraphs, blog leads |
| **Body Base** | `15px (0.9375rem) / 14px (0.875rem)` | Regular (400) | `1.6` | `0` | Standard UI prose, policy text, plan features |
| **Body Small** | `13px (0.8125rem) / 12px (0.75rem)` | Regular (400) | `1.5` | `+0.01em` | Metadata, footnote disclosures, timestamp |
| **Mono Spec** | `13px (0.8125rem) / 12px (0.75rem)` | Medium (500) | `1.4` | `0` | Server specs (vCPU, RAM, Inodes, DNS records) |

---

## 4. Spacing Scale, Grid & Layout Breakpoints

### 4.1 Content Widths
* **Default Container:** `max-w-7xl` (`1280px`) with responsive padding: `px-4 sm:px-6 lg:px-8`
* **Text / Editorial Container:** `max-w-4xl` (`896px`) or `max-w-prose` (`65ch`–`75ch`) for maximum reading stamina on blog articles and legal policies.
* **Narrow Form Container:** `max-w-xl` (`576px`) for authentication, domain search ribbons, and contact submission boxes.

### 4.2 Responsive Breakpoints
* `sm`: `640px` (Large mobile phones, landscape)
* `md`: `768px` (Tablets portrait)
* `lg`: `1024px` (Tablets landscape, small laptops)
* `xl`: `1280px` (Standard desktop monitors)
* `2xl`: `1536px` (Wide monitors)

### 4.3 Spacing Rhythm
* **Section Padding (Y-axis):** `py-16 md:py-24` (Standard sections); `py-20 md:py-32` (Major hero landmarks).
* **Stack Spacing (Components):** `space-y-4` (Lists/features); `space-y-8` (Content blocks); `space-y-12` (Subsections).
* **Grid Gutters:** `gap-6 md:gap-8` for product card grids; `gap-4` for spec comparison tables.

---

## 5. UI Components & Pattern Specifications

### 5.1 Buttons & CTA Variants

```
[ Primary CTA Button ]
Base: inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150
Style: bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white shadow-sm hover:shadow-indigo-500/25
Sizes:
  - Small: px-3 py-1.5 text-xs (Table actions, filter pills)
  - Medium: px-4 py-2.5 text-sm (Standard buttons, navbar CTA)
  - Large: px-6 py-3.5 text-base (Hero CTAs, purchase triggers)

[ Secondary / Ghost Button ]
Style: bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 hover:border-slate-600

[ Tertiary / Outline Button ]
Style: bg-transparent hover:bg-indigo-500/10 text-indigo-400 hover:text-indigo-300 border border-indigo-500/30

[ WhatsApp Support Button ]
Style: bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium shadow-md shadow-emerald-900/20
```

### 5.2 Product & Pricing Cards
* **Standard Plan Card:** Border `border-slate-800`, background `bg-slate-900/60`, rounded `rounded-xl`, backdrop blur `backdrop-blur-sm`, padding `p-6 md:p-8`.
* **Featured / Popular Plan Card:** Highlighted with an active indigo border `border-indigo-500`, subtle top gradient border, and an absolute pill badge: `bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider`.
* **Price Presentation:** Currency symbol `₹` (sup-aligned), large bold numeral (e.g. `79`), period term `/month`, followed directly by the trust label: `✓ Same price on renewal`.

### 5.3 Domain Search Input Ribbon
* High-visibility search bar with leading search icon, auto-prefix stripping (handles `https://` or `www`), trailing select dropdown for popular TLDs (`.in`, `.com`, `.org`, `.co.in`, `.net`, `.xyz`), and a prominent "Search" action button.
* Directly below the input: a horizontal ribbon of popular extensions with real first-year and renewal pricing badges.

### 5.4 Comparison & Specification Tables
* **Desktop Matrix:** Clean table with alternating zebra striping or crisp row borders (`border-b border-slate-800/80`). Feature categories grouped with clear section headers.
* **Mobile Handling:** Sticky left column for feature labels, horizontally scrollable plan columns with snapping cards, ensuring users never lose context when comparing RAM or CPU cores.

### 5.5 Forms & Input Fields
* **Input Styling:** `bg-slate-900/90 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`.
* **Validation & Errors:** Dedicated error text with icon in `#EF4444`, accessible `aria-invalid` attributes.
* **Dropdown Selects:** Custom chevron indicator, keyboard navigable, matching surface palette.

### 5.6 Navigation & Dropdowns
* **Desktop Mega-Menu:** Glassmorphism overlay (`bg-slate-900/95 backdrop-blur-md border border-slate-800 shadow-2xl rounded-2xl p-4`). Each menu item features a dedicated Lucide icon in a tinted badge, a bold title, and a one-sentence descriptive subtitle.
* **Mobile Drawer:** Full-height slide-over drawer with smooth transition, accordion expandable sub-menus, quick WhatsApp support button, and currency selector.

### 5.7 Accordions (FAQs)
* Bordered individual card accordions or clean line-separated lists.
* Smooth height animation (`transition-all duration-200 ease-in-out`).
* Distinct expanded state with subtle background tint and 180-degree rotating chevron icon.

### 5.8 Badges & Status Indicators
* **Pill Badges:** `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`.
  * Success: `bg-emerald-500/10 text-emerald-400 border border-emerald-500/20`
  * Warning: `bg-amber-500/10 text-amber-400 border border-amber-500/20`
  * Info: `bg-blue-500/10 text-blue-400 border border-blue-500/20`
  * Accent / New: `bg-cyan-500/10 text-cyan-400 border border-cyan-500/20`

---

## 6. Micro-Interactions & State Definitions

* **Hover States:** Elements elevate subtly with border color transitions (`border-slate-700 -> border-indigo-500/50`) and soft ambient glow (`shadow-indigo-500/10`).
* **Active / Press States:** `scale-[0.98]` micro-scale on buttons to give tangible tactile feedback.
* **Focus States:** High-visibility outline `focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`.
* **Disabled States:** `opacity-50 cursor-not-allowed pointer-events-none`.
* **Motion Preferences:** All transitions wrapped with respect to `motion-reduce:transition-none motion-reduce:transform-none`.

