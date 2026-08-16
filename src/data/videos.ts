export interface Video {
  id: string;
  title: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  category: string;
  description: string;
  duration: string;
  publishedLabel: string;
  featured: boolean;
}

export const channelId = 'UCg0WNfzVoBBLV5c6Rv3BJeA';

export const channelUrl = 'https://www.youtube.com/@saveroomorg';

export const videos: Video[] = [
  {
    id: 'BDY1_5OIbuY',
    title: 'Star Wars: Knights of the Old Republic',
    youtubeUrl: 'https://www.youtube.com/shorts/BDY1_5OIbuY',
    thumbnailUrl: 'https://i3.ytimg.com/vi/BDY1_5OIbuY/hqdefault.jpg',
    category: 'Classic RPGs',
    description: 'A quick jump back into KOTOR: Jedi, Sith, big choices, and peak Old Republic nostalgia.',
    duration: 'Short',
    publishedLabel: 'Feb 2025',
    featured: true,
  },
  {
    id: 'aQ59I9gCUp4',
    title: 'Heroes of Might and Magic: Rise, Fall, and Future',
    youtubeUrl: 'https://www.youtube.com/watch?v=aQ59I9gCUp4',
    thumbnailUrl: 'https://i2.ytimg.com/vi/aQ59I9gCUp4/hqdefault.jpg',
    category: 'Classic RPGs',
    description: 'A long-form look at the strategy series, fan mods, Ubisoft years, and why Heroes III still matters.',
    duration: 'Deep dive',
    publishedLabel: 'Sep 2024',
    featured: true,
  },
  {
    id: 'Qn41pK2zgOM',
    title: 'Ultimate PSP Corner',
    youtubeUrl: 'https://www.youtube.com/shorts/Qn41pK2zgOM',
    thumbnailUrl: 'https://i2.ytimg.com/vi/Qn41pK2zgOM/hqdefault.jpg',
    category: 'Retro Hardware',
    description: 'A handheld shelf moment for PSP fans, game-room people, and anyone who misses pocket-sized libraries.',
    duration: 'Short',
    publishedLabel: 'Sep 2024',
    featured: false,
  },
  {
    id: 'FboMv14C3oA',
    title: 'Morrowind on a Toshiba Satellite',
    youtubeUrl: 'https://www.youtube.com/shorts/FboMv14C3oA',
    thumbnailUrl: 'https://i3.ytimg.com/vi/FboMv14C3oA/hqdefault.jpg',
    category: 'Retro Hardware',
    description: 'Old laptop, old scrolls, proper early-2000s PC energy.',
    duration: 'Short',
    publishedLabel: 'Sep 2024',
    featured: false,
  },
  {
    id: 'XzMTceWK8CA',
    title: 'Age of Empires Hours Check',
    youtubeUrl: 'https://www.youtube.com/shorts/XzMTceWK8CA',
    thumbnailUrl: 'https://i1.ytimg.com/vi/XzMTceWK8CA/hqdefault.jpg',
    category: 'Strategy Classics',
    description: 'A tiny tribute to the strategy game that quietly swallowed whole afternoons.',
    duration: 'Short',
    publishedLabel: 'Sep 2024',
    featured: false,
  },
  {
    id: 'LZA-h9yUV50',
    title: 'Undervolt Tutorial for Intel 13th and 14th Gen',
    youtubeUrl: 'https://www.youtube.com/watch?v=LZA-h9yUV50',
    thumbnailUrl: 'https://i1.ytimg.com/vi/LZA-h9yUV50/hqdefault.jpg',
    category: 'Workbench',
    description: 'BIOS settings, microcode updates, and lower-voltage tuning for hotter modern gaming rigs.',
    duration: 'Guide',
    publishedLabel: 'Sep 2024',
    featured: true,
  },
  {
    id: 'juIYO8JM_nU',
    title: 'Fix Intel CPU Voltage Issues',
    youtubeUrl: 'https://www.youtube.com/watch?v=juIYO8JM_nU',
    thumbnailUrl: 'https://i3.ytimg.com/vi/juIYO8JM_nU/hqdefault.jpg',
    category: 'Workbench',
    description: 'A practical pass through microcode 0x12B, safe BIOS settings, and CPU stability.',
    duration: 'Guide',
    publishedLabel: 'Dec 2024',
    featured: false,
  },
  {
    id: 'rGMCZWNrrjg',
    title: 'Intel CPU Bending Fix: LGA 1700',
    youtubeUrl: 'https://www.youtube.com/watch?v=rGMCZWNrrjg',
    thumbnailUrl: 'https://i3.ytimg.com/vi/rGMCZWNrrjg/hqdefault.jpg',
    category: 'Workbench',
    description: 'A hands-on look at the Thermalright contact frame and what a year of LGA 1700 use revealed.',
    duration: 'Guide',
    publishedLabel: 'Oct 2024',
    featured: false,
  },
];
