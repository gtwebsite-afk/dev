# DEMO INVENTORY

**Discovery result:** 27 demo families were detected from the current `website.html`, then verified against each homepage and family style fingerprint. No demo count was assumed.

- Final HTML pages audited: **783**
- Pages confidently assigned to a demo family by family CSS fingerprint: **759**
- Showcase / compatibility / account / utility HTML outside the 27 families: **24**
- Homepage family CSS fingerprints: **27 unique out of 27**

| Demo | Brand | Industry | Homepage | Family HTML | Visual DNA | Status |
|---:|---|---|---|---:|---|---|
| 01 | ARUVA — Teluk Timur | Luxury boutique resort | `legacy-resort-index.html` | 30 | Full-bleed tropical hospitality; serif-led quiet luxury | Audited / refined |
| 02 | Nadiya Specialist Clinic | Specialist healthcare | `legacy-healthcare-index.html` | 22 | Clinical clarity; pale cyan; human illustration; appointment-first | Audited / refined |
| 03 | Veyra & Arcton | Premium law firm | `legacy-legal-index.html` | 36 | Editorial legal minimalism; high-contrast serif; restrained cream | Audited / refined |
| 04 | Metrika Academy | Creative education | `legacy-academy-index.html` | 25 | Swiss/poster energy; bold type; primary-color geometry | Audited / refined |
| 05 | Embra | Premium culinary | `legacy-culinary-index.html` | 21 | Fire/season/table; food-led photography; wine/cream editorial palette | Audited / refined |
| 06 | CV Multi Usaha Mandiri | Procurement & contracting | `mum-index.html` | 36 | Operational corporate; maritime/project imagery; dense service utility | Audited / refined |
| 07 | PT Dirac Inovasi Nusantara | Technology & digital | `dirac-index.html` | 36 | Technical dark system; product/engineering hierarchy | Audited / refined |
| 08 | M&M Interior | Architecture & interior | `interior-index.html` | 32 | Editorial residential; material imagery; serif/sans composition | Audited / refined |
| 09 | DIRAC Consulting | Business consulting | `konsultan-index.html` | 32 | Deep green advisory; evidence-led professional hierarchy | Audited / refined |
| 10 | KYNTRA | Performance electric mobility | `automotive-index.html` | 24 | Hard-edged black/red automotive; specification-driven composition | Audited / refined |
| 11 | ORVYN / NOX FORM | Avant-garde fashion | `fashion-index.html` | 26 | Black/white/purple editorial fashion; asymmetry; sharp geometry | Audited / refined |
| 12 | Kabararus | Independent newsroom | `publication-index.html` | 30 | Newspaper density; serif headline system; editorial rails | Audited / refined |
| 13 | KILATARA | Music festival | `festival-index.html` | 24 | Black/neon poster language; oversized kinetic typography | Audited / refined |
| 14 | Rute Baik | Evidence-led foundation | `impact-index.html` | 28 | Public-interest editorial; proof/field-note composition | Audited / refined |
| 15 | Nawasena | Public service portal | `nawasena-index.html` | 27 | Civic clarity; service-index logic; modest green/amber signals | Audited / refined |
| 16 | Lumora Private | Private financial platform | `lumora-index.html` | 25 | Calm plum finance; tabular numbers; understated wealth interface | Audited / refined |
| 17 | Northline | Freight operations | `northline-index.html` | 28 | Operational routing; hard grid; waybill/telemetry vocabulary | Audited / refined |
| 18 | Ruang Sela | Contemporary museum | `ruangsela-index.html` | 28 | Curatorial whitespace; gallery framing; muted art-object palette | Audited / refined |
| 19 | Varelta FC | Football club platform | `varelta-index.html` | 26 | Matchday density; club green/gold; fixture-led information | Audited / refined |
| 20 | Auralis Vector | Aerospace mission systems | `auralis-index.html` | 27 | Mission-console black; signal orange; engineering data hierarchy | Audited / refined |
| 21 | Meridian Air | Airline booking | `meridianair-index.html` | 27 | Quiet travel utility; itinerary-first booking and fare structure | Audited / refined |
| 22 | Lumenfold | Life sciences research | `lumenfold-index.html` | 28 | Scientific editorial; pale lab palette; research-note hierarchy | Audited / refined |
| 23 | Emberline Grid | Energy utility operations | `emberline-index.html` | 28 | Utility status system; service data; direct operational language | Audited / refined |
| 24 | Morrowglass | Narrative game universe | `morrowglass-index.html` | 29 | Field-guide fantasy; parchment/navy; lore-led editorial world | Audited / refined |
| 25 | Lumen Reel | Curated streaming | `lumenreel-index.html` | 28 | Cinematic editorial; dark image blocks; curated program logic | Audited / refined |
| 26 | Vantara | Talent marketplace | `vantara-index.html` | 28 | Human workboard; warm yellow; practical role/employer paths | Audited / refined |
| 27 | Gridora | Urban property discovery | `gridora-index.html` | 28 | Property search utility; map/address logic; restrained urban system | Audited / refined |

## Showcase

`website.html` is the central display. It contains 27 demo cards. Each card now resolves directly to its own homepage. DEMO 01–05 had a specific regression in the prior base: their `data-dirac-demo-path` values were correct but their clickable anchors still pointed to `index.html`; those anchors were corrected surgically.

## Utility pages

The remaining 24 HTML files are parent showcase, compatibility routes, project/account/detail utilities, and catalog support pages. They were included in global link, asset, metadata, accessibility-semantic and JavaScript audits even though they are not counted as separate demo families.
