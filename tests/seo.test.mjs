import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const readBuilt = (path) => readFileSync(new URL('../dist/' + path, import.meta.url), 'utf8');
const escapeRegExp = (value) => value.replace(/[.*+?^$()|[\]\\]/g, '\\$&');

const publicPages = [
  ['index.html', 'https://saveroom.org/'],
  ['watch/index.html', 'https://saveroom.org/watch'],
  ['collections/index.html', 'https://saveroom.org/collections'],
  ['collections/classic-rpgs/index.html', 'https://saveroom.org/collections/classic-rpgs'],
  ['collections/retro-hardware/index.html', 'https://saveroom.org/collections/retro-hardware'],
  ['collections/workbench/index.html', 'https://saveroom.org/collections/workbench'],
  ['about/index.html', 'https://saveroom.org/about'],
  ['contact/index.html', 'https://saveroom.org/contact'],
];

const readJsonLd = (html) => {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, 'expected JSON-LD script');
  return JSON.parse(match[1]);
};

test('public pages publish complete canonical and social metadata', () => {
  for (const [path, canonical] of publicPages) {
    const html = readBuilt(path);
    const canonicalPattern = escapeRegExp(canonical);

    assert.match(html, new RegExp('<link rel="canonical" href="' + canonicalPattern), path);
    assert.match(html, new RegExp('<meta property="og:url" content="' + canonicalPattern), path);
    assert.match(html, /<meta property="og:site_name" content="Save Room"/, path);
    assert.match(html, /<meta property="og:image" content="https:\/\/saveroom\.org\/og-default\.svg"/, path);
    assert.match(html, /<meta property="og:image:width" content="1200"/, path);
    assert.match(html, /<meta property="og:image:height" content="630"/, path);
    assert.match(html, /<meta name="twitter:image" content="https:\/\/saveroom\.org\/og-default\.svg"/, path);
    assert.match(html, /<meta name="robots" content="index, follow"/, path);

    const types = readJsonLd(html)['@graph'].map((item) => item['@type']);
    assert.deepEqual(types.slice(0, 2), ['WebSite', 'Organization'], path);
  }
});

test('collection pages publish breadcrumb structured data', () => {
  const data = readJsonLd(readBuilt('collections/classic-rpgs/index.html'));
  const breadcrumbs = data['@graph'].find((item) => item['@type'] === 'BreadcrumbList');

  assert.ok(breadcrumbs);
  assert.deepEqual(breadcrumbs.itemListElement.map((item) => item.name), ['Home', 'Collections', 'Classic RPGs']);
  assert.equal(breadcrumbs.itemListElement.at(-1).item, 'https://saveroom.org/collections/classic-rpgs');
});

test('the 404 page is excluded from indexing', () => {
  const html = readBuilt('404.html');

  assert.match(html, /<meta name="robots" content="noindex, follow"/);
  assert.doesNotMatch(html, /<link rel="canonical"/);
});

test('built sitemap and robots files use the production domain', () => {
  const sitemapIndex = readBuilt('sitemap-index.xml');
  const sitemap = readBuilt('sitemap-0.xml');
  const robots = readBuilt('robots.txt');

  assert.match(robots, /Sitemap: https:\/\/saveroom\.org\/sitemap-index\.xml/);
  assert.match(sitemapIndex, /<loc>https:\/\/saveroom\.org\/sitemap-0\.xml<\/loc>/);
  for (const [, canonical] of publicPages) {
    const sitemapUrl = canonical === 'https://saveroom.org/' ? 'https://saveroom.org' : canonical;
    assert.match(sitemap, new RegExp('<loc>' + escapeRegExp(sitemapUrl) + '<\/loc>'), canonical);
  }
  assert.equal((sitemap.match(/<url>/g) ?? []).length, publicPages.length);
  assert.doesNotMatch(sitemap, /404/);
  assert.doesNotMatch(sitemap, /saveroomorg\.com/);
});

test('video thumbnails have descriptive alternative text', () => {
  const html = readBuilt('watch/index.html');

  assert.match(html, /<img[^>]+alt="Star Wars: Knights of the Old Republic"/);
});

test('social preview artwork matches the current channel positioning', () => {
  const image = readBuilt('og-default.svg');

  assert.match(image, /width="1200" height="630"/);
  assert.match(image, /RETRO/);
  assert.match(image, /GAMING/);
  assert.doesNotMatch(image, /More room for the good stuff/);
});
