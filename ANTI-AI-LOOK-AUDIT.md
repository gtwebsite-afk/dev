# ANTI-AI LOOK AUDIT

**Method:** first-pass source audit + family CSS comparison + 27-homepage visual contact-sheet review at mobile/tablet/desktop/large + a second anti-AI red-team pass. The 27 homepages retain **27 distinct CSS fingerprints**.

Common risks explicitly rejected: universal bento grids, mass glassmorphism, one radius system, purple-blue gradient branding across families, generic centered heroes, universal `translateY(-4px)` hover, universal reveal animation, fake testimonial/statistic additions, and benchmark cloning.

| Demo | Anti-AI action / retained human-directed decision | Final status |
|---:|---|---|
| 01 | Preserved full-bleed hospitality and serif pacing; no bento conversion. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 02 | Preserved clinical task hierarchy; no decorative glass/gradient treatment. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 03 | Preserved legal editorial asymmetry; no generic corporate cards. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 04 | Preserved poster/geometry language; motion remains brand-specific. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 05 | Preserved food photography and seasonal narrative; no generic luxury dashboard. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 06 | Retained operational procurement identity; did not force portfolio-wide design tokens. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 07 | Retained engineering system; did not convert to generic Linear/Vercel clone. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 08 | Retained material/editorial interior system; no repetitive rounded bento. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 09 | Retained deep-green advisory identity; resisted generic SaaS consulting cards. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 10 | Retained hard-edge EV art direction; no universal pill/header treatment. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 11 | Retained sharp fashion geometry; no luxury-template glass effects. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 12 | Retained newspaper density and type hierarchy; no card-grid homogenization. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 13 | Retained neon festival poster language; no generic fade-up-everything system. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 14 | Retained field-report/evidence composition; no fake impact statistics added. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 15 | Removed universal hover-lift dependency; civic interactions use underlines/rules and direct service rows. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 16 | Removed universal lift; finance polish uses tabular numerals, borders and calm state changes. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 17 | Removed universal lift; routing/status interactions stay operational and hard-edged. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 18 | Removed universal lift/elevation bias; museum pages remain quiet and curatorial. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 19 | Preserved club/matchday density rather than sparse generic landing-page sections. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 20 | Preserved mission-console telemetry rather than generic SaaS dashboard cards. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 21 | Preserved airline search/itinerary logic; no generic travel-card wall. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 22 | Preserved research-note hierarchy and scientific restraint. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 23 | Preserved utility status language; no ornamental energy-tech gradients added. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 24 | Preserved field-guide/game-lore editorial treatment instead of generic gaming neon. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 25 | Preserved cinematic editorial discovery; no mass hover-lift cards. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 26 | Preserved warm human workboard and practical job tasks; no generic AI recruiter dashboard. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |
| 27 | Preserved map/address decision language and practical search hierarchy. | **PASS — HUMAN-DIRECTED VISUAL LANGUAGE** |

## Red-team findings

- The largest cross-family AI-look risk in the latest base was the shared `demo-polish.css` behavior used by DEMO 15–27. It was removed as an external shared core file and its replacement was embedded with family-specific interaction rules.
- Existing `translateY` interactions remain only where they belong to an existing family/system and were not mass-erased when that would create regression.
- No cliché-copy hits were found for the explicit generic slogans listed in the master prompt.
- No benchmark was copied literally; visual comparison shows the portfolio remains a set of different art directions rather than one template recolored 27 times.
