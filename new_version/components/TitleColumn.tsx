import { TitlesProps } from "@/types/animeIntefaces";
import { FC } from "react";

interface TitleColumnProps {
  titleData: TitlesProps[];
  title: string;
  title_japanese: string;
}

const TitleColumn: FC<TitleColumnProps> = ({ titleData,title,title_japanese }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-TEXT_PRIMARY text-3xl font-bold">{title}</h2>
        <h2 className="text-TEXT_NEUTRAL text-xl font-semibold">
          {title_japanese}
        </h2>
      </div>
      {titleData && (
        <div className="flex flex-col gap-2 mt-10 sm:mt-auto">
          <h4 className="text-white text-md">Synonyms</h4>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
            {titleData.map((title, i) => (
              <li
                key={i}
                className=" text-purple-600 text-sm font-semibold"
              >
                {title.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TitleColumn;
