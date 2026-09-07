import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

// Smoke-test the generated files, not just Vite's exit code. This catches
// missing assets and incorrect /repo/ prefixes before publishing.
const base = process.argv[2] ?? '/';
assert(base.startsWith('/') && base.endsWith('/'), 'Expected an absolute base path ending in /');
const root = path.resolve('dist');
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const localAssets = [...html.matchAll(/(?:src|href)="([^\"]+)"/g)]
  .map((match) => match[1])
  .filter((url) => !/^(?:[a-z]+:|\/\/|#)/i.test(url));
assert(localAssets.some((url) => url.endsWith('.js')), 'Missing JavaScript entry');
assert(localAssets.some((url) => url.endsWith('.css')), 'Missing stylesheet');

for (const url of localAssets) {
  assert(url.startsWith(base), `Asset URL does not use ${base}: ${url}`);
  const filename = path.resolve(root, decodeURIComponent(url.slice(base.length).split(/[?#]/)[0]));
  assert(filename.startsWith(root + path.sep), `Invalid asset path: ${url}`);
  const info = await stat(filename);
  assert(info.isFile() && info.size > 0, `Missing or empty asset: ${url}`);
}

const photo = await readFile(path.join(root, 'images/weiyuan-li-graduation.webp'));
assert.equal(photo.toString('ascii', 0, 4), 'RIFF', 'Invalid graduation photo header');
assert.equal(photo.toString('ascii', 8, 12), 'WEBP', 'Graduation photo is not WebP');
assert(photo.length > 100, 'Graduation photo is empty');
const posters = await readFile('src/components/OtherSection.tsx', 'utf8');
for (const [, poster] of posters.matchAll(/poster:\s*"\/(posters\/[^\"]+)"/g)) {
  assert((await stat(path.join(root, poster))).size > 0, `Missing poster: ${poster}`);
}
assert.equal(await readFile(path.join(root, '404.html'), 'utf8'), html, '404 fallback differs from the app entry');
console.log(`Build verified for ${base}: entry points, photo, posters, and 404 fallback.`);
