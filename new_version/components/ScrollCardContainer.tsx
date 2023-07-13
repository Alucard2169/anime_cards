import React, { useRef } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { AnimeProps } from "@/types/animeIntefaces";
import { MangaProps } from "@/types/mangaInterfaces";
import { CharacterProps } from "@/types/characterInterfaces";
import AnimeCard from "./AnimeCards";
import MangaCard from "./MangaCards";
import CharacterCard from "./CharacterCard";

interface MediaCardsContainerProps {
  data: (AnimeProps | MangaProps | CharacterProps)[];
  type: string;
}

const MediaCardsContainer: React.FC<MediaCardsContainerProps> = ({
  data,
  type,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleLeftScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 400;
    }
  };

  const handleRightScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 400;
    }
  };


  return (
    <div className="overflow-hidden flex items-center">
      <AiFillCaretLeft
        onClick={handleLeftScroll}
        className="ml-8 text-white text-3xl hover:text-PRIMARY cursor-pointer transition-all duration-200 ease"
      />
      <div
        ref={scrollRef}
        className="flex gap-12 h-full overflow-x-scroll w-10/12 m-auto scroll-smooth scrollbar-thin scrollbar-thumb-PRIMARY scrollbar-track-MAIN"
      >
        {type === "anime" &&
          data.map((media) => (
            <AnimeCard key={media.mal_id} data={media as AnimeProps} />
          ))}
        {type === "manga" &&
          data.map((media) => (
            <MangaCard key={media.mal_id} data={media as MangaProps} />
          ))}
        {type === "character" &&
          data.map((media) => (
            <CharacterCard key={media.mal_id} data={media as CharacterProps} />
          ))}
      </div>
      <AiFillCaretRight
        onClick={handleRightScroll}
        className="mr-8 text-white  text-3xl hover:text-PRIMARY cursor-pointer transition-all duration-200 ease"
      />
    </div>
  );
};

export default MediaCardsContainer;
