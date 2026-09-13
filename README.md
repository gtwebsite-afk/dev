# Five New Website Universes

A self-contained static portfolio of five original demo sites built from zero with semantic HTML, local CSS/JavaScript, and local SVG artwork. The projects are deliberately independent: each has its own visual grammar, navigation model, responsive behavior, and namespaced browser state.

## Open locally

No build step is required. From this directory run a static server (recommended so relative URLs behave exactly as they do after deployment):

```bash
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/`. Opening `index.html` directly also works for pages that do not require a server origin.

## Projects

| Folder | Concept | Primary interaction |
|---|---|---|
| `automotive/` | Performance electric mobility | model switcher, specification rail, compare/configure, test-drive form |
| `fashion/` | ORVYN — avant-garde editorial commerce | product gallery, size/variant selection, wishlist and local demo bag |
| `publication/` | Kabararus — independent digital newsroom | dense front page, topic routing, article reading progress and related coverage |
| `festival/` | KILATARA — music festival/live event | day/stage schedule, artist details, favorites and ticket pathway |
| `impact/` | RUTE BAIK — environmental and social impact foundation | geography selector, impact metrics, field stories, transparency/donation demo |

Current source inventory: KYNTRA (automotive, 24 HTML pages), ORVYN (fashion, 26 HTML pages), Kabararus (publication, 30 HTML pages), KILATARA (festival, 24 HTML pages), and RUTE BAIK (impact, 28 HTML pages). The final page inventory remains visible in each folder's own navigation and source. Each folder contains a distinct `assets/` directory and does not require the other folders.

## File layout

```text
/
├── index.html
├── automotive/
├── fashion/
├── publication/
├── festival/
├── impact/
├── README.md
├── DESIGN-DIFFERENCE-REPORT.md
├── QA-REPORT.md
└── LEGACY-FINGERPRINT-SCAN.txt
```

Shared-looking filenames are intentionally avoided in source behavior: scripts, storage keys, and event handlers remain scoped to their project. There is no framework or package manager requirement.

## Browser support

The demos target current evergreen Chrome, Edge, Firefox, and Safari releases, plus mobile Safari/Chrome. They use standard HTML, CSS, SVG, and JavaScript APIs. A static web server is recommended for consistent navigation and local font loading.

## Accessibility and performance

Each project includes a skip link, semantic landmarks, keyboard-visible focus states, labeled controls, descriptive image alternatives, responsive layouts, and a `prefers-reduced-motion` path. Critical hero visuals are eager; secondary SVG artwork is lightweight and lazy where appropriate. The sites do not load remote fonts, image URLs, analytics, or third-party JavaScript.

## Frontend-only limitations

Forms, cart, wishlist, favorites, configurator, newsletter, search, and donation controls are demonstrations backed by local state or inline validation. They do not send payments, create accounts, call an API, or store credentials. Data can be cleared with the browser's site-data controls. No production backend, CMS, checkout, or authentication is included.

## Deployment notes

Upload the directory as-is to any static host. Keep relative paths intact. The showcase and all internal links are domain agnostic; no production, localhost, Vercel, GitHub, or Cloudflare origin is embedded in the source. Configure server fallback behavior for the included `404.html` if the host supports it.


## Combined legacy collection

The latest existing collection is preserved in separate deployable folders: `legacy-dirac/`, `legacy-mum/`, `legacy-interior/`, `legacy-konsultan/`, `legacy-catalog/`, `legacy-extra/`, `legacy-resort/`, `legacy-healthcare/`, `legacy-legal/`, `legacy-academy/`, and `legacy-culinary/`. Each contains its own `index.html` entry point and stays below the upload folder limits. The root `index.html` is the new exhibition catalogue and links to both the five new universes and the preserved collection.
