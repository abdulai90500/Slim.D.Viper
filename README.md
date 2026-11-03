# SLIM D’VIPER – The Money Man | Official Artist Website

Official international music brand website for **SLIM D’VIPER (The Money Man)**, Sierra Leonean Afro-Hip-Hop artist and CEO of **Untouchable Empire**.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed in a **Classic Luxury meets Modern Afro-Hip-Hop** aesthetic: obsidian black backgrounds, antique gold accents, bold typography, cinematic photography, and music-inspired animations.

---

## 🌟 Key Highlights & Features

1. **Brand Identity & Real Photography**:
   - High-definition official photography of SLIM D'VIPER integrated in the Hero and Gallery.
   - Luxury gold typography with custom serif headings (*Cinzel*) and modern grotesque body (*Plus Jakarta Sans*).
   - "The Money Man" and "Untouchable Empire" branding throughout.

2. **Official Discography & Interactive Audio Player**:
   - Featured Spotlight for the breakout EP: *Rise of Fame* & smash single **"Bend Down Low"** (produced by Suh Clovis).
   - Interactive tracklist with category filtering: *Featured Anthems*, *Afro-Hip-Hop*, *Cultural Roots*.
   - **Persistent Global Audio Player Bar**: Floating bottom music player with real Web Audio synthesizer beats, interactive waveform/equalizer bars, scrubber, and volume controls.
   - Lyrics preview modal for fan favorites.

3. **Cinematic Music Videos**:
   - Showcase for official videos (*Bend Down Low*, *Wait 4 Dis ft. Young Kd*, *Money*, *D-Race*, *Done Deal Freestyle*).
   - Embedded interactive video preview modal and direct link to the verified YouTube channel: [`@slimdviper6752`](https://www.youtube.com/@slimdviper6752).

4. **The Transatlantic Journey Timeline**:
   - Visual milestone roadmap: **Koidu (Diamond Roots) 🇸🇱 → Kingtom (Freetown Cyphers) 🇸🇱 → Antwerp (European Base) 🇧🇪 → Global Stage 🌍**.

5. **Untouchable Empire Hub**:
   - Record label branding, philosophy, and four institutional pillars (*Music Production & A&R*, *Visual Art*, *Touring & Live Experience*, *Youth Empowerment*).

6. **Full-Screen Lightbox Gallery**:
   - High-definition portrait, live stage, and studio session photos with interactive category filters and zoom modal.

7. **Direct Booking & Contact Integrations**:
   - **Direct WhatsApp Chat**: Pulsating floating WhatsApp widget and instant chat button linked directly to `https://wa.me/32492327851`.
   - **Direct Phone Hotline**: `+32 492 32 78 51` (Antwerp, Belgium HQ).
   - **YouTube Channel**: Direct subscription link to [`https://www.youtube.com/@slimdviper6752`](https://www.youtube.com/@slimdviper6752).
   - **Booking Inquiry Form**: Interactive promoter request form with event type, date, location, and instant submission confirmation.

---

## 🚀 Running the Project

### Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

### Production Build & Serve
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
slimdviper/
├── public/
│   └── images/
│       └── slim-d-viper-hero.jpg   # Official artist portrait
├── src/
│   ├── app/
│   │   ├── globals.css             # Luxury gold gradients, equalizers & animations
│   │   ├── layout.tsx              # Google Fonts, SEO OpenGraph, JSON-LD schema
│   │   └── page.tsx                # Main single-page application orchestrator
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky header with WhatsApp & YouTube shortcuts
│   │   ├── Hero.tsx                # Cinematic artist hero banner with verified badge
│   │   ├── AboutSection.tsx        # Official artist biography & core pillars
│   │   ├── MusicSection.tsx        # Discography, EP spotlight & lyrics preview
│   │   ├── VideosSection.tsx       # Music video gallery & video modal
│   │   ├── JourneySection.tsx      # Koidu -> Kingtom -> Belgium -> Global timeline
│   │   ├── EmpireSection.tsx       # Untouchable Empire record label & mission
│   │   ├── GallerySection.tsx      # Lightbox photo gallery
│   │   ├── ContactSection.tsx      # Booking form, WhatsApp chat & phone
│   │   ├── GlobalAudioPlayer.tsx   # Persistent audio bar with Web Audio synth
│   │   ├── WhatsAppFloatingButton.tsx # Pulsing bottom-right WhatsApp quick-chat
│   │   └── Footer.tsx              # Luxury branding, social links & newsletter
│   └── data/
│       └── artist-data.ts          # Centralized verified artist content & releases
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

