import { FC } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CharacterProps } from "@/types/characterInterfaces";
import Image from "next/image";

interface CharacterCardProps {
  data: CharacterProps;
}   

const CharacterCard: FC<CharacterCardProps> = ({ data }) => {
  const { images, name, name_kanji, favorites } =
    data;
  const { webp } = images;
  const { image_url } = webp;
  return (
    <div
      className="flex flex-col justify-between gap-2  p-2 bg-CARD rounded-md"
      title={name || name_kanji}
    >
      <div className="w-44 h-4/5 rounded-md overflow-hidden">
        <Image
          src={image_url}
          alt={name || name_kanji}
          width="200"
          height="200"
          className="w-full h-full"
        />
      </div>
      <div className="mb-auto flex flex-col justify-between h-1/5 gap-2">
        <h3 className="text-center text-sm text-white font-semibold">
          {name || name_kanji}
        </h3>
        <aside className="flex justify-center px-2">
          <span className="flex gap-2 items-center text-md bg-PRIMARY p-1 rounded-md text-MAIN font-bold"><AiFillHeart className="bg-CARD text-PRIMARY p-1 text-2xl rounded-md"/>{favorites}</span>
        </aside>
      </div>
    </div>
  );
};

export default CharacterCard;
