export interface MangaProps {
  mal_id: number;
  url: string;
  images: ImageProps;
  approved: boolean;
  title: string;
  title_english: string;
  title_japanese: string;
     title_synonyms:string[],
  type: string;
  titles: string[];
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

