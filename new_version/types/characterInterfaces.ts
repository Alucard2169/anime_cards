
import { AnimeDetailsProps } from "./animeIntefaces";
import { MangaProps } from "./mangaInterfaces";

export interface CharacterProps {
  mal_id: number;
  url: string;
  images: ImageProps;
  name: string;
  name_kanji: string;
  nicknames: string[];
  anime: CharacterAnimeProps[];
  manga: CharacterMangaProps[];
  favorites: number;
  about: string;
}

export interface CharacterAnimeProps {
  role: string;
  anime: AnimeDetailsProps;
}

interface CharacterMangaProps {
  role: string;
  manga: MangaProps;
}



export interface ImageProps {
  webp: WebProps;
}

export interface WebProps {
  image_url: string;
  small_image_url: string;
}


export interface SeriesCharacterProps {
  character: CharacterProps;
  role: string;
  favorite: number;
}


