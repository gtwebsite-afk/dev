# DEMO UPGRADE AUDIT

This document records the release-level changes applied to the latest source rather than pretending every page needed a redesign. Strong existing art direction was intentionally preserved.

| Demo | Before — strengths / weaknesses / AI-look or technical risk | After — implemented refinement |
|---:|---|---|
| 01 | Strong immersive resort photography and typography; shared portfolio chrome competed slightly with identity. | Preserved immersive composition; embedded portable chrome; completed metadata/a11y/link QA. |
| 02 | Clear clinical trust language; some technical metadata and shared utility dependencies were incomplete. | Preserved clinic calm; completed labels, metadata, intrinsic media dimensions and portable chrome. |
| 03 | Excellent editorial legal voice; needed project-wide technical parity. | Preserved asymmetric legal editorial system; standardized technical quality without visual homogenization. |
| 04 | Distinctive creative-school geometry; technical shell inconsistent with current full-HTML rule. | Preserved poster language; embedded shell and completed responsive/a11y/SEO pass. |
| 05 | Strong culinary art direction; family needed the same technical release gates as newer demos. | Preserved seasonal food storytelling; completed full-HTML portability and semantic QA. |
| 06 | Operationally rich and production-like; large existing system could not be safely rewritten. | Kept working system and security behavior; limited changes to metadata, accessibility and portable demo chrome. |
| 07 | Strong engineering identity; complex existing JS/security increased regression risk. | Preserved all working logic and Central Guard; only surgical presentation/metadata changes. |
| 08 | Editorial interior direction already strong; shared system needed consistency and portable metadata. | Preserved material-led composition; tightened technical/a11y/SEO release quality. |
| 09 | Professional green identity; risk of generic consulting language/cards if over-refactored. | Preserved advisory system; improved technical quality without replacing it with a generic SaaS layout. |
| 10 | Distinct automotive design; core CSS/JS still external contrary to new master rule. | Embedded core CSS/JS at the same execution position; retained hard-edge KYNTRA character. |
| 11 | Strong fashion poster system; mobile overflow existed at narrow width. | Embedded core assets; corrected mobile overflow; retained sharp fashion asymmetry. |
| 12 | Editorial newspaper logic strong; duplicate/technical issues in search/metadata existed. | Embedded core assets; fixed duplicate ID and metadata uniqueness while preserving newsroom density. |
| 13 | High-energy festival identity; core assets external. | Embedded core assets and retained neon/poster motion with reduced-motion fallback. |
| 14 | Evidence-led foundation direction strong; 320px metric overflow found. | Embedded core assets; fixed 320px grid overflow and preserved field-report character. |
| 15 | Civic system clear; shared polish introduced generic hover/lift behavior; 320px wrap overflow existed. | Removed generic cross-family lift, added civic-specific interaction, fixed 320px wrap, preserved task-first public-service language. |
| 16 | Calm finance identity; shared polish risked making it resemble other new demos. | Added finance-specific tabular/quiet interaction treatment and unique metadata without changing core identity. |
| 17 | Operational freight visual language strong; generic shared polish reduced specificity. | Shifted polish toward hard-edge routing/status behavior; validated tracking/form/detail pages. |
| 18 | Museum identity intentionally quiet; generic elevation would weaken it. | Removed generic elevation bias and preserved curatorial stillness/whitespace. |
| 19 | Club platform energetic and data-rich; required consistent technical release pass. | Preserved matchday density; improved portable chrome, metadata and responsive behavior. |
| 20 | Aerospace console aesthetic already distinctive; needed family-specific interaction restraint. | Preserved telemetry system; aligned microinteraction with mission/status logic. |
| 21 | Booking utility clear; 1024px search fields overflowed. | Fixed field-grid breakpoint through 1100px and retained calm airline task flow. |
| 22 | Scientific editorial structure credible; generic polish could undermine research tone. | Used restrained scientific interaction and unique page metadata; preserved research-note rhythm. |
| 23 | Utility operations appropriately plain; needed clearer family-specific treatment. | Preserved service-status directness; removed unnecessary generic lift behavior. |
| 24 | Narrative game world had strong field-guide atmosphere; risk of generic card animation. | Kept lore/editorial world-building and restrained motion to narrative cues. |
| 25 | Curated streaming already content-led; shared card lift risked template feel. | Kept imagery/content as primary hierarchy and removed universal card-motion dependency. |
| 26 | Talent marketplace useful but shared polish could feel SaaS-generic. | Kept human workboard language; tailored interactions to role/employer tasks. |
| 27 | Property search strong; generic polish risked obscuring map/address utility. | Kept address/search hierarchy; tailored microinteractions to property decision tasks. |

## Cross-project source changes

- All **783 HTML files** were audited and modified only where required by the new full-HTML/metadata/accessibility rules.
- **12 formerly shared core CSS/JS files** were removed after their contents were embedded into the relevant HTML pages: the shared demo chrome/polish and DEMO 10–14 core CSS/JS.
- DEMO 15–27 shared polish was replaced with family-specific restraint rather than a universal card-lift system.
- DEMO 11 mobile overflow, DEMO 14 320px overflow, DEMO 15 320px wrap overflow, and DEMO 21 1024px booking-grid overflow were fixed surgically.
- Duplicate page titles and duplicate mass meta descriptions were made unique.
- No new ENV, database table, build system or framework was introduced.
- Central Security Boundary remained byte-identical to the latest base.
