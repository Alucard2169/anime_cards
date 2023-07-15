export interface CharacterProps {
  mal_id: number;
  url: string;
  images: ImageProps;
  name: string;
  name_kanji: string;
  favorites: string;
}



export interface ImageProps {
  webp: WebProps;
}

export interface WebProps {
  image_url: string;
  small_image_url: string;
}


export interface SeriesCharacterProps {
  characters: CharacterProps;
  role: string;
  favorite: number;
}


