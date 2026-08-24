# ScanMe ⚡ — Instant QR Code Generator

A sleek, privacy-focused, 100% client-side QR code generator built with vanilla HTML, CSS, and JavaScript. Generate high-resolution, customized QR codes in a blink without any data leaving your browser.

![ScanMe Banner](https://img.shields.io/badge/Privacy-100%25%20Client--Side-E8A33D?style=for-the-badge&logo=shield)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Vanilla-HTML5%20%7C%20CSS3%20%7C%20JS-black?style=for-the-badge)

---

## ✨ Features

- 🔒 **Zero Telemetry & 100% Client-Side**: Unlike other generator services that route links through tracking proxies or store query logs, ScanMe renders the entire matrix locally in your browser.
- 🌓 **Dark & Light Mode**: Seamless theme switching with smooth transitions, SVG icons, system color scheme detection, and `localStorage` persistence.
- 🎨 **Live Customization**:
  - **Error Correction Levels**: `L` (~7%), `M` (~15%), `Q` (~25%), and `H` (~30% recovery for high-reliability scanning).
  - **Color Customization**: Native hex color pickers for both module foreground and background.
  - **Size Slider**: Dynamic visual preview and configurable output resolution (160px – 440px).
- 📊 **Real-Time Technical Readout**: Live statistics tracking input length, active error correction percentage, output dimensions, and generator readiness.
- 📥 **Instant High-Res PNG Download**: One-click vector-accurate raster export for print and digital assets.
- 📱 **Mobile & Desktop Responsive**: Clean side-by-side viewfinder layout on larger screens and a fluid stacked layout on mobile devices.

---

## 🚀 Quick Start

### Option 1: Open Locally
Since ScanMe uses pure client-side web technologies with no build steps or bundlers required:
1. Clone this repository:
   ```bash
   git clone https://github.com/josephsojan/ScanMe.git
   ```
2. Open `index.html` directly in your favorite browser.

### Option 2: Run with a Local Server
```bash
# Using Python
python -m http.server 3000

# Using Node / npx
npx serve .
```
Then navigate to `http://localhost:3000`.

---

## 🛠️ Project Structure

```
ScanMe/
├── index.html       # Application markup, semantic structure, and reactive logic
├── style.css        # CSS design system (variables, themes, grid layout & animations)
├── LICENSE          # MIT License
└── README.md        # Documentation
```

---

## 🎯 Use Cases

| Category | Typical Applications |
| :--- | :--- |
| 🖥️ **Digital & Screens** | Slide decks, stream overlays, email signatures, Zoom virtual backgrounds, Linktree, and portfolios |
| 📦 **Print & Packaging** | Business cards, stickers, product boxes, flyers, brochures, and merchandise |
| 🍽️ **Hospitality & Retail** | Contactless dining menus, storefront hours, and instant Wi-Fi network credentials |
| 🎟️ **Events & Conferences** | Attendee badges, stage presentations, roll-up banners, and booth materials |

---

## 🛡️ Privacy Guarantee

ScanMe does **not** make external API calls for encoding or matrix generation. All QR matrices are computed entirely in browser memory using [`qrcodejs`](https://github.com/davidshimjs/qrcodejs).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
