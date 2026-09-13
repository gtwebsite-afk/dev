# Combined package

The root `index.html` is the new Curated Design Index. It links to five new universes and the preserved existing collection. Existing families are namespaced under `legacy-*` folders; each family has its own `index.html` and relative assets.

Transport checks: every top-level project folder contains fewer than 100 files recursively and is below 24.5 MB uncompressed. No `node_modules`, `.git`, cache, or duplicate backup files are included.

The preserved legacy folders intentionally retain their original source identifiers because this package explicitly combines the supplied existing ZIP. The five new production folders remain free of those identifiers.
