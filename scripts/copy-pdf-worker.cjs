#!/usr/bin/env node
// Copies pdfjs worker from node_modules to public/pdf.worker.min.mjs
const fs = require('fs');
const path = require('path');

function resolveWorker() {
  // Prefer ESM worker .mjs path
  const candidates = [
    'pdfjs-dist/build/pdf.worker.min.mjs',
    'pdfjs-dist/build/pdf.worker.min.js',
  ];
  for (const rel of candidates) {
    const abs = path.join(process.cwd(), 'node_modules', rel);
    if (fs.existsSync(abs)) return abs;
  }
  return null;
}

function main() {
  const src = resolveWorker();
  if (!src) {
    console.warn('[copy-pdf-worker] pdf.worker not found in node_modules. Skipping.');
    process.exit(0);
  }

  const destDir = path.join(process.cwd(), 'public');
  const destMjs = path.join(destDir, 'pdf.worker.min.mjs');
  const destJs = path.join(destDir, 'pdf.worker.min.js');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, destMjs);
  fs.copyFileSync(src, destJs);
  console.log(`[copy-pdf-worker] Copiato: ${path.relative(process.cwd(), src)} -> ${path.relative(process.cwd(), destMjs)} e .js`);
}

main();


