# 🚀 VEER TEJA ELECTRONIC & REPAIRING CENTER
## Ultra-Professional Full-Stack Website — Complete Claude Code Build Prompt
### Version 2.0 | Full Security | Backend + Frontend + DB + Admin Panel

---

> ⚠️ **CLAUDE CODE INSTRUCTIONS:** Read this ENTIRE file before writing a single line of code.
> Follow every section in order. Do NOT skip. Do NOT simplify. Build production-grade code only.

---

## 📊 PHASE 0: TOP ELECTRONICS SITE ANALYSIS (UI/UX Reference)

Claude Code must study and implement patterns from these top sites:

### 🔍 Analyzed Sites & Features to Copy:

| Site | Key UI Pattern to Copy |
|------|----------------------|
| **Croma.com** | Mega-menu navbar, category tiles, promo banner slider |
| **Vijay Sales** | Hero carousel with countdown timer, brand logos strip |
| **Reliance Digital** | Sticky header, search bar with autocomplete, floating cart |
| **Amazon Electronics** | Product card hover effects, star ratings, "Add to Cart" UX |
| **iFixit.com** | Repair service booking flow, step tracker |
| **Geek Squad** | Service booking cards, technician trust badges |

### 🎨 UI Patterns to Implement (Copied from Top Sites):

```
✅ Sticky navbar with transparent→solid scroll effect
✅ Full-width hero with auto-playing image carousel + text animation
✅ Horizontal scrolling category chips (mobile swipe)
✅ Product cards with: image zoom, quick-view, wishlist icon, rating stars
✅ Countdown timer on offers section
✅ "Trusted by X customers" animated counter
✅ Before/After repair showcase slider
✅ WhatsApp floating bubble with pulse animation
✅ Toast notifications for actions
✅ Skeleton loading placeholders
✅ Smooth scroll + parallax sections
✅ Dark mode toggle
✅ Breadcrumb navigation
✅ Mega dropdown menu
✅ Back-to-top button
```

---

## 🏪 BUSINESS INFORMATION

```yaml
Shop Name (Hindi):    वीर तेजा इलेक्ट्रॉनिक & रिपेयरिंग सेंटर
Shop Name (English):  Veer Teja Electronic & Repairing Center
Type:                 Electronics Sales (Wholesale + Retail) + Repair Center
Tagline:              "हर इलेक्ट्रॉनिक की मरम्मत, एक ही छत के नीचे"
Established:          2005 (assumed, update if different)
Region:               Rajasthan, India

Contacts:
  Person 1:
    Name:    मेश सारण (Mesh Saran)
    Role:    Electrician
    Area:    जयसंगसर वाले
    Phone1:  9928330252
    Phone2:  9929124331
    WA:      https://wa.me/919928330252

  Person 2:
    Name:    पप्पूराम सारण (Pappuram Saran)
    Area:    गोमटिया वाले
    Phone1:  6350211515
    Phone2:  8955293732
    WA:      https://wa.me/916350211515

Deity Badge:  ॥ श्री गणेशाय नमः ॥
```

---

## 🗂️ COMPLETE PROJECT STRUCTURE

```
veer-teja-electronics/
│
├── 📁 frontend/                    # Next.js 14 App Router
│   ├── app/
│   │   ├── (public)/               # Public routes group
│   │   │   ├── page.tsx            # Homepage
│   │   │   ├── products/
│   │   │   │   ├── page.tsx        # All products
│   │   │   │   └── [slug]/page.tsx # Product detail
│   │   │   ├── services/
│   │   │   │   ├── page.tsx        # All services
│   │   │   │   └── [slug]/page.tsx # Service detail
│   │   │   ├── booking/page.tsx    # Repair booking form
│   │   │   ├── contact/page.tsx    # Contact page
│   │   │   ├── about/page.tsx      # About page
│   │   │   └── gallery/page.tsx    # Photo gallery
│   │   ├── (admin)/                # Admin routes group (hidden)
│   │   │   ├── layout.tsx          # Admin layout with auth guard
│   │   │   └── dashboard/
│   │   │       ├── page.tsx        # Dashboard overview
│   │   │       ├── products/       # Product CRUD
│   │   │       ├── services/       # Service CRUD
│   │   │       ├── bookings/       # Booking management
│   │   │       ├── enquiries/      # Customer messages
│   │   │       ├── gallery/        # Image management
│   │   │       └── settings/       # Site settings
│   │   ├── api/                    # API Routes (Next.js)
│   │   │   ├── auth/[...nextauth]/ # NextAuth.js
│   │   │   ├── products/           # Products CRUD API
│   │   │   ├── services/           # Services CRUD API
│   │   │   ├── bookings/           # Booking API
│   │   │   ├── enquiries/          # Contact API
│   │   │   ├── upload/             # Image upload API
│   │   │   └── dashboard/          # Admin stats API
│   │   ├── layout.tsx              # Root layout
│   │   └── globals.css             # Global styles
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Mega menu navbar
│   │   │   ├── Footer.tsx          # Full footer
│   │   │   └── AdminSidebar.tsx    # Admin sidebar
│   │   ├── home/
│   │   │   ├── HeroCarousel.tsx    # Animated hero slider
│   │   │   ├── CategoryGrid.tsx    # Category tiles
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── StatsCounter.tsx    # Animated counters
│   │   │   ├── Testimonials.tsx    # Reviews carousel
│   │   │   ├── OffersSection.tsx   # Deals with timer
│   │   │   ├── BrandsStrip.tsx     # Brand logos
│   │   │   └── WhyChooseUs.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx     # Hover+zoom card
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductFilter.tsx   # Sidebar filters
│   │   │   └── QuickView.tsx       # Modal quick view
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx
│   │   │   └── BookingForm.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Countdown.tsx       # Timer widget
│   │   │   └── StarRating.tsx
│   │   └── shared/
│   │       ├── WhatsAppButton.tsx  # Floating pulse button
│   │       ├── BackToTop.tsx
│   │       ├── DarkModeToggle.tsx
│   │       └── LoadingSpinner.tsx
│   │
│   ├── lib/
│   │   ├── db.ts                   # Prisma client
│   │   ├── auth.ts                 # NextAuth config
│   │   ├── validations.ts          # Zod schemas
│   │   ├── utils.ts                # Helper functions
│   │   └── constants.ts            # App constants
│   │
│   ├── hooks/
│   │   ├── useCart.ts
│   │   ├── useWishlist.ts
│   │   └── useToast.ts
│   │
│   ├── store/
│   │   └── index.ts                # Zustand store
│   │
│   ├── types/
│   │   └── index.ts                # TypeScript types
│   │
│   ├── public/
│   │   ├── images/                 # Static images
│   │   ├── icons/                  # SVG icons
│   │   └── fonts/                  # Local fonts
│   │
│   ├── prisma/
│   │   ├── schema.prisma           # Database schema
│   │   └── seed.ts                 # Seed data
│   │
│   ├── middleware.ts               # Auth middleware
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── .env.example
│
├── 📁 uploads/                     # User uploaded images
├── 📄 docker-compose.yml           # PostgreSQL + Redis
├── 📄 .env.local                   # Environment variables
└── 📄 README.md
```

---

## 🗄️ DATABASE SCHEMA (Prisma + PostgreSQL)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============ ADMIN AUTH ============
model Admin {
  id           String    @id @default(cuid())
  email        String    @unique
  passwordHash String
  name         String
  role         AdminRole @default(EDITOR)
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
}

enum AdminRole {
  SUPER_ADMIN
  EDITOR
}

// ============ CATEGORIES ============
model Category {
  id          String    @id @default(cuid())
  name        String    // Hindi name
  nameEn      String    // English name
  slug        String    @unique
  icon        String    // emoji or icon name
  imageUrl    String?
  description String?
  sortOrder   Int       @default(0)
  isActive    Boolean   @default(true)
  products    Product[]
  services    Service[]
  createdAt   DateTime  @default(now())
}

// ============ PRODUCTS ============
model Product {
  id            String      @id @default(cuid())
  name          String
  nameHi        String      // Hindi name
  slug          String      @unique
  description   String?
  descriptionHi String?
  price         Float?
  mrp           Float?
  discount      Float?      // percentage
  images        String[]    // array of image URLs
  brand         String?
  model         String?
  inStock       Boolean     @default(true)
  isWholesale   Boolean     @default(false)
  isFeatured    Boolean     @default(false)
  isActive      Boolean     @default(true)
  rating        Float       @default(0)
  reviewCount   Int         @default(0)
  categoryId    String
  category      Category    @relation(fields: [categoryId], references: [id])
  tags          String[]
  specifications Json?      // key-value pairs
  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt
}

// ============ SERVICES (REPAIR) ============
model Service {
  id            String    @id @default(cuid())
  name          String
  nameHi        String
  slug          String    @unique
  description   String?
  descriptionHi String?
  price         Float?    // starting price
  duration      String?   // "Same Day", "1-2 Days"
  imageUrl      String?
  icon          String?   // emoji
  isActive      Boolean   @default(true)
  isFeatured    Boolean   @default(false)
  categoryId    String?
  category      Category? @relation(fields: [categoryId], references: [id])
  bookings      Booking[]
  createdAt     DateTime  @default(now())
}

// ============ REPAIR BOOKINGS ============
model Booking {
  id           String        @id @default(cuid())
  bookingNo    String        @unique @default(cuid()) // human-readable
  customerName String
  phone        String
  address      String?
  serviceId    String
  service      Service       @relation(fields: [serviceId], references: [id])
  deviceBrand  String?
  deviceModel  String?
  issueDesc    String
  preferredDate DateTime?
  status       BookingStatus @default(PENDING)
  adminNotes   String?
  estimatedCost Float?
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt
}

enum BookingStatus {
  PENDING
  CONFIRMED
  IN_PROGRESS
  COMPLETED
  CANCELLED
}

// ============ ENQUIRIES ============
model Enquiry {
  id        String        @id @default(cuid())
  name      String
  phone     String
  email     String?
  message   String
  source    String?       // which page
  isRead    Boolean       @default(false)
  createdAt DateTime      @default(now())
}

// ============ TESTIMONIALS ============
model Testimonial {
  id         String   @id @default(cuid())
  name       String
  location   String?
  review     String
  reviewHi   String?
  rating     Int      @default(5)
  imageUrl   String?
  isActive   Boolean  @default(true)
  isFeatured Boolean  @default(false)
  createdAt  DateTime @default(now())
}

// ============ OFFERS / BANNERS ============
model Banner {
  id          String   @id @default(cuid())
  title       String
  titleHi     String?
  subtitle    String?
  imageUrl    String
  link        String?
  isActive    Boolean  @default(true)
  sortOrder   Int      @default(0)
  expiresAt   DateTime?
  createdAt   DateTime @default(now())
}

// ============ GALLERY ============
model GalleryImage {
  id          String   @id @default(cuid())
  imageUrl    String
  caption     String?
  captionHi   String?
  category    String?  // "shop", "repair", "products"
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
}

// ============ SITE SETTINGS ============
model SiteSetting {
  id        String   @id @default(cuid())
  key       String   @unique
  value     String
  updatedAt DateTime @updatedAt
}
```

---

## 🌐 FRONTEND — COMPLETE UI SPECIFICATIONS

### 1️⃣ NAVBAR (Sticky + Mega Menu)

```
Layout:
  [Logo + Shop Name (Hindi+English)] ---- [Search Bar] ---- [☎ Call] [💬 WA] [🌙 Dark]

Mobile:
  [☰ Hamburger] [Logo] [Search Icon] [📞]

Mega Menu Items:
  - होम (Home)
  - उत्पाद (Products) → Dropdown: All Categories grid
  - मरम्मत सेवा (Repair Services) → Dropdown: All services
  - ऑफर (Offers) 🔥
  - गैलरी (Gallery)
  - हमारे बारे में (About)
  - संपर्क (Contact)

Behavior:
  - Transparent on hero, solid white/dark on scroll
  - Active link underline animation
  - Search: full overlay with autocomplete suggestions
  - Mobile: slide-in drawer from left
```

### 2️⃣ HERO SECTION (Auto-Playing Carousel)

```
Slides (fetch from DB banners table, fallback to static):

  Slide 1 — Repair Service:
    Headline: "घर बैठे बुक करें मरम्मत सेवा"
    Subtext:  "कूलर • पंखा • फ्रिज • वाशिंग मशीन"
    CTA1: "अभी बुक करें →"   CTA2: "📞 Call Now"
    BG: Deep blue gradient + animated circuit pattern
    Image: Fetch from Unsplash API → query: "electronics repair technician"

  Slide 2 — Products Sale:
    Headline: "थोक और खुदरा दोनों में उपलब्ध"
    Subtext:  "इन्वेर्टर • बैटरी • लाइट फिटिंग • पानी फिटिंग"
    CTA: "उत्पाद देखें →"
    BG: Orange gradient + electric sparks animation
    Image: Unsplash → "electronics store products"

  Slide 3 — Trust/About:
    Headline: "20+ साल का भरोसा"
    Subtext:  "हजारों संतुष्ट ग्राहक | जयसंगसर & गोमटिया"
    CTA: "हमारे बारे में →"
    BG: Saffron gradient + Rajasthan silhouette
    Image: Unsplash → "happy customer repair shop"

Animations:
  - Text: fade-up with stagger (Framer Motion)
  - Slide: crossfade transition (5s auto)
  - Dots + arrow navigation
  - Progress bar under navbar during auto-play
```

### 3️⃣ MARQUEE / TICKER BAR (Below Hero)

```
"🔥 ग्रीष्मकालीन ऑफर — कूलर सर्विस में 20% छूट  |  
📦 थोक में खरीदें, ज्यादा बचाएं  |  
⚡ इन्वेर्टर-बैटरी पर स्पेशल डील  |  
🛠️ घर पर आकर मरम्मत — Call 9928330252"

Style: Orange background, white text, infinite scroll animation
```

### 4️⃣ CATEGORY GRID

```
Layout: 2x4 grid (desktop) → horizontal scroll (mobile)

Categories with icons and images from Unsplash:

  🌀 कूलर & AC          → query: "air cooler appliance"
  💨 पंखा (Fan)          → query: "ceiling fan"
  🧊 फ्रिज              → query: "refrigerator"
  🫧 वाशिंग मशीन        → query: "washing machine"
  ⚡ इन्वेर्टर & बैटरी  → query: "inverter battery"
  💡 लाइट फिटिंग        → query: "LED light bulb"
  🚰 पानी फिटिंग        → query: "water pipe fitting"
  🔧 अन्य उपकरण        → query: "electronic tools"

Card Design (inspired by Croma):
  - Rounded card with image top half
  - Gradient overlay on hover
  - Category name + "देखें →" CTA
  - Hover: scale(1.05) + box-shadow glow
  - Click → navigate to /products?category=[slug]
```

### 5️⃣ FEATURED PRODUCTS SECTION

```
Section Title: "🌟 विशेष उत्पाद" / "Featured Products"
Layout: Horizontal scroll carousel (desktop: 4 cards, mobile: 1.5 cards visible)

Product Card Design (Amazon/Croma inspired):
  ┌─────────────────────┐
  │  [Unsplash Image]   │  ← zoom on hover
  │  [Badge: "SALE"]    │  ← top-left overlay
  │  [❤️ Wishlist]      │  ← top-right icon
  ├─────────────────────┤
  │ Product Name (Hindi)│
  │ Product Name (Eng)  │
  │ ⭐⭐⭐⭐⭐ (4.5)    │
  │ Brand: [name]       │
  │ ~~₹2,500~~ ₹1,999  │  ← strikethrough MRP
  │ [🛒 Enquire Now]   │
  └─────────────────────┘

Hover Effect:
  - Image zoom (transform: scale 1.1)
  - Quick view overlay appears
  - Shadow deepens
  - Button slides up from bottom
```

### 6️⃣ REPAIR SERVICES SECTION

```
Title: "🔧 मरम्मत सेवाएं" / "Repair Services"
Layout: 3-column grid (desktop), 2-col (tablet), 1-col (mobile)

Services List (all from DB, seeded):
  1.  कूलर मरम्मत       (Cooler Repair)
  2.  पंखा मरम्मत       (Fan Repair — Ceiling/Table/Exhaust)
  3.  फ्रिज मरम्मत      (Refrigerator Repair)
  4.  वाशिंग मशीन       (Washing Machine Repair)
  5.  चक्की मरम्मत      (Flour Mill / Grinder Repair)
  6.  मधानी मरम्मत      (Churner / Mixer Repair)
  7.  प्रेस मरम्मत      (Iron / Steam Press Repair)
  8.  गैस चुल्हा        (Gas Stove Repair)
  9.  इन्वेर्टर सर्विस  (Inverter Service & Repair)
  10. बैटरी रिप्लेसमेंट  (Battery Replacement)
  11. पानी पम्प मरम्मत  (Water Pump Repair)
  12. मोटर वाइंडिंग     (Motor Winding)

Service Card Design (iFixit/Geek Squad inspired):
  ┌────────────────────────┐
  │  [Emoji Icon: 🌀]      │
  │  [Unsplash bg image]   │
  │  कूलर मरम्मत          │
  │  Cooler Repair         │
  │  ₹299 से शुरू         │
  │  ⏱ Same Day Service   │
  │  [📅 बुक करें]        │
  └────────────────────────┘

"बुक करें" → scrolls to booking form / opens modal
```

### 7️⃣ STATS COUNTER SECTION

```
Animated counters (trigger when scrolled into view):
  ✅ 5000+   संतुष्ट ग्राहक (Happy Customers)
  ✅ 20+     साल का अनुभव (Years Experience)
  ✅ 12+     सेवाएं उपलब्ध (Services Available)
  ✅ 100+    ब्रांड (Brands Available)

Design: Dark bg, orange numbers, counter counts up animation (react-countup)
```

### 8️⃣ REPAIR BOOKING FORM SECTION

```
Title: "📅 मरम्मत बुक करें" / "Book a Repair"

Form Fields:
  - नाम (Customer Name)*
  - मोबाइल नंबर (Phone)*
  - पता (Address)
  - सेवा चुनें (Select Service)* → dropdown populated from DB
  - उपकरण का ब्रांड (Device Brand)
  - समस्या बताएं (Describe Issue)* → textarea
  - पसंदीदा तारीख (Preferred Date) → date picker
  - [📅 बुकिंग कराएं] Submit Button

On Submit:
  - POST /api/bookings
  - Save to DB with status PENDING
  - WhatsApp message sent to shop: wa.me with pre-filled booking details
  - Show success toast + booking reference number
  - Admin sees it in dashboard immediately

Validation: Zod schema, all error messages in Hindi
```

### 9️⃣ TESTIMONIALS / REVIEWS CAROUSEL

```
Design (inspired by Google Reviews widget):
  - 3 cards visible (desktop), 1 (mobile)
  - Auto-slide every 4s
  - Card: photo avatar, name, location, stars, review text
  - Review in Hindi with English option

Seed data (5 realistic reviews):
  1. रामचंद्र जी, जयसंगसर — "बहुत अच्छा काम करते हैं, कूलर एक दिन में ठीक हो गया ⭐⭐⭐⭐⭐"
  2. सुनीता देवी, गोमटिया — "सस्ते में अच्छा काम, पंखा बिल्कुल नया जैसा हो गया ⭐⭐⭐⭐⭐"
  3. मोहन लाल, सरदारशहर — "इन्वेर्टर की बैटरी बदलवाई, बढ़िया काम है भाई ⭐⭐⭐⭐"
  4. पूजा शर्मा — "वाशिंग मशीन रिपेयर, same day में हो गई ⭐⭐⭐⭐⭐"
  5. राजेश कुमार — "थोक में लाइट फिटिंग का सामान लिया, सस्ता मिला ⭐⭐⭐⭐⭐"
```

### 🔟 BRANDS STRIP

```
Auto-scrolling brand logos (Marquee):
Samsung | LG | Whirlpool | Havells | Bajaj | Crompton | Syska | Luminous | 
Exide | Amaron | V-Guard | Orient | Usha | Anchor | Panasonic | Voltas

Fetch logos: Use brand name + "logo transparent" Unsplash/Wikipedia
```

### 1️⃣1️⃣ CONTACT SECTION

```
Layout: Split 2-column (form left, info right)

Left — Contact Form:
  Name, Phone, Message, Submit
  POST → /api/enquiries

Right — Shop Info Cards:
  Card 1: मेश सारण (Electrician)
    📞 9928330252 (clickable tel:)
    📞 9929124331 (clickable tel:)
    📍 जयसंगसर वाले
    💬 WhatsApp Button

  Card 2: पप्पूराम सारण
    📞 6350211515 (clickable tel:)
    📞 8955293732 (clickable tel:)
    📍 गोमटिया वाले
    💬 WhatsApp Button

  ⏰ Working Hours:
    सोमवार - शनिवार: 9:00 AM - 8:00 PM
    रविवार: 10:00 AM - 5:00 PM

Below: Google Maps iframe placeholder (area map)
```

### 1️⃣2️⃣ FOOTER (Full — 4 columns)

```
Col 1 — Logo + About:
  ॥ श्री गणेशाय नमः ॥
  Shop name (Hindi + English)
  Tagline
  Social icons: Facebook | WhatsApp | Instagram

Col 2 — Quick Links:
  होम | उत्पाद | सेवाएं | ऑफर | गैलरी | संपर्क

Col 3 — Our Services:
  कूलर मरम्मत | पंखा मरम्मत | फ्रिज मरम्मत
  वाशिंग मशीन | इन्वेर्टर | लाइट फिटिंग ...

Col 4 — Contact:
  📞 9928330252 | 9929124331
  📞 6350211515 | 8955293732
  📍 जयसंगसर / गोमटिया, Rajasthan

Bottom Bar:
  © 2025 वीर तेजा इलेक्ट्रॉनिक सेंटर | Made with ❤️ in Rajasthan
  [Privacy Policy] [Terms]
```

---

## 🔐 ADMIN PANEL (HIDDEN — Route: /vt-admin)

> ⚠️ Admin URL must NOT appear anywhere on the public website.
> Access: `/vt-admin/login` only — not linked from any page

### Admin Login Page:
```
- Email + Password form
- Bcrypt password hashing
- JWT token stored in httpOnly cookie
- 5 failed attempts → 15 min lockout (rate limiting)
- CSRF protection
- Middleware protects ALL /vt-admin/* routes
```

### Admin Dashboard Pages:

#### 📊 Dashboard Overview
```
Stats Cards:
  - Total Bookings today
  - Pending Bookings
  - Total Enquiries (unread badge)
  - Total Products
  - Total Services

Charts (Recharts):
  - Bookings per day (last 30 days) — Line chart
  - Service type distribution — Pie chart

Recent Bookings Table (last 5)
Recent Enquiries List (last 5)
```

#### 📦 Products Management
```
Table: Name | Category | Price | Stock | Featured | Active | Actions
Actions: Edit | Delete | Toggle Active | Toggle Featured
Add/Edit Form: All fields from schema
Image Upload: drag-drop + preview (saves to /uploads/)
Fetch demo images: Unsplash API (https://source.unsplash.com/400x300/?{query})
Bulk actions: Delete selected, Export CSV
```

#### 🔧 Services Management
```
Same as products but for services
Extra fields: duration, starting price
Toggle: isFeatured, isActive
```

#### 📅 Bookings Management
```
Table: Booking# | Customer | Phone | Service | Date | Status | Actions

Status Kanban view (optional):
  PENDING → CONFIRMED → IN_PROGRESS → COMPLETED

Actions:
  - Change status
  - Add admin notes
  - Add estimated cost
  - Send WhatsApp update to customer

Filter by: Status, Date range, Service type
Export: CSV download
```

#### 💬 Enquiries
```
List of contact form submissions
Mark as read/unread
Reply via WhatsApp (opens wa.me link)
Delete
```

#### 🖼️ Gallery Management
```
Upload multiple images at once
Categorize: shop | repair | products | team
Caption (Hindi + English)
Drag to reorder
Delete
```

#### 🎨 Banners/Offers Management
```
Add hero carousel slides:
  - Upload image OR use Unsplash URL
  - Title (Hindi + English)
  - CTA link
  - Expiry date
  - Sort order (drag)
  - Active toggle
```

#### ⭐ Testimonials
```
Add/edit/delete customer reviews
Toggle featured/active
Star rating selector
```

#### ⚙️ Settings
```
Shop info: name, tagline, address, hours
Contact numbers (editable)
WhatsApp numbers
Social media links
SEO: meta title, description, keywords
Footer text
```

---

## 🔒 SECURITY IMPLEMENTATION (Full)

```typescript
// MUST implement ALL of these:

1. Authentication:
   - NextAuth.js with credentials provider
   - Bcrypt (cost factor 12) for password hashing
   - JWT in httpOnly, Secure, SameSite=Strict cookie
   - Session expiry: 24 hours
   - Refresh token rotation

2. Authorization:
   - Middleware: check JWT on every /vt-admin/* route
   - API routes: verify session before any DB operation
   - Role check: SUPER_ADMIN can delete, EDITOR cannot

3. Input Validation:
   - ALL inputs validated with Zod schemas
   - SQL injection: Prisma ORM (parameterized queries)
   - XSS: sanitize all user inputs (DOMPurify on client)

4. Rate Limiting:
   - Login: max 5 attempts per IP per 15 min
   - Contact form: max 3 per IP per hour
   - Booking form: max 5 per IP per hour
   - Use: upstash/ratelimit or simple in-memory

5. CSRF Protection:
   - Next.js built-in + double-submit cookie pattern

6. File Upload Security:
   - Check MIME type (not just extension)
   - Max file size: 5MB
   - Only allow: image/jpeg, image/png, image/webp
   - Rename with UUID (no original filename)
   - Store outside public root (serve via API)

7. Security Headers (next.config.js):
   Content-Security-Policy
   X-Frame-Options: DENY
   X-Content-Type-Options: nosniff
   Referrer-Policy: strict-origin-when-cross-origin
   Permissions-Policy: camera=(), microphone=()

8. Environment Variables:
   - NEVER hardcode secrets
   - DATABASE_URL, NEXTAUTH_SECRET, etc. in .env.local

9. Error Handling:
   - Never expose stack traces to client
   - Generic error messages for auth failures
   - Server-side logging only

10. Admin URL Security:
    - /vt-admin is NOT linked anywhere on public site
    - robots.txt: Disallow /vt-admin
    - No "Admin Login" link visible to users
```

---

## 🎨 DESIGN SYSTEM (Exact Specifications)

### Color Tokens:
```css
:root {
  --primary:        #E65100;  /* Deep Saffron Orange */
  --primary-light:  #FF8F00;  /* Amber */
  --primary-dark:   #BF360C;  /* Dark Saffron */
  --secondary:      #1A237E;  /* Deep Indigo (electric) */
  --accent:         #FFD600;  /* Pure Yellow */
  --danger:         #8B0000;  /* Maroon (Rajasthani) */
  --success:        #2E7D32;
  --bg-light:       #FFF8F0;  /* Warm Cream */
  --bg-dark:        #0D0D0D;  /* Near black */
  --card-light:     #FFFFFF;
  --card-dark:      #1A1A2E;
  --text-primary:   #1A1A1A;
  --text-secondary: #5C5C5C;
  --border:         #E0D8CC;
}
```

### Typography:
```css
/* Google Fonts to import */
@import url('https://fonts.googleapis.com/css2?
  family=Noto+Sans+Devanagari:wght@400;600;700;900&
  family=Poppins:wght@300;400;500;600;700;800&
  display=swap');

/* Usage */
.hindi-text { font-family: 'Noto Sans Devanagari', sans-serif; }
.english-text { font-family: 'Poppins', sans-serif; }
```

### Animations (Framer Motion):
```typescript
// Page entrance
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// Stagger children
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

// Card hover
const cardHover = {
  scale: 1.05,
  boxShadow: "0 20px 40px rgba(230, 81, 0, 0.3)",
  transition: { duration: 0.3 }
}
```

### Breakpoints:
```
Mobile:  375px
Tablet:  768px
Desktop: 1024px
Large:   1440px
```

---

## 🖼️ DEMO IMAGES — HOW TO FETCH (Unsplash)

```typescript
// In seed.ts and components, use Unsplash Source API:
// FREE, no API key needed, returns actual images

const getUnsplashImage = (query: string, w = 800, h = 600) =>
  `https://source.unsplash.com/${w}x${h}/?${encodeURIComponent(query)}`;

// Hero images:
const heroImages = [
  getUnsplashImage("electronics repair technician workshop", 1920, 600),
  getUnsplashImage("electronics store products LED lights", 1920, 600),
  getUnsplashImage("happy customer appliance repair india", 1920, 600),
];

// Category images:
const categoryImages = {
  cooler:    getUnsplashImage("air cooler appliance", 400, 300),
  fan:       getUnsplashImage("ceiling fan white", 400, 300),
  fridge:    getUnsplashImage("refrigerator modern", 400, 300),
  washing:   getUnsplashImage("washing machine front load", 400, 300),
  inverter:  getUnsplashImage("inverter battery home", 400, 300),
  light:     getUnsplashImage("LED light bulb bright", 400, 300),
  plumbing:  getUnsplashImage("water pipe fitting tools", 400, 300),
  tools:     getUnsplashImage("electronic repair tools screwdriver", 400, 300),
};

// Service images:
const serviceImages = {
  coolerRepair:   getUnsplashImage("technician repairing air cooler", 400, 300),
  fanRepair:      getUnsplashImage("electrician ceiling fan repair", 400, 300),
  fridgeRepair:   getUnsplashImage("refrigerator repair technician", 400, 300),
  washingRepair:  getUnsplashImage("washing machine repair service", 400, 300),
  grinder:        getUnsplashImage("grinder flour mill motor repair", 400, 300),
  iron:           getUnsplashImage("electric iron repair", 400, 300),
  gasStove:       getUnsplashImage("gas stove repair burner", 400, 300),
  inverterRepair: getUnsplashImage("inverter repair service technician", 400, 300),
};
```

---

## 📦 SEED DATA (prisma/seed.ts)

Claude Code must create COMPLETE seed data including:

```typescript
// All 8 categories with Hindi+English names
// 12 repair services with pricing
// 20 products (5 per major category)
// 5 testimonials
// 3 hero banners
// 1 Admin account:
//   email: admin@veerteja.com
//   password: VeerTeja@2025  (bcrypt hashed)
//   role: SUPER_ADMIN
// 10 gallery images
// Site settings (all keys)
```

---

## ⚙️ ENVIRONMENT VARIABLES (.env.example)

```env
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/veerteja_db"

# Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-min-32-chars"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_SHOP_PHONE1="9928330252"
NEXT_PUBLIC_SHOP_PHONE2="6350211515"
NEXT_PUBLIC_WA_NUMBER="919928330252"

# Upload
UPLOAD_DIR="./uploads"
MAX_FILE_SIZE="5242880"

# Rate Limiting (optional: Upstash Redis)
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

---

## 🚀 INSTALLATION COMMANDS

```bash
# Claude Code: Run these in order

# 1. Create project
npx create-next-app@latest veer-teja-electronics \
  --typescript --tailwind --app --src-dir=false \
  --import-alias "@/*"

cd veer-teja-electronics

# 2. Install dependencies
npm install \
  prisma @prisma/client \
  next-auth bcryptjs \
  zod \
  framer-motion \
  zustand \
  react-hot-toast \
  swiper \
  react-countup \
  react-intersection-observer \
  react-datepicker \
  react-dropzone \
  @tanstack/react-table \
  recharts \
  sharp \
  uuid \
  multer \
  @types/bcryptjs @types/uuid

# 3. Initialize Prisma
npx prisma init

# 4. Generate Prisma client
npx prisma generate

# 5. Run migrations
npx prisma migrate dev --name init

# 6. Seed database
npx prisma db seed

# 7. Start dev server
npm run dev
```

---

## 📋 BUILD ORDER — STEP BY STEP

Claude Code MUST follow this exact order:

```
STEP 1:  Set up Next.js project + install all packages
STEP 2:  Create prisma/schema.prisma (full schema above)
STEP 3:  Create .env.local with all variables
STEP 4:  Run prisma migrate + generate
STEP 5:  Create prisma/seed.ts with all data
STEP 6:  Create lib/db.ts, lib/auth.ts, lib/utils.ts
STEP 7:  Create middleware.ts (auth protection)
STEP 8:  Create types/index.ts
STEP 9:  Build UI components (Button, Badge, Toast, Modal, Skeleton)
STEP 10: Build Layout (Navbar + Footer)
STEP 11: Build Homepage sections (Hero → Footer)
STEP 12: Build Products page + detail page
STEP 13: Build Services page + detail page
STEP 14: Build Booking page
STEP 15: Build Contact + About + Gallery pages
STEP 16: Build API routes (all CRUD)
STEP 17: Build Admin Login page + auth flow
STEP 18: Build Admin Dashboard
STEP 19: Build Admin Products/Services CRUD
STEP 20: Build Admin Bookings/Enquiries management
STEP 21: Build Admin Settings
STEP 22: Implement all security features
STEP 23: Dark mode implementation
STEP 24: SEO meta tags + sitemap + robots.txt
STEP 25: Mobile responsiveness check (375px)
STEP 26: Performance optimization (lazy loading, next/image)
STEP 27: Run prisma db seed
STEP 28: Final testing checklist
```

---

## ✅ FINAL CHECKLIST (Claude Code Must Verify All)

### Frontend:
- [ ] Navbar: sticky, mega menu, mobile drawer, dark mode
- [ ] Hero: 3-slide carousel with animations, Unsplash images
- [ ] Marquee ticker bar
- [ ] 8 category cards with hover effects
- [ ] Featured products carousel (4 cards)
- [ ] 12 service cards with "Book" CTA
- [ ] Animated stats counters
- [ ] Repair booking form (all fields, validation, submit to API)
- [ ] Testimonials carousel (seeded data)
- [ ] Brand logos scrolling strip
- [ ] Contact section (form + shop info + map)
- [ ] Full footer (4 columns)
- [ ] WhatsApp floating button (pulse animation, bottom-right)
- [ ] Back to top button
- [ ] Dark mode toggle (persistent in localStorage)
- [ ] Hindi fonts loaded (Noto Sans Devanagari)
- [ ] All phone numbers as clickable tel: links
- [ ] Mobile responsive: 375px, 768px, 1024px tested
- [ ] Skeleton loading on data fetch
- [ ] Toast notifications for all actions
- [ ] SEO meta tags on all pages
- [ ] robots.txt: Disallow /vt-admin

### Backend API Routes:
- [ ] GET/POST /api/products
- [ ] GET/PUT/DELETE /api/products/[id]
- [ ] GET/POST /api/services
- [ ] GET/PUT/DELETE /api/services/[id]
- [ ] GET/POST /api/bookings
- [ ] PUT /api/bookings/[id] (status update)
- [ ] GET/POST /api/enquiries
- [ ] PUT /api/enquiries/[id] (mark read)
- [ ] POST /api/upload (image upload)
- [ ] GET /api/dashboard (stats)
- [ ] All routes: Zod validation, auth check, error handling

### Admin Panel:
- [ ] Login page at /vt-admin/login
- [ ] Auth: JWT httpOnly cookie, bcrypt, rate limit
- [ ] Dashboard with stats + charts
- [ ] Products CRUD with image upload
- [ ] Services CRUD
- [ ] Bookings management with status kanban
- [ ] Enquiries list with read/unread
- [ ] Gallery management
- [ ] Banners management
- [ ] Testimonials management
- [ ] Settings page

### Database:
- [ ] All tables created (migrate)
- [ ] Seed data loaded
- [ ] Admin account created
- [ ] All relations working

### Security:
- [ ] Passwords bcrypt hashed (factor 12)
- [ ] JWT httpOnly cookies
- [ ] Rate limiting on auth + forms
- [ ] Zod validation everywhere
- [ ] Security headers in next.config.js
- [ ] File upload validation
- [ ] Admin URL not linked anywhere public
- [ ] robots.txt blocks admin
- [ ] Error messages generic (no stack traces)

---

## 📱 WHATSAPP INTEGRATION

```typescript
// Booking confirmation WhatsApp message:
const sendBookingWhatsApp = (booking: Booking) => {
  const msg = encodeURIComponent(
    `🔔 *नई बुकिंग आई है!*\n\n` +
    `📋 Booking #: ${booking.bookingNo}\n` +
    `👤 नाम: ${booking.customerName}\n` +
    `📞 फोन: ${booking.phone}\n` +
    `🔧 सेवा: ${booking.service.nameHi}\n` +
    `📝 समस्या: ${booking.issueDesc}\n` +
    `📅 तारीख: ${booking.preferredDate}\n\n` +
    `कृपया जल्दी संपर्क करें!`
  );
  return `https://wa.me/919928330252?text=${msg}`;
};

// Contact enquiry WhatsApp:
const sendEnquiryWhatsApp = (enquiry: Enquiry) => {
  const msg = encodeURIComponent(
    `📨 *नई पूछताछ*\n\n` +
    `👤 ${enquiry.name}\n` +
    `📞 ${enquiry.phone}\n` +
    `💬 ${enquiry.message}`
  );
  return `https://wa.me/919928330252?text=${msg}`;
};
```

---

## 🔍 SEO CONFIGURATION

```typescript
// app/layout.tsx metadata:
export const metadata: Metadata = {
  title: {
    default: "वीर तेजा इलेक्ट्रॉनिक & रिपेयरिंग सेंटर | Cooler Fan Fridge Repair Rajasthan",
    template: "%s | वीर तेजा इलेक्ट्रॉनिक"
  },
  description: "वीर तेजा इलेक्ट्रॉनिक सेंटर में कूलर, पंखा, फ्रिज, वाशिंग मशीन, इन्वेर्टर की मरम्मत और बिक्री। Cooler Fan Fridge Washing Machine Inverter Repair in Rajasthan. थोक और खुदरा सामान उपलब्ध।",
  keywords: ["cooler repair rajasthan", "पंखा मरम्मत", "fridge repair", "inverter battery", "electronics shop rajasthan", "वीर तेजा", "washing machine repair"],
  openGraph: {
    title: "वीर तेजा इलेक्ट्रॉनिक & रिपेयरिंग सेंटर",
    description: "कूलर, पंखा, फ्रिज, वाशिंग मशीन मरम्मत | थोक व खुदरा इलेक्ट्रॉनिक सामान",
    type: "website",
    locale: "hi_IN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
}
```

---

## 🐛 KNOWN ISSUES TO AVOID

```
❌ DO NOT use localStorage for any sensitive data
❌ DO NOT expose admin credentials in code
❌ DO NOT link /vt-admin from any public page
❌ DO NOT skip Zod validation on any API route
❌ DO NOT use img tag (use next/image for optimization)
❌ DO NOT hardcode phone numbers (use constants.ts)
❌ DO NOT skip loading/error states in components
❌ DO NOT forget Hindi font on ALL text elements
❌ DO NOT make non-mobile-responsive components
❌ DO NOT skip the robots.txt admin disallow
```

---

## 📌 CONTINUATION INSTRUCTIONS

> If previous AI work exists, paste it here and Claude Code will:
> 1. Analyze what's already built
> 2. Identify gaps vs this specification
> 3. Continue from exactly where left off
> 4. Not duplicate any completed work
> 5. Ensure consistency with existing code

**Command to start:**
```
"Read the full VEER_TEJA_FULLSTACK_PROMPT.md file, 
then build the complete full-stack website following 
every specification exactly, step by step."
```

---

*📄 Prompt Version: 2.0 ULTRA PRO*
*🏪 Client: वीर तेजा इलेक्ट्रॉनिक & रिपेयरिंग सेंटर*
*🔍 Based on: Analysis of Croma, Vijay Sales, iFixit, Geek Squad, Amazon Electronics UI/UX*
*🔒 Security: Production-grade | ⚡ Stack: Next.js 14 + Prisma + PostgreSQL + Tailwind + Framer Motion*
