import { AnimeDetailsProps } from "@/types/animeIntefaces";
import { FC } from "react";

import AnimeCard from "./AnimeCards";

interface AnimeCardContainerProps {
    animeResult: AnimeDetailsProps[];
}

const AnimeCardContainer: FC<AnimeCardContainerProps> = ({ animeResult }) => {

  return (
    <>
      {
        animeResult.length > 0 ?    <div className="grid grid-cols-2   sm:grid-cols-4 gap-x-8 gap-y-16 ">
        {animeResult.map((anime) => (
          <AnimeCard data={anime} key={anime.mal_id} />
        ))}
        </div> :
          <p className="text-purple-500 font-bold text-xl">No Anime Found</p>
   }
    </>
  );
};
 
export default AnimeCardContainer;