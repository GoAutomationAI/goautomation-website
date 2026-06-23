# Go Automation — Website

Everything Dan needs to deploy the site is in this folder.

---

## Files

- `index.html` — the complete website (all CSS and JS is self-contained, no frameworks needed)
- `favicon.png` — **Dan needs to create this** (see Favicon section below)

---

## Favicon

The site references a file called `favicon.png` in the same folder as `index.html`.

Dan needs to create this before deploying. Options:

1. **Quickest** — go to https://favicon.io, create a simple favicon using the Go Automation logo initials "GA" with a dark navy background (#0B1F3A) and green text (#00C47A), download the `favicon.ico` or `favicon.png` and drop it in the same folder as `index.html`. Then update the two lines in the `<head>` of `index.html` to point to the correct filename.

2. **From the logo** — if you have the Go Automation logo as a PNG or SVG, upload it to https://realfavicongenerator.net, download the package, and place `favicon.ico` in the root folder. Replace the two favicon lines in the head with the code the generator provides.

3. **Simplest placeholder** — rename any square logo image to `favicon.png` and drop it alongside `index.html`. It will work immediately.

---

## Deploying to GitHub Pages (free hosting)

1. Go to github.com and create a new repository — call it `goautomation-website` (or anything you like)
2. Upload both files (`index.html` and `favicon.png`) to the root of the repo
3. Go to **Settings → Pages**
4. Under **Source** select `Deploy from a branch`
5. Choose `main` branch, `/ (root)` folder → click **Save**
6. GitHub will give you a URL like `https://yourusername.github.io/goautomation-website/` — the site is live

---

## Connecting the custom domain (goautomation.ai)

Once GitHub Pages is enabled:

1. In the Pages settings, type `goautomation.ai` under **Custom domain** and save
2. Log in to your domain registrar (wherever goautomation.ai is registered) and add these DNS records:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     yourusername.github.io
```

3. Back in GitHub Pages settings, tick **Enforce HTTPS**
4. DNS propagation takes up to 24 hours — after that the site is live at goautomation.ai

---

## Alternative: Netlify (even simpler, no command line needed)

1. Go to netlify.com and sign up free
2. Click **Add new site → Deploy manually**
3. Drag and drop the folder containing `index.html` and `favicon.png`
4. Netlify gives you a live URL instantly
5. Go to **Domain settings** to connect goautomation.ai — Netlify walks you through the DNS changes

---

## Connecting the contact form

The contact form currently collects data but doesn't submit it anywhere. Dan should connect it to one of these:

**Option A — Formspree (easiest, free tier available)**
1. Go to formspree.io and create a free account
2. Create a new form — Formspree gives you an endpoint URL like `https://formspree.io/f/abcdefgh`
3. In `index.html`, find the line `<button type="button" class="btn-submit">` and change it to a proper form submission, or simply add `action="https://formspree.io/f/YOUR_ID" method="POST"` to a wrapper form tag around the contact fields

**Option B — Netlify Forms (if using Netlify, zero config)**
Add `netlify` attribute to the form tag: `<form netlify>` and Netlify handles everything automatically. Submissions appear in the Netlify dashboard.

**Option C — Connect to existing CRM**
If Go Automation uses GHL (GoHighLevel), the form can post directly to a GHL webhook. Replace the button action with the GHL form embed or webhook URL.

---

## Making future edits to the site

All content is in `index.html`. Use Ctrl+F / Cmd+F to search for the text you want to change:

| What to change | Search for |
|---|---|
| Hero headline | `More leads converted` |
| Pricing | `pricing-grid` |
| Journey cards | `journey-grid` |
| Testimonials | `testi-grid` |
| Contact details | `0161 514 1260` |
| FAQ answers | `faq-a` |
| Footer copy | `footer-brand` |

---

## Notes for Dan

- No build tools, no npm, no frameworks — it's a single HTML file that works as-is
- Fully mobile responsive
- Smooth scroll navigation built in
- Scroll-triggered animations on cards and sections
- FAQ accordion works out of the box
- The site uses Google Fonts (Inter + Sora) loaded from Google's CDN — requires internet connection to render correctly, but degrades gracefully to system fonts offline
