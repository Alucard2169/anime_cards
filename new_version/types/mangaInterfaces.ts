export interface MangaProps {
  mal_id: number;
  url: string;
  images: ImageProps;
  approved: boolean;
  title: string;
  title_english: string;
  title_japanese: string;
  type: string;
  chapters: number;
  volumes: string;
  rank: number;
  score: string;
}

export interface ImageProps {
  webp: WebProps;
}

export interface WebProps {
  image_url: string;
  small_image_url: string;
}

