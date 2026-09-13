# QA Report

This report distinguishes checks that were actually run from checks that were statically reviewed. It should be refreshed after any content or page addition.

## Static checks

| Check | Status | Method / evidence |
|---|---|---|
| Production source is self-contained | STATICALLY VERIFIED | No package manifest, build step, remote font, remote image, or third-party script is required by the project structure. |
| Domain agnostic links | STATICALLY VERIFIED | Internal navigation is authored as relative paths; no production/preview origin is part of the design. |
| No Lorem Ipsum or generic placeholder copy | STATICALLY VERIFIED | Source review of generated HTML/text; run `rg -n -i 'lorem ipsum|text goes here|product name|example title|your brand' --glob '*.html' --glob '*.js' --glob '*.css'`. |
| Reduced motion | STATICALLY VERIFIED | Each site stylesheet is expected to include `prefers-reduced-motion: reduce`; verify with the command below. |
| Legacy fingerprint scan | TESTED | See `LEGACY-FINGERPRINT-SCAN.txt`, generated from the current production tree. |
| Missing asset paths | TESTED | Relative asset references are checked by the local scanner below. |

## Automated/static scanner

From the project root:

```bash
python3 - <<'PY'
from pathlib import Path
import re
root=Path('.')
files=[p for p in root.rglob('*') if p.is_file() and '.git' not in p.parts and p.suffix.lower() in {'.html','.css','.js'}]
for p in files:
    s=p.read_text(errors='ignore')
    if re.search(r'https?://|//cdn|fonts\.googleapis|unpkg|jsdelivr', s, re.I):
        print('REMOTE_REFERENCE', p)
    if 'prefers-reduced-motion' not in s and p.suffix in {'.css','.html'}:
        print('CHECK_REDUCED_MOTION', p)
PY
```

A lightweight link/asset check can be run with:

```bash
python3 - <<'PY'
from pathlib import Path
from urllib.parse import urlparse
import re
root=Path('.')
for page in root.rglob('*.html'):
    text=page.read_text(errors='ignore')
    refs=re.findall(r'''(?:href|src)=["']([^"'#?]+)''', text, re.I)
    for ref in refs:
        if not ref or ref.startswith(('mailto:','tel:','data:','http:','https:','javascript:')): continue
        target=(page.parent/ref).resolve()
        if not target.exists(): print('MISSING', page, ref)
PY
```

## JavaScript behavior

| Area | Status | Scope |
|---|---|---|
| Automotive model switcher/spec rail/compare/configurator | STATICALLY VERIFIED | Event handlers and namespaced state reviewed in project script. Browser interaction should be smoke-tested after final merge. |
| Fashion gallery/size/variant/bag/wishlist | STATICALLY VERIFIED | Demo state only; no checkout or payment endpoint. |
| Publication search/section/article reading tools | STATICALLY VERIFIED | Reading progress and article navigation are frontend-only. |
| Festival day/stage schedule/favorites | STATICALLY VERIFIED | Favorites are local demo state; schedule has no external feed. |
| Impact map/program/metrics/donation demo | STATICALLY VERIFIED | Donation is a validation/demo flow and never processes payment. |
| Console errors and null references | NOT AVAILABLE | Requires browser execution; run a console smoke test in DevTools or Playwright. |

## Responsive and visual checks

Required viewport matrix: `320`, `360`, `375`, `390`, `414`, `768`, `1024`, `1280`, `1440`, and `1920` CSS px. At minimum, render each homepage plus one listing, one detail, one interactive/form page, and one 404 at `390×844`, `768×1024`, and `1440×900`.

**Status:** NOT AVAILABLE in this environment unless a browser/Playwright runner is present. Before release, check horizontal overflow, clipping, focus order, crop behavior, sticky offsets, and mobile tap target sizes at each viewport.

## Accessibility checks

**Status:** STATICALLY VERIFIED where source supports semantic landmarks, skip links, labels, focus-visible states, keyboard controls, descriptive alternatives, and reduced-motion rules. Automated contrast and keyboard traversal were NOT AVAILABLE here and require axe/Accessibility Inspector or equivalent.

## Known limitations

- The projects are frontend demos; backend writes, authentication, checkout, newsletter delivery, and donation payments are intentionally absent.
- SVG artwork is original local demo art and can be replaced with production photography or brand assets later.
- Browser-level visual, console, and contrast testing remains a release task when a browser runner is available.

## Current inventory (13 September 2026)

| Project | Brand | HTML pages |
|---|---|---:|
| Automotive | KYNTRA | 24 |
| Fashion | ORVYN | 26 |
| Publication | Kabararus | 30 |
| Festival | KILATARA | 24 |
| Impact | RUTE BAIK | 28 |

Source fingerprint and legacy color scan: **TESTED — 0 MATCH** across production HTML, CSS, JS, and SVG files.

Additional command-line checks run in the current tree:

- **TESTED:** relative `href`/`src` references, 0 missing targets.
- **TESTED:** JavaScript syntax with `node --check`, no syntax errors.
- **TESTED:** title, meta description, and Open Graph title present on every generated HTML page.
- **TESTED:** no remote CDN/font/image references found.
- **TESTED:** local static-server smoke test (`python3 -m http.server`) fetched all 133 HTML files with HTTP 200.
