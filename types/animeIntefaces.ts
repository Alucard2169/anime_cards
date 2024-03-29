import { MangaRelationProps } from "./mangaInterfaces";

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
  trailer: TrailerProps;
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
  theme: ThemeProps;
  year: null | number;
  streaming: StreamingProps[];
  relations: MangaRelationProps[];  
}

export interface StreamingProps {
  name: string;
  url: string;
}

interface DemographicsProps {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface GenersProps {
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


export interface StudioProps {
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

export interface TitlesProps {
  type: string;
  title: string;
}


export interface ThemeProps{
  openings: string[];
  endings: string[];
}