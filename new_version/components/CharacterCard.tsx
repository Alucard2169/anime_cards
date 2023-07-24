import { CharacterProps } from "@/types/characterInterfaces";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiFillHeart } from "react-icons/ai";

interface CharacterCardProps {
  data: CharacterProps;
}   

const CharacterCard: FC<CharacterCardProps> = ({ data }) => {
  const addCommasToNumber = (number: number): string => {
    return number.toLocaleString();
  };
  const { mal_id,images, name, name_kanji, favorites } =
    data;
  const { webp } = images;
  const { image_url } = webp;
  return (
    <Link href={`/characters/${mal_id}`}>
      <div
        className="flex h-full flex-col justify-between gap-2  p-2 rounded-md hover:bg-PRIMARY_TWO transition-all duratoin-100 ease-in"
        title={name || name_kanji}
      >
        <div className="w-28 h-4/6 sm:w-44 sm:h-4/5 rounded-md overflow-hidden">
          <Image
            src={image_url}
            alt={name || name_kanji}
            width="200"
            height="200"
            className="w-full h-full"
          />
        </div>
        <div className="mb-auto flex flex-col justify-between h-1/5 gap-2">
          <h3 className="text-center text-xs sm:text-sm text-white font-semibold">
            {name || name_kanji}
          </h3>
          <aside className="flex justify-center px-2">
            <span className="flex gap-2 items-center text-md bg-PRIMARY p-1 rounded-md text-MAIN font-bold">
              <AiFillHeart className="text-lg text-MAIN p-1 sm:text-2xl rounded-md" />
              {addCommasToNumber(favorites)}
            </span>
          </aside>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
