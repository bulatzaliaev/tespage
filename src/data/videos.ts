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

// The channel page is currently the only reliably indexable public source in this environment.
// Keep this list empty until individual video URLs/titles can be verified; the UI has a safe fallback.
export const videos: Video[] = [];

export const channelUrl = 'https://www.youtube.com/@saveroomorg';
