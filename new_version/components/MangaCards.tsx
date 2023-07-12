import { FC } from "react";
import { GiRank1 } from "react-icons/gi";
import { MangaProps } from "@/types/mangaInterfaces";
import Image from "next/image";

interface MangaCardProps {
  data: MangaProps;
}

const MangaCard: FC<MangaCardProps> = ({ data }) => {
  const {
      images,
      title,
    title_english,
    title_japanese,
    chapters,
    rank,
    volumes,
  } = data;
  const { webp } = images;
  const { image_url } = webp;
  return (
    <div
      className="flex flex-col justify-between gap-2  p-2 bg-CARD rounded-md"
      title={title || title_english || title_japanese}
    >
      <div className="w-44 h-4/5 rounded-md overflow-hidden">
        <Image
          src={image_url}
          alt={title || title_english || title_japanese}
          width="200"
          height="200"
          className="w-full h-full"
        />
      </div>
      <div className="mb-auto flex flex-col justify-between h-1/5 gap-1">
        <h3 className="text-center text-sm text-white font-semibold">
          {(title && title.slice(0,30)) ||
            (title_english && title_english.slice(0, 30)) ||
            title_japanese}
        </h3>
        <aside className="flex justify-between px-2">
          <span className="text-sm text-PRIMARY rounded-md font-semibold">
            vols. {volumes || "??"}
          </span>
          <span className="text-sm text-PRIMARY rounded-md font-semibold">
            ch. {chapters || "??"}
          </span>
          <span className="text-sm text-PRIMARY rounded-md font-semibold flex gap-1 items-center">
            <GiRank1 className="text-lg" />#{rank}
          </span>
        </aside>
      </div>
    </div>
  );
};

export default MangaCard;
