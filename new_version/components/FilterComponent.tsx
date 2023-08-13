import { FC } from "react";
import ScoreFilter from "./ScoreFilter";
import StatusFilter from "./StatusFilter";
import TimeFilter from "./TimeFilter";
import TypeFilter from "./TypeFilter";

interface FilterComponentProps {
  genreState: boolean;
  getGenreState: (newState: boolean) => void;
}

const FilterComponent: FC<FilterComponentProps> = ({genreState, getGenreState }) => {
  
    const handleGenreButtonClick = () => {
      getGenreState(genreState ? false : true);
    };
  
  
    return (
      <div className="p-4  rounded-md bg-gray-900 w-full h-fit">
        <h3 className="text-xl text-white font-bold">Filter</h3>
        <section className="mt-4 flex flex-col gap-4">
          <button
            onClick={handleGenreButtonClick}
            className="w-fit text-purple-500 outline outline-2 outline-purple-900 p-1 rounded-md hover:bg-purple-900 hover:text-white transition-all duration-200 ease-linear"
          >
            Filter By Genre
          </button>
          <hr />
          <TypeFilter />
          <hr />
          <StatusFilter />
          <hr />
          <ScoreFilter />
          <hr />
          <TimeFilter />
        </section>
      </div>
    );
}
 
export default FilterComponent;