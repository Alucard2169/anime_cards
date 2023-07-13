import { FC } from 'react';
import { GiRank1 } from "react-icons/gi";
import { AnimeProps } from "@/types/animeIntefaces";
import Image from "next/image";
import Link from 'next/link'

interface AnimeCardProps {
  data: AnimeProps;
}

const AnimeCard: FC<AnimeCardProps> = ({ data }) => {
    const { images, title_english, title_japanese, type, episodes, rank, rating } = data;
    const { webp } = images;
    const {image_url } = webp;
  return (
    <Link href="#">
      <div
        className="flex h-full flex-col justify-between gap-2  p-2 rounded-md hover:bg-PRIMARY_TWO transition-all duratoin-100 ease-in"
        title={title_english || title_japanese}
      >
        <div className="w-44 h-4/5 rounded-md overflow-hidden">
          <Image
            src={image_url}
            alt={title_english || title_japanese}
            width="200"
            height="200"
            className="w-full h-full"
          />
        </div>
        <div className="mb-auto flex flex-col justify-between h-1/5 gap-4">
          <h3 className="text-center text-sm text-white font-semibold">
            {(title_english && title_english.slice(0, 50)) || title_japanese}
          </h3>
          <aside className="flex justify-between px-2">
            <span className="text-sm text-PRIMARY rounded-md font-semibold">
              {type}
            </span>
            <span className="text-sm text-PRIMARY rounded-md font-semibold">
              {episodes || "??"}
            </span>
            <span className="text-sm text-PRIMARY rounded-md font-semibold flex gap-1 items-center">
              <GiRank1 className="text-lg" />#{rank}
            </span>
          </aside>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
