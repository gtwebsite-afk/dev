# QA REPORT

## Release scope

- Demo families discovered: **27**
- HTML audited: **783**
- Runtime/source files before release reports: **926**
- Family HTML identified by CSS fingerprint: **759**
- Showcase / compatibility / utility HTML: **24**

## TESTED

| Gate | Result |
|---|---|
| `website.html` demo cards | **27/27 direct homepage targets exist**; DEMO 01–05 clickable-anchor regression corrected |
| Local href/src/CSS-url crawl | **21,349 references checked; 0 missing targets** |
| JavaScript syntax | **1,212 inline script references / 121 unique executable bodies; 0 syntax errors** |
| Responsive homepage matrix | **27 × 15 widths = 405 viewport checks**, widths 320–1920; **0 horizontal overflow after fixes** |
| Deep page QA | **135 representative pages** (homepage/404/form-or-interactive/detail/listing where available), mobile + desktop; no genuine runtime/overflow issue after isolated recheck |
| Visual QA | **27 homepages × 4 viewports = 108 Chromium renders** at 390×844, 768×1024, 1440×900, 1920×1080; anti-AI/contact-sheet review completed |
| Reduced motion | 522 pages with CSS animation; **0 animated page missing a meaningful `prefers-reduced-motion` rule** |
| Focus-visible | **0 HTML page missing `:focus-visible` treatment** |
| Duplicate IDs | **0** after the publication search ID correction |
| Buttons without explicit type | **0** |
| Form controls without accessible label | **0** in static semantic audit |
| Images missing alt | **0** |
| Local raster/SVG images missing intrinsic dimensions where resolvable | **0** |
| Local external core CSS/JS references | **0** — core styles/scripts are embedded as required |
| External runtime asset dependencies | **0**; four external Google Maps links are user-navigation anchors only |
| `target="_blank"` without `noopener noreferrer` | **0** |
| Duplicate title values | **0** |
| Duplicate meta-description values | **0** |
| Hardcoded legacy deployment host / DIRAC deployment host | **0** |
| New executable loops | **0 introduced**; existing timers in the parent showcase were not expanded |

## Security verification

The script block `dirac-security-boundary-20260905` in `website.html` was hashed before and after the upgrade. It remains **23,512 bytes** with identical SHA-256:

`567625747e3e2d861ea4462508809fca3da3926985a58aa2e7d1ad8a9073cbfc`

No guard bypass, `unsafe-inline` relaxation, new ENV, database table, external runtime library, `eval()` execution, `innerHTML` assignment, or `insertAdjacentHTML()` path was introduced. The only `eval(` match in a static text scan is a literal threat-token string inside the existing security boundary, not executable `eval` usage.

## Responsive fixes found by testing

1. DEMO 11 / ORVYN: mobile hero/ticker width overflow.
2. DEMO 14 / Rute Baik: 320px metric grid overflow.
3. DEMO 15 / Nawasena: invalid narrow-width `min()` expression causing 320px overflow.
4. DEMO 21 / Meridian Air: five-column booking fields overflowing at 1024px.

All four were fixed with family-local CSS only and the full 405-width matrix was rerun with zero overflow.

## SEO / semantics

- Doctype, charset, viewport, page title, meta description, robots, canonical, OG metadata and Twitter summary metadata are present across all HTML after the pass.
- Previously repeated meta descriptions were made page-specific; final duplicate title and description counts are zero.
- Existing relevant JSON-LD was retained. No fake review, rating, award, certification or fabricated product-price schema was added.
- Canonicals remain relative/domain-agnostic in source; no deployment hostname is pinned.

## Performance notes

- Runtime files before reports: ~45.8 MiB; HTML ~35.0 MiB; image assets ~8.0 MiB.
- The larger HTML footprint is an intentional consequence of the explicit **FULL HTML / embedded core CSS+JS** requirement. It removes core CSS/JS request dependencies and keeps each page portable.
- Existing image formats/dimensions were preserved unless a safe metadata correction was possible. No visual asset was upscaled simply to inflate quality claims.

## STATICALLY VERIFIED

- All 783 HTML files parsed for semantic/metadata/link/asset checks.
- Linux case-sensitive target resolution was used for local links/assets.
- Domain-agnostic navigation and parent-showcase return links were inspected statically.
- Structured-data blocks parse as JSON and contain no review/rating fabrication.
- Core CSS/JS embedding order preserves existing end-of-body JS placement for DEMO 10–14.

## NOT AVAILABLE / NOT CLAIMED

The environment blocks direct browser navigation to local HTTP/file URLs (`ERR_BLOCKED_BY_ADMINISTRATOR`). Chromium visual/runtime QA therefore used a controlled `set_content` harness with a routed local asset base. Opaque-origin-only `localStorage` / `new URL(location.href)` errors were separated from real errors and rechecked in isolated pages.

Firefox and WebKit browser runtimes were not available, so **full cross-browser execution is not claimed**. Native VoiceOver/TalkBack, real assistive-device testing, real-network Core Web Vitals/Lighthouse field data, and production server headers are likewise not claimed. These limitations are intentionally stated rather than converted into fictional pass results.
