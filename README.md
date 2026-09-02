# ScanMe

**A fast, privacy-focused QR code generator built for the web.**

ScanMe is a client-side QR code generator that lets users create, customize, and export QR codes directly in their browser. No accounts, no tracking, and no data sent to a server.

## Features

* **100% Client-Side** — QR codes are generated locally in the browser.
* **Multiple QR Types** — URL, Wi-Fi, Contact, and Plain Text.
* **Customizable Design** — Adjust colors, size, and error correction.
* **PNG & SVG Export** — Download QR codes in high-quality formats.
* **Clipboard Support** — Copy generated QR codes instantly.
* **Dark & Light Mode** — Responsive theme with saved preferences.
* **Responsive Design** — Works seamlessly across desktop and mobile.

## Tech Stack

* React
* Vite
* JavaScript
* CSS
* Lucide Icons

## Getting Started

### Prerequisites

* Node.js 18 or later
* npm

### Installation

```bash
git clone https://github.com/josephsojan/ScanMe.git
cd ScanMe
npm install
```

### Development

```bash
npm run dev
```

Open the local development URL shown in your terminal.

### Production Build

```bash
npm run build
```

## Project Structure

```text
ScanMe/
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── InfoSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── QrGenerator.jsx
│   │   ├── QrPreview.jsx
│   │   └── ThemeToggle.jsx
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Use Cases

ScanMe can be used for:

* Websites and portfolios
* Social media profiles
* Wi-Fi sharing
* Digital business cards
* Event materials
* Business cards and flyers
* Menus and product packaging
* Presentations and digital displays

## Privacy

ScanMe is designed with privacy in mind. QR code content is processed locally in the user's browser and is not uploaded to a backend server.

## License

This project is licensed under the **MIT License**.

---

**ScanMe — Generate. Customize. Share.**
