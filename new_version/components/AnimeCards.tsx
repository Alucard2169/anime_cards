import { AnimeDetailsProps } from "@/types/animeIntefaces";
import Image from "next/image";
import Link from 'next/link';
import { FC } from 'react';
import { GiRank1 } from "react-icons/gi";

interface AnimeCardProps {
  data: AnimeDetailsProps;
}

const AnimeCard: FC<AnimeCardProps> = ({ data }) => {
    const { mal_id, images, title, title_english, title_japanese, type, episodes, rank, rating } = data;
    const { webp } = images;
    const {image_url } = webp;
  return (
    <Link href={`/anime/${mal_id}`}>
      <div
        className="relative flex h-full flex-col justify-between gap-2  p-2 rounded-md hover:bg-PRIMARY_TWO transition-all duration-100 ease-in"
        title={title || title_english || title_japanese}
      >
        <div className=" w-28 h-4/6 sm:w-56 sm:h-full rounded-md overflow-hidden">
          <Image
            src={image_url}
            alt={title || title_english || title_japanese}
            width="200"
            height="200"
            className="w-full h-full"
          />
        </div>
        <div className="sm:absolute sm:bottom-2 sm:w-56 sm:left-0 sm:right-0 sm:m-auto mb-auto flex flex-col justify-between h-1/5 gap-4 bg-MAIN bg-opacity-80 backdrop-blur-sm">
          <h3 className="text-center text-xs sm:text-sm text-white font-semibold">
            {(title && title.slice(0, 50)) ||
              (title_english && title_english.slice(0, 50)) ||
              title_japanese}
          </h3>
          <aside className=" flex justify-between px-2">
            <span className="text-xs sm:text-sm text-PRIMARY rounded-md font-semibold">
              {type}
            </span>
            <span className="text-xs sm:text-sm text-PRIMARY rounded-md font-semibold">
              {episodes || "??"}
            </span>
            <span className="text-xs sm:text-sm text-PRIMARY rounded-md font-semibold flex gap-1 items-center">
              <GiRank1 className=" text-sm sm:text-lg" />#{rank}
            </span>
          </aside>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
