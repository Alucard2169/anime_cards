import { GenersProps, StudioProps } from "@/types/animeIntefaces";
import { FC } from "react";

interface DetailColumnProps {
    details: DetailsProps
}

interface DetailsProps {
    type: string;
    status: string;
    episodes: number;
    duration: string;
    score: number;
    scored_by: number;
    season: string | null;
    rating: string;
    source: string;
    genres: GenersProps[];
    studios: StudioProps[];

}
const DetailColumn: FC<DetailColumnProps> = ({ details }) => {
    
     const addCommasToNumber = (number: number): string => {
       return number.toLocaleString("en-IN");
     };
    
    const {
        type,
        status,
        episodes,
        duration,
        score,
        scored_by,
        season,
        rating,
        source,
        genres,studios
    } = details;
    
    return (
      <div className="ml-auto flex flex-col justify-between">
        
        <ul className="h-fit grid grid-cols-2 gap-x-5 gap-y-1 sm:gap-x-10 sm:gap-y-2">

          <li className="text-TEXT_NEUTRAL p-1 font-bold rounded-md">
            Type :<span className="text-TEXT_PRIMARY ml-2  p-1 ">{type}</span>
          </li>
          <li className="text-TEXT_NEUTRAL p-1 font-bold rounded-md">
            Season:{" "}
            <span className="text-TEXT_PRIMARY ml-2  p-1 ">
              {season || "??"}
            </span>
          </li>
          <li className="text-TEXT_NEUTRAL p-1 font-bold rounded-md">
            Rating:{" "}
            <span className="text-TEXT_PRIMARY ml-2  p-1 ">{rating}</span>
          </li>
          <li className="text-TEXT_NEUTRAL p-1 font-bold rounded-md">
            Status:
            <span className="text-TEXT_PRIMARY ml-2  p-1 ">
              {status || "??"}
            </span>
          </li>
          <li className="text-TEXT_NEUTRAL p-1 font-bold rounded-md">
            Episodes:
            <span className="text-TEXT_PRIMARY ml-2  p-1 ">
              {episodes || "??"}{" "}
            </span>
          </li>
          <li className="text-TEXT_NEUTRAL p-1 font-bold rounded-md">
            Duration:
            <span className="text-TEXT_PRIMARY ml-2  p-1 ">
              {duration || "??"}
            </span>
          </li>
          <li className="text-TEXT_NEUTRAL p-1 font-bold rounded-md">
            Score:
            <span className="text-TEXT_PRIMARY ml-2  p-1 ">
              {score || "??"}
            </span>
          </li>
          <li className="text-TEXT_NEUTRAL p-1 font-bold rounded-md">
            Score By:
            <span className="text-TEXT_PRIMARY ml-2  p-1 ">
              {(scored_by && addCommasToNumber(scored_by)) || "??"} People
            </span>
          </li>
          <li className="text-TEXT_NEUTRAL p-1 font-bold rounded-md">
            Source:
            <span className="text-TEXT_PRIMARY ml-2  p-1 ">{source}</span>
          </li>
        </ul>

        <div className="h-fit mt-10 sm:mt-auto flex flex-col gap-5">
          <h3 className="text-xl font-semibold text-TEXT_NEUTRAL flex gap-2 items-center">
            Genres:
            <ul className="flex gap-3 items-center">
              {genres.map((genre) => (
                <li
                  key={genre.mal_id}
                  className="text-sm font-bold text-TEXT_NEUTRAL bg-TEXT_PRIMARY py-1 px-2 rounded-full"
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </h3>
          <hr />
          <h3 className="text-xl font-semibold text-TEXT_NEUTRAL flex gap-2 items-center">
            Studios:
            <ul className="flex gap-3 items-center">
              {studios.map((studio) => (
                <li
                  key={studio.mal_id}
                  className="text-sm font-bold text-TEXT_NEUTRAL bg-TEXT_PRIMARY py-1 px-2 rounded-full"
                >
                  {studio.name}
                </li>
              ))}
            </ul>
          </h3>
        </div>
      </div>
    );
}
 
export default DetailColumn;