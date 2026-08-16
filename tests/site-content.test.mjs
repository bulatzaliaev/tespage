import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('site content is aligned with the current Save Room retro gaming channel', () => {
  const videos = read('src/data/videos.ts');
  const collections = read('src/data/collections.ts');
  const home = read('src/pages/index.astro');
  const css = read('src/styles/global.css');

  assert.match(videos, /UCg0WNfzVoBBLV5c6Rv3BJeA/);
  assert.match(videos, /aQ59I9gCUp4/);
  assert.match(videos, /LZA-h9yUV50/);
  assert.match(collections, /Classic RPGs/);
  assert.match(home, /retro gaming/i);
  assert.match(css, /scanline/i);
  assert.doesNotMatch(`${home}\n${collections}`, /declutter|storage with intention|calmer rooms|home organization/i);
});
