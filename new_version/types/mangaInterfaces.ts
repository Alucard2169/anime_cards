export interface MangaProps {
  mal_id: number;
  url: string;
  images: ImageProps;
  approved: boolean;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  titles: TitlesProps[];
  authors: AuthorProps[];
  status: string;
  chapters: number;
  volumes: string;
  rank: number;
  score: string;
  scored_by: number;
  synopsis: string;
  background: string;
  genres: geners[];
}

export interface MangaRelationProps {
  relation: string;
  entry: RelationEntryProps[];
}

interface RelationEntryProps {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}


interface AuthorProps {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

 
interface TitlesProps {
  title: string;
}


   
      
  interface geners {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

   
   
export interface ImageProps {
  webp: WebProps;
}

export interface WebProps {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

