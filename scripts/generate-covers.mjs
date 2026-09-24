import puppeteer from 'puppeteer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '../src/data/projectsData.ts');
const PDF_DIR = path.join(__dirname, '../public/PDF');
const COVERS_DIR = path.join(__dirname, '../public/images/portfolio/covers');

async function generateCovers() {
  try {
    await fs.ensureDir(COVERS_DIR);

    let content = await fs.readFile(DATA_FILE, 'utf8');

    // Regex to find project definitions
    const projectRegex = /const\s+(\w+)\s*:\s*Project\s*=\s*\{([\s\S]*?)\};/g;
    let match;
    const projects = [];

    while ((match = projectRegex.exec(content)) !== null) {
      const variableName = match[1];
      const body = match[2];
      
      const idMatch = body.match(/id:\s*["']([^"']+)["']/);
      const pdfUrlMatch = body.match(/pdfUrl:\s*["']([^"']+)["']/);
      const pdfUrlsMatch = body.match(/pdfUrls:\s*\[([\s\S]*?)\]/);

      let pdfPath = null;
      if (pdfUrlMatch) {
        pdfPath = pdfUrlMatch[1];
      } else if (pdfUrlsMatch) {
        const firstPdf = pdfUrlsMatch[1].match(/["']([^"']+)["']/);
        if (firstPdf) pdfPath = firstPdf[1];
      }

      if (idMatch && pdfPath) {
        projects.push({
          id: idMatch[1],
          pdfPath: pdfPath,
          variableName: variableName
        });
      }
    }

    console.log(`Found ${projects.length} projects with PDFs to process.`);

    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    for (const project of projects) {
      console.log(`Processing ${project.id}...`);
      
      const fullPdfPath = path.join(__dirname, '..', project.pdfPath);
      if (!(await fs.pathExists(fullPdfPath))) {
        console.error(`❌ PDF not found for ${project.id}: ${fullPdfPath}`);
        continue;
      }

      const coverPath = path.join(COVERS_DIR, `${project.id}.jpg`);
      const webPath = `/images/portfolio/covers/${project.id}.jpg`;

      try {
        // We use a data URL to load a simple HTML page that renders the PDF using PDF.js
        // This avoids the browser's native PDF viewer UI.
        const htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.6.82/pdf.mjs" type="module"></script>
            <style>
              body { margin: 0; padding: 0; background: white; overflow: hidden; }
              canvas { display: block; }
            </style>
          </head>
          <body>
            <canvas id="pdf-canvas"></canvas>
            <script type="module">
              import * as pdfjsLib from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.6.82/pdf.mjs';
              pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.6.82/pdf.worker.mjs';

              async function render() {
                const url = "${`file://${fullPdfPath}`}";
                const loadingTask = pdfjsLib.getDocument(url);
                const pdf = await loadingTask.promise;
                const page = await pdf.getPage(1);
                
                const scale = 2;
                const viewport = page.getViewport({ scale });
                const canvas = document.getElementById('pdf-canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({
                  canvasContext: context,
                  viewport: viewport
                }).promise;
                
                window.renderComplete = true;
              }
              render();
            </script>
          </body>
          </html>
        `;

        await page.setContent(htmlContent);
        
        // Wait for the rendering to complete
        await page.waitForFunction('window.renderComplete === true', { timeout: 30000 });
        
        // Take a screenshot of the canvas
        const canvas = await page.$('#pdf-canvas');
        await canvas.screenshot({ path: coverPath, type: 'jpeg', quality: 80 });
        
        console.log(`✅ Generated cover for ${project.id}`);

        // Update the content of the file
        // We use a more robust regex to replace thumbUrl within the specific project block
        const projectBlockRegex = new RegExp(`(const\\s+${project.variableName}\\s*:\\s*Project\\s*=\\s*\\{)[\\s\S]*?thumbUrl:\\s*["'][^"']*["']([\\s\S]*?)\}`, 'g');
        content = content.replace(projectBlockRegex, `$1\n  thumbUrl: "${webPath}"$2`);

      } catch (err) {
        console.error(`❌ Error processing ${project.id}:`, err);
      }
    }

    await browser.close();

    await fs.writeFile(DATA_FILE, content, 'utf8');
    console.log('\n✨ All covers generated and projectsData.ts updated successfully!');

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

generateCovers();