# KILATARA Festival QA Notes

- **Pages:** 24 standalone HTML documents; all primary navigation and footer URLs resolve locally.
- **Static link/asset check:** Executed with Python over every `href`/`src`; result `missing=[]`.
- **Forbidden source scan:** Production HTML/CSS/JS contain zero matches for listed legacy names, classes, identifiers, and legacy palette values.
- **Interactive JavaScript:** mobile menu, schedule day/stage controls, schedule favorites (localStorage key `kilatara_fest_favorites`), lineup filters, and demo contact form are wired in `festival.js`.
- **Accessibility basics:** skip link, semantic landmarks, labelled controls, visible focus outlines, descriptive image alt text, reduced motion media query, table headers.
- **Responsive:** grid transitions at 900px and 520px; mobile navigation changes to a menu button; no fixed-width elements in source layout.
- **Limitations:** visual browser rendering and device matrix were not available in this subtask; report as statically verified by parent QA.
