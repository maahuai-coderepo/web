# AGENT.md — Maahu Website Codebase

## What this is
Static HTML/CSS/JS website for Maahu — India's first community wardrobe.
Hosted on Firebase Hosting. No build step. No framework. Self-contained HTML files.

---

## File Structure

```
public/
├── index.html              ← Homepage (Platform + AI + Community showcase)
├── about.html              ← About / Founders
├── how-it-works.html       ← How It Works & Trust Lifecycle
├── technology.html         ← AI & Google Cloud Architecture showcase
├── join.html               ← Join the Founding Squad (Firebase form)
├── privacy.html            ← Privacy Policy (DPDP Act)
├── terms.html              ← Terms of Service
├── delete-account.html     ← Account & Data Deletion Guide
├── shared-shell.css        ← Base nav/drawer/footer layout for subpages
├── brand-refresh.css       ← Authoritative 60-30-10 theme & component styles
├── 404.html                ← Error page
├── blog/
│   ├── index.html          ← Journal landing page  ← THIS IS THE LIVE BLOG PAGE
│   ├── closet-audit-mumbai.html
│   ├── bali-packing-list-indian-women.html
│   ├── indian-women-trust-wardrobe-sharing.html
│   ├── outfit-repeat-stigma-india.html
│   └── wardrobe-1-lakh-guide.html
├── assets/                 ← All images
├── BRAND-GUIDELINES.md
└── STRUCTURE.md
AGENT.md                    ← This file (at repo root)
```

**Critical:** The live journal page is `public/blog/index.html` — NOT `blog-index.html` at root level.
Always edit the file inside `public/blog/` when fixing the journal page.

---

## Deployment

```powershell
# New preview URL (Windows PowerShell)
firebase hosting:channel:deploy "fix$(Get-Date -Format 'HHmmss')" --expires 7d

# Deploy to production
firebase deploy --only hosting
```

Firebase project: `maahu-web`

---

## Design System

### Colours
```css
--dark:        #1a140d   /* Page background */
--dark-2:      #241c12   /* Cards, footer, surfaces */
--dark-3:      #2e2418   /* Hover states */
--gold:        #b8933e   /* Primary accent */
--gold-light:  #d4ae6a   /* Hover on gold */
--gold-pale:   #e8d5a8   /* Hamburger open state */
--cream:       #f7f0e6   /* Primary text */
--text-mid:    rgba(247,240,230,0.65)  /* Secondary text */
--text-dim:    rgba(247,240,230,0.4)   /* Muted text */
```

Footer link colour: `#D0D0D0`
Footer copyright colour: `#a0a0a0`
Footer city tag: `rgba(184,147,62,0.55)`

### Typography
- Headings: `Cormorant Garamond` serif, weight 300
- Body/UI: `Jost` sans-serif, weight 300
- Hero titles: `clamp(56px,8vw,100px)` — all main pages
- Section titles: `clamp(34px,4vw,52px)`
- Body text: `15px`

### Breakpoints
Single breakpoint: `@media (max-width:900px)` — all mobile rules go here.
Blog pages also use `@media (max-width:768px)` for article-specific layout.

---

## Known Patterns & Critical Rules

### 1. Footer mobile — THE most common bug
The footer must always have this structure:

```css
/* Desktop */
.footer-top {
  display:grid; grid-template-columns:2fr 1fr 1fr 1fr;
  gap:56px;
}

/* Mobile — MUST be inside @media, NEVER outside */
@media (max-width:900px) {
  .footer-top { grid-template-columns:1fr 1fr; gap:36px; }
  footer { padding:48px 24px 32px; }
}
```

**The recurring bug:** `.footer-insta:hover` missing its closing `}` which traps the mobile footer rules outside the media query. Always check:
```css
/* WRONG — causes Company column to go offscreen on mobile */
.footer-insta:hover { color:var(--gold);
  .footer-top { grid-template-columns:1fr; gap:24px; }
  footer { padding:48px 24px 32px; } }

/* CORRECT */
.footer-insta:hover { color:var(--gold); }
@media (max-width:900px) {
  .footer-top { grid-template-columns:1fr 1fr; gap:36px; }
  footer { padding:48px 24px 32px; }
}
```

### 2. CSS cascade order matters
Rules must appear in this order inside `<style>`:
1. Base/desktop CSS
2. `@media (max-width:900px)` block — all mobile overrides

If footer CSS appears AFTER a media block, the desktop rule overrides the mobile rule.

### 3. Hamburger bars must be cream coloured
```css
.nav-hamburger span { background:var(--cream); }
```
Not `var(--dark)` — dark bars are invisible on the dark nav background.

### 4. Mobile drawer JS must be complete
The hamburger JS always ends with:
```js
drawer.querySelectorAll('a').forEach(function(a) {
  a.addEventListener('click', closeMenu);
});
})();
```
If the file is truncated before this, the hamburger won't work. Always check the file ends with `</html>`.

### 5. body must have overflow-x:hidden
All pages need:
```css
body { overflow-x:hidden; }
```
Without this, wide content causes horizontal scroll and footer columns appear offscreen.

### 6. Mobile hero padding-top
Hero sections need `padding-top:80px` minimum on desktop and `padding-top:90px` on mobile to clear the fixed nav. Mobile uses `min-height:100svh` (not `100vh`) to account for browser chrome.

### 7. Active nav link
Each page marks the correct nav link active:
```html
<li><a href="/about" class="active">About</a></li>
```
And in mobile drawer same active class applies with gold highlight + left border.

---

## Footer HTML Structure
Every page uses identical footer HTML:
```html
<footer>
  <div class="footer-top">
    <div><!-- Brand + tagline --></div>
    <div><!-- Navigate links --></div>
    <div><!-- Journal links --></div>
    <div><!-- Company links --></div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2026 Maahu Digital Technologies Pvt Ltd · maahu.ai 🧡</div>
    <a href="https://www.instagram.com/maahu.ai/" class="footer-insta">...</a>
    <div class="footer-city">Launching Mumbai · 2026</div>
  </div>
</footer>
```
Join page (`join.html`) has NO footer — intentional, it's a full-screen form.

---

## When Making Changes

### Before editing any file:
1. Always read the actual deployed file — never assume it matches a previous fix
2. Check which file Firebase actually serves (see File Structure above)
3. Print the complete `<style>` block before touching CSS

### When fixing CSS:
1. Check CSS cascade order — footer CSS must come before media queries OR the mobile rule must be last
2. Check for unclosed braces — a missing `}` corrupts everything after it
3. Test with puppeteer at 390px width before considering it fixed

### When fixing mobile layout:
1. All mobile rules in ONE `@media (max-width:900px)` block
2. No desktop rules appearing after the media block
3. `overflow-x:hidden` on body
4. `!important` on footer-top grid only as last resort

### Puppeteer mobile test (run from /tmp/puppeteer-test/):
```js
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/home/claude/.cache/puppeteer/chrome/linux-131.0.6778.204/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
  await page.goto('file:///path/to/file.html', { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 800));
  const result = await page.evaluate(() => {
    const ft = document.querySelector('.footer-top');
    const cs = window.getComputedStyle(ft);
    return {
      gridCols: cs.gridTemplateColumns,
      children: Array.from(ft.children).map(c => {
        const r = c.getBoundingClientRect();
        return { right: Math.round(r.right), offscreen: r.right > window.innerWidth };
      })
    };
  });
  console.log(result);
  await browser.close();
})();
```

---

## Brand Voice Rules
- CTA: "Join the Founding Squad" (everywhere) or "Join Beta Access" / "Join the Squad"
- No Hindi on website
- Full platform capabilities are showcased publicly: AI Closet Digitizer, Wardrobe Financial ROI, Tara AI Concierge, Style Circle, Private Closet Share, Aadhaar Secure QR, Photo Handover Checkpoints, and Google Cloud / Vertex AI architecture
- Contact / grievance email: `hello@maahu.ai`
- Legal entity in footer: `© 2026 Maahu AI Digital Private Limited · maahu.ai`
- Tone: warm, financially intelligent, technically credible, culturally specific to Indian women

## Revenue & Settlement Copy Rules
- Keep public marketing copy general: *"transparent platform fee shown upfront before every booking"* (fees are backend-configurable)
- Do **not** describe Maahu as operating a "regulated escrow account" — describe protected refundable deposits, automated undisputed refunds, and Razorpay payouts/settlements

---

*Last updated: November 2026*
