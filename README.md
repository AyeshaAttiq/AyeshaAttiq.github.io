# Ayesha Attiq

Personal portfolio site — chemistry, laboratory research, analytical instrumentation.

Static site: plain HTML/CSS/JS with Bootstrap 4, jQuery, AOS and particles.js.
No build step — GitHub Pages serves the repo as-is.

Adapted from [mhuzaifam.github.io](https://mhuzaifam.github.io), which is built on the
[awesome-portfolio-websites](https://github.com/smaranjitghose/awesome-portfolio-websites) by Smaranjit Ghose and
Anush Bhatia (MIT, see `LICENSE`).

---

## How the site is put together

Page markup is mostly a shell. The actual content lives in JavaScript arrays that are
rendered into cards at load time — **edit the arrays, not the HTML**:

| Section | Data file | Array |
|---|---|---|
| Work experience | `assets/js/experience.js` | `exp` |
| Leadership & outreach | `assets/js/experience.js` | `volunteershipcards` |
| Certifications | `assets/js/education.js` | `moocscards` |
| Skills | `assets/js/techstack.js` | `techStack` |

Education timeline cards are plain markup in `education.html` (three `.timeline-item`
blocks). The nav bar and footer are injected by `assets/js/app.js` — change a nav link
once there and it updates on every page.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Hero, animated tagline, CV download, featured research |
| `education.html` | NUST / KIPS / Shining Star timeline + certifications |
| `experience.html` | PINSTECH and CETQAP internships + society roles |
| `techstack.html` | 16 lab techniques, instruments and software |
| `404.html` | Not-found page |

## Running it locally

```bash
python -m http.server 8766 --directory "D:/APNI CHEEZAIN/Ayesha/ayeshaattiq.github.io"
```

Then open `http://localhost:8766`. Opening `index.html` directly by double-click also
works, but a server matches how GitHub Pages behaves.

---

## Publishing to GitHub Pages

1. Ayesha creates a GitHub account. **Her username determines the URL.**
2. She creates a public repo named exactly `<username>.github.io` — for username
   `ayeshaattiq` that is `ayeshaattiq.github.io`.
3. Upload the contents of this folder (Add file → Upload files, drag everything in).
4. The site is live at `https://<username>.github.io` within a couple of minutes.

> **If her username is not `ayeshaattiq`**, the hardcoded URLs need updating —
> `sitemap.xml`, `robots.txt`, and the `og:url` / `og:site_name` meta tags in each of
> the four pages. Search the folder for `ayeshaattiq.github.io` and replace.

### Pointing a custom domain at it later

GitHub Pages supports custom domains for free, with automatic HTTPS. Buy
`ayeshaattiq.com` from any registrar (~$10/yr), then add a file named `CNAME` to the repo
root containing one line:

```
www.ayeshaattiq.com
```

Then set the registrar's DNS to point at GitHub Pages, and enable the domain under
repo **Settings → Pages**. Nothing else in the site changes.

---

## What was changed from the source portfolio

Content is entirely Ayesha's; the layout and CSS are inherited. Specifically:

- **Both Google Analytics trackers removed** (`G-M11CMZ12Q` and `G-G6D61F5TL4`). They
  reported to the previous owner's account. Add her own property if she wants stats.
- **Pages deleted** with no content behind them: projects, research, publications,
  design, events, editor, references, and two travel/semester templates.
- **Social links** reduced to LinkedIn and email — she has no public GitHub, Twitter,
  Instagram or Scholar profile, so those buttons were removed rather than left dead.
- **Card artwork** for internships, societies and skills is generated SVG in
  `assets/images/`, not scraped logos. Swap in real logos any time.
- **Profile photo** cropped square from the supplied screenshot (the original had black
  letterbox bars and a clock overlay).
- Commented-out hackathon markup and data removed.
- **Hero illustrations replaced.** The Skills and Experience pages shipped with
  web-developer artwork ("HTML"/"CSS" lettering drawn as vector paths, a browser window,
  a phone app, and male figures). Both are now chemistry scenes drawn in the same
  palette: glassware with a chromatogram readout, and a bench instrument with sample
  vials. The Experience page keeps the original purple blob as its backdrop.
- Removed `assets/custom_illustrations/` (401KB) - nothing referenced it.
- **Education hero** now uses the upstream template's `header-female.svg` (a woman
  reading), replacing the inline tree. The upstream repo ships male/female variants for
  three assets only - `dp_*`, `education-page/header-*` and `project-page/header-*` -
  and none for the Skills or Experience heroes, which is why those two are custom.

## Verified

- All four pages return 200 with no broken local asset references
- No console errors; nav, footer and every JS-rendered card list populates
- All 28 images decode (16 skill icons, 6 experience cards, 3 school logos, profile, wave)
- No horizontal overflow at 375px or desktop width
- No remaining references to the previous owner in shipped source

## Open items

- [ ] **Confirm the GitHub username** before publishing, then fix URLs if it is not
      `ayeshaattiq` (see above).
- [ ] **The profile photo is a casual phone snapshot** taken on a bus. It crops fine, but
      a plain-background headshot would suit a professional portfolio much better.
- [ ] **Society acronyms** NLC and SSC are unexpanded, as on the CV. Spell them out if the
      audience will not recognise them.
- [ ] **"High Scorer"** is carried over verbatim from the CV — likely PANalytical's
      "HighScore (Plus)". Confirm with Ayesha.
- [ ] **No photography on the site.** She shoots events for two societies and made a
      documentary; both are described in text only. Adding real images would be the single
      biggest improvement available.
