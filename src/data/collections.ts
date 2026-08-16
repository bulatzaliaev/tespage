export interface Collection { slug: string; title: string; eyebrow: string; description: string; accent: string; }

export const collections: Collection[] = [
  { slug: 'classic-rpgs', eyebrow: 'Memory card loaded', title: 'Classic RPGs', description: 'KOTOR, Morrowind, Heroes, and the long-form worlds that still live rent-free in our heads.', accent: 'magenta' },
  { slug: 'retro-hardware', eyebrow: 'Boot sequence', title: 'Retro Hardware', description: 'Old laptops, handheld corners, game-room shelves, and the machines that make nostalgia tactile.', accent: 'cyan' },
  { slug: 'workbench', eyebrow: 'Tune the rig', title: 'Workbench', description: 'BIOS tweaks, undervolting, thermals, and practical PC fixes for smoother modern play.', accent: 'yellow' },
];
