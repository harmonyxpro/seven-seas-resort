# Seven Seas Resort Website

A modern, responsive resort website for **Seven Seas Resort** — a beachfront timeshare condo resort located directly on the Atlantic Ocean in Daytona Beach Shores, Florida.

## Tech Stack

- **React 18** — component-based UI
- **Vite 5** — fast dev server and build tool
- **Tailwind CSS 3** — utility-first styling with custom ocean/sand color palette

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `/dist` — ready to deploy to Netlify, Vercel, GitHub Pages, or any static host.

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
seven-seas-resort/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── AnnouncementBar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Amenities.jsx
│   │   ├── Rooms.jsx
│   │   ├── CtaBanner.jsx
│   │   ├── Attractions.jsx
│   │   ├── Owners.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── content.js       ← All resort content & copy in one place
│   ├── hooks/
│   │   └── useScrollSpy.js  ← Scroll-aware nav highlight
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Customization

### Adding Real Photos

Replace the `img-placeholder` divs in each component with real `<img>` tags. Place photos in `/public/images/` and reference them as `/images/photo.jpg`.

### Updating Resort Content

All copy, amenities, room types, attractions, and contact info live in one file:

```
src/data/content.js
```

### Owner Document Links

In `src/data/content.js`, update the `href` values in `OWNER_RESOURCES` to point to real PDFs or a document portal.

### Contact Form

The contact form currently shows a success state on submit. To wire it to a real backend, replace the `handleSubmit` function in `src/components/Contact.jsx` with a `fetch()` POST to your API, or integrate a service like [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com/), or [Netlify Forms](https://docs.netlify.com/forms/setup/).

---

## Deployment

### Netlify (recommended)

1. Push repo to GitHub
2. Connect repo in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

```bash
npx vercel
```

### GitHub Pages

Install the `gh-pages` package and add to `package.json`:
```json
"homepage": "https://yourusername.github.io/seven-seas-resort",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## Resort Contact

- **Address:** 2433 S. Atlantic Ave., Daytona Beach Shores, FL 32118
- **Phone:** (386) 257-1180
- **Email:** sevenseas1@cfl.rr.com
- **Managed by:** TJW Management Company
