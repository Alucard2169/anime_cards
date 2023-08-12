import { AnimeDetailsProps } from "@/types/animeIntefaces";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface AnimeCardProps {
  data: AnimeDetailsProps;
}

const AnimeCard: FC<AnimeCardProps> = ({ data }) => {
  const {
    mal_id,
    images,
    title,
    title_english,
    title_japanese,
    episodes,
    type
  
  } = data;
  const { webp } = images;
  const { large_image_url } = webp;



  return (
    <Link href={`/anime/${mal_id}`}>
      <div className="relative flex flex-col gap-2 items-start w-full h-full">
        <div className="w-full h-4/5">
          <Image
            src={large_image_url}
            width={350}
            height={400}
            alt={title || title_english}
            className="w-full max-h-full"
          />
        </div>
        <div className="h-1/5 px-2 flex flex-col w-full">
          <h2 className="text-purple-600  text-sm">
            {title || title_english || title_japanese}
          </h2>
          <div className="mt-auto flex items-center justify-between w-full">
            <p className="text-white text-xs">
              Ep: <span>{episodes || "__"}</span>
            </p>
            <span className="text-xs outline outline-1 outline-purple-600 p-1 text-white rounded-md font-semibold">
              {type}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
