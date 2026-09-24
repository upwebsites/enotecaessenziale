import sharp from 'sharp';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '../src/data/projectsData.ts');
const PUBLIC_DIR = path.join(__dirname, '../public');
const LOWRES_DIR = path.join(PUBLIC_DIR, 'scorrimento_immagini_lowres');

async function generateLowRes() {
  try {
    await fs.ensureDir(LOWRES_DIR);
    let content = await fs.readFile(DATA_FILE, 'utf8');

    // Regex to find project definitions
    const projectRegex = /const\s+(\w+)\s*:\s*Project\s*=\s*\{([\s\S]*?)\};/g;
    let match;
    const projects = [];

    while ((match = projectRegex.exec(content)) !== null) {
      const variableName = match[1];
      const body = match[2];
      
      const idMatch = body.match(/id:\s*["']([^"']+)["']/);
      const imageUrlsMatch = body.match(/imageUrls:\s*\[([\s\S]*?)\]/);

      if (idMatch && imageUrlsMatch) {
        const imageUrls = imageUrlsMatch[1]
          .split(',')
          .map(url => url.trim().replace(/["']/g, ''))
          .filter(url => url);

        projects.push({
          id: idMatch[1],
          variableName: variableName,
          imageUrls: imageUrls
        });
      }
    }

    console.log(`Found ${projects.length} projects to process.`);

    for (const project of projects) {
      console.log(`Processing ${project.id}...`);
      const lowResUrls = [];

      for (const imgUrl of project.imageUrls) {
        const fullPath = path.join(PUBLIC_DIR, imgUrl);
        
        if (!(await fs.pathExists(fullPath))) {
          console.error(`❌ Image not found: ${fullPath}`);
          lowResUrls.push(imgUrl); // Fallback to original
          continue;
        }

        const fileName = path.basename(fullPath);
        const lowResFileName = fileName.replace(/\.[^.]+$/, '.jpg');
        const lowResPath = path.join(LOWRES_DIR, lowResFileName);
        const lowResWebPath = `/scorrimento_immagini_lowres/${lowResFileName}`;

        try {
          await sharp(fullPath)
            .resize(400) // Resize to 400px width
            .jpeg({ quality: 60 }) // Compress
            .toFile(lowResPath);
          
          lowResUrls.push(lowResWebPath);
        } catch (err) {
          console.error(`❌ Error processing ${fileName}:`, err);
          lowResUrls.push(imgUrl); // Fallback
        }
      }

      // Update the content of the file
      // Find the imageUrls block and insert lowResImageUrls after it
      const projectBlockRegex = new RegExp(`(const\\s+${project.variableName}\\s*:\\s*Project\\s*=\\s*\\{)[\\s\S]*?imageUrls:\\s*\\[[\\s\S]*?\\]([\\s\S]*?)\}`, 'g');
      
      const lowResUrlsString = `\n  lowResImageUrls: [\n    ${lowResUrls.map(url => `"${url}"`).join(',\n    ')}\n  ]`;
      
      content = content.replace(projectBlockRegex, (match, prefix, suffix) => {
        // We need to find where imageUrls ends to insert after it
        const imageUrlsEndIndex = match.indexOf(']', match.indexOf('imageUrls:'));
        const before = match.substring(0, imageUrlsEndIndex + 1);
        const after = match.substring(imageUrlsEndIndex + 1);
        return `${before}${lowResUrlsString}${after}`;
      });
    }

    await fs.writeFile(DATA_FILE, content, 'utf8');
    console.log('\n✨ All low-res images generated and projectsData.ts updated successfully!');

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

generateLowRes();
</write_to_file>
<task_progress>
- [x] Check dependencies for image processing
- [x] Create script to generate low-res images
- [ ] Update `Project` interface in `projectsData.ts`
- [ ] Update `projectsData.ts` with `lowResImageUrls`
- [ ] Update `ProjectCard.tsx` to use `lowResImageUrls` on hover
- [ ] Verify the implementation
</task_progress>