  import { useGetFilter } from "@/context/FilterContext";
import { FC, useCallback } from "react";
import ScoreFilter from "./ScoreFilter";
import StatusFilter from "./StatusFilter";
import TimeFilter from "./TimeFilter";
import TypeFilter from "./TypeFilter";


interface FilterOptionsProps {
  type: string;
  status: string;
  score: number | null;
  start_date: string;
}

  interface FilterComponentProps {
    setData: any;
    genreState: boolean;
    getGenreState: (newState: boolean) => void;
    setIsLoading: (newState: boolean) => void;
  }

  const FilterComponent: FC<FilterComponentProps> = ({setData, genreState, getGenreState ,setIsLoading}) => {
    
    const contextValue = useGetFilter();
    const {filter,setFilter } = contextValue;


      const handleGenreButtonClick = () => {
        getGenreState(!genreState);
      };
    
    const handleFilter = useCallback(
      async (filterQuery: FilterOptionsProps) => {
        try {
          setIsLoading(true);

          const queries = Object.keys(filterQuery)
            .filter(
              (key) =>
                filterQuery[key as keyof FilterOptionsProps] !== "" &&
                filterQuery[key as keyof FilterOptionsProps] !== null
            )
            .map(
              (key) => `${key}=${filterQuery[key as keyof FilterOptionsProps]}`
            )
            .join("&");
        
              console.log(queries)
          const response = await fetch(
            queries.length > 0
              ? `https://api.jikan.moe/v4/anime?${queries}&order_by=popularity`
              : `https://api.jikan.moe/v4/top/anime?filter=airing&sfw`
          );
          const responseResult = await response.json();
          const data = responseResult.data;

          setData(data);
          setIsLoading(false);
        } catch (error: any) {
          setIsLoading(false);
          console.log(error.message);
        }
      },
      [filter]
    );
    
    
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
            <TypeFilter handleFilter={handleFilter} />
            <hr />
            <StatusFilter handleFilter={handleFilter} />
            <hr />
            <ScoreFilter handleFilter={handleFilter} />
            <hr />
            <TimeFilter handleFilter={handleFilter} />
          </section>
        </div>
      );
  }
  
  export default FilterComponent;