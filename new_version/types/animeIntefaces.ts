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
  large_image_url: string;
}


export interface AnimeDetailsProps {
  mal_id: number;
  url: string;
  images: ImageProps;
  trailer: TrailerProps[];
  titles: TitlesProps[];
  title: string;
  airing: boolean;
  approved: boolean;
  background: string;
  broadcast: null;
  demographics: DemographicsProps[];
  duration: string;
  episodes: number;
  explicit_genres: null;
  favorites: number;
  genres: GenersProps[];
  licensors: null;
  members: number;
  popularity: number;
  producers: ProducersProps[];
  rank: number;
  rating: string;
  score: number;
  scored_by: number;
  season: null | string;
  source: string;
  status: string;
  studios: StudioProps[];
  synopsis: string;
  themes: ThemesProps[];
  title_english: string;
  title_japanese: string;
  type: string;
  year: null | number;
}

interface DemographicsProps {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

interface GenersProps {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

interface ProducersProps {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}


interface StudioProps {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface ThemesProps {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

interface TrailerProps {
  youtube_id: string | null;
  url: string | null;
  embed_url: string | null;
}

interface TitlesProps {
  type: string;
  title: string;
}