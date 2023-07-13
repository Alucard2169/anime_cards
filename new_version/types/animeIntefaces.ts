export interface AnimeProps {
  mal_id: number;
  url: string;
  images: ImageProps;
  approved: boolean;
  title: string;
  title_english: string;
  title_japanese: string;
  type: string;
  episodes: number;
  rank: number;
  score: string;
  rating: string;
}
export interface ImageProps {
  webp: WebProps;
}

export interface WebProps {
  image_url: string;
  small_image_url: string;
}

