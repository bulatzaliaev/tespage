export interface Collection { slug: string; title: string; eyebrow: string; description: string; accent: string; }

export const collections: Collection[] = [
  { slug: 'declutter', eyebrow: 'Start here', title: 'Less, but better', description: 'Gentle prompts for clearing the visual noise and keeping what earns its place.', accent: 'clay' },
  { slug: 'room-resets', eyebrow: 'A fresh page', title: 'Room resets', description: 'Simple rhythms that help a space feel good again — without making a whole day of it.', accent: 'sage' },
  { slug: 'storage', eyebrow: 'Make it work', title: 'Storage with intention', description: 'Practical ways to give everyday things a home that makes sense.', accent: 'butter' },
];
