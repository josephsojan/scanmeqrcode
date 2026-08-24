# ScanMe ⚡ — Instant QR Code Generator

A sleek, privacy-focused, 100% client-side QR code generator built with **React, Vite, and Lucide Icons**. Generate high-resolution, customized QR codes in a blink without any data leaving your browser.

![ScanMe Banner](https://img.shields.io/badge/Privacy-100%25%20Client--Side-E8A33D?style=for-the-badge&logo=shield)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/React%2018%20%7C%20Vite%205%20%7C%20CSS-black?style=for-the-badge)

---

## ✨ Features

- 🔒 **Zero Telemetry & 100% Client-Side**: Unlike other generator services that route links through tracking proxies or store query logs, ScanMe renders the entire matrix locally in your browser.
- 🌓 **Dark & Light Mode**: Seamless theme switching with smooth transitions, SVG icons, system color scheme detection, and `localStorage` persistence.
- 🎯 **Smart Presets**:
  - **URL / Link**: Websites, portfolios, social bios, and deep links.
  - **Wi-Fi**: Instant connection string for guest networks without manual password entry.
  - **Contact (vCard)**: Digital business card with full name, phone number, and email.
  - **Plain Text**: Notes, messages, addresses, and serialized data.
- 🎨 **Deep Customization**:
  - **Error Correction Levels**: `L` (~7%), `M` (~15%), `Q` (~25%), and `H` (~30% recovery for high-reliability scanning).
  - **Color Customization**: Native hex color pickers for both module foreground and background.
  - **Size Slider**: Dynamic visual preview and configurable output resolution (160px – 440px).
- 📥 **Multi-Format Export**:
  - **High-Res PNG**: Vector-accurate raster image.
  - **Lossless SVG**: Scalable vector format for graphic design and print media.
  - **One-Click Clipboard Copy**: Instantly copy the QR image to paste into documents or messages.
- 📊 **Real-Time Technical Readout**: Live statistics tracking input length, active error correction percentage, output dimensions, and generator readiness.
- 📱 **Mobile & Desktop Responsive**: Clean side-by-side viewfinder layout on larger screens and a fluid stacked layout on mobile devices.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)

### Installation & Run

1. Clone this repository:
   ```bash
   git clone https://github.com/josephsojan/ScanMe.git
   cd ScanMe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open **`http://localhost:3000`** in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🛠️ Project Structure

```
ScanMe/
├── index.html               # Vite HTML entry template
├── vite.config.js           # Vite build configuration
├── package.json             # Project dependencies & scripts
├── src/
│   ├── main.jsx             # React entry point
│   ├── App.jsx              # Main application root
│   ├── index.css            # CSS design system (tokens, themes & layout)
│   ├── hooks/
│   │   └── useTheme.js      # Theme state management & localStorage persistence
│   └── components/
│       ├── Navbar.jsx       # Header with branding & ThemeToggle
│       ├── ThemeToggle.jsx  # Interactive Sun/Moon theme switcher
│       ├── Hero.jsx         # Hero section
│       ├── QrGenerator.jsx  # Form inputs, preset tabs, colors & size slider
│       ├── QrPreview.jsx    # Live viewfinder, side-by-side readout & exports
│       ├── InfoSection.jsx  # 02 — Where to share & display grid
│       ├── AboutSection.jsx # 03 — About ScanMe with live metric counters
│       └── Footer.jsx       # Professional 2026 copyright footer
├── LICENSE                  # MIT License
└── README.md                # Documentation
```

---

## 🎯 Use Cases

| Category | Typical Applications |
| :--- | :--- |
| 🖥️ **Digital & Screens** | Slide decks, stream overlays, email signatures, Zoom virtual backgrounds, Linktree, and portfolios |
| 📦 **Print & Packaging** | Business cards, stickers, product packaging, flyers, brochures, and merchandise |
| 🍽️ **Hospitality & Retail** | Contactless dining menus, storefront hours, and instant Wi-Fi network credentials |
| 🎟️ **Events & Conferences** | Attendee badges, stage presentations, roll-up banners, and booth materials |

---

## 🛡️ Privacy Guarantee

ScanMe does **not** make external API calls for encoding or matrix generation. All QR matrices are computed entirely in browser memory.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
