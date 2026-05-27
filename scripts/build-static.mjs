import { copyFile, mkdir, rm, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { basename, join } from 'node:path';

const root = new URL('..', import.meta.url);
const dist = new URL('../dist/', import.meta.url);
const distPath = fileURLToPath(dist);
const files = ['index.html', 'styles.css', 'intro.webp', '_headers'];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of files) {
  const source = new URL(file, root);
  try {
    await stat(source);
  } catch {
    continue;
  }
  await copyFile(source, join(distPath, basename(file)));
}

console.log('Built static site to dist/');
