  import { useGetFilter } from "@/context/FilterContext";
import { FC, useCallback, useState } from "react";
import { GrPowerReset } from 'react-icons/gr';
import FilterOptions from "./FilterOptions";
import ScoreFilter from "./ScoreFilter";


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
    mobileVisible: boolean;
  }

  const FilterComponent: FC<FilterComponentProps> = ({setData, genreState, getGenreState ,setIsLoading,mobileVisible}) => {
    
    const contextValue = useGetFilter();
    const { filter, setFilter } = contextValue;
    
    const [reset,setReset] = useState(false)


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
              ? `https://api.jikan.moe/v4/anime?${queries}&order_by=popularity&sfw`
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
    
      const typeOptions = [
        { id: "tv", value: "tv" },
        { id: "movie", value: "movie" },
        { id: "special", value: "special" },
        { id: "ova", value: "ova" },
        { id: "ona", value: "ona" },
        { id: "music", value: "music" },
      ];
    
    const statusOptions = [
      { id: 'airing', value: 'airing' },
      { id: 'upcoming', value: 'upcoming' },
      {id:'complete',value:'complete'}
    ]

   const timeOptions = [
     { id: "2020-2023", value: "2020-01-01&end_date=2023-12-31" },
     { id: "2015-2019", value: "2019-01-01 & end_date=2015-12 - 31" },
     { id: "2014-2010", value: "2010-01-01&end_date=2014-12-31" },
     { id: "2009-2005", value: "2009-01-01&end_date=2005-12-31" },
     { id: "2004-2000", value: "2004-01-01&end_date=2000-12-31" },
     { id: "1990s", value: "1990-01-01&end_date=1990-12-31" },
     { id: "1980s", value: "1980-01-01&end_date=1980-12-31" },
     { id: "1970s", value: "1970-01-01&end_date=1970-12-31" },
   ];


    const handleReset = () => {
       const updatedFilter = {
    type:'',status:'',score:null,start_date:"",
    };
setReset(true)
    setFilter(updatedFilter);
    handleFilter(updatedFilter);
    }

    
      return (
        <div
          className={`${
            mobileVisible ? "visible" : 'hidden'
          }  absolute z-20 sm:relative  top-0 p-4  rounded-md bg-gray-900 w-full h-fit`}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl text-white font-bold">Filter</h3>
            <GrPowerReset
              className="bg-white p-1 rounded-full text-2xl cursor-pointer"
              onClick={handleReset}
            />
          </div>
          <section className="mt-4 flex flex-col gap-4">
            <button
              onClick={handleGenreButtonClick}
              className="w-fit text-purple-500 outline outline-2 outline-purple-900 p-1 rounded-md hover:bg-purple-900 hover:text-white transition-all duration-200 ease-linear"
            >
              Filter By Genre
            </button>
            <hr />
            <FilterOptions
              handleFilter={handleFilter}
              data={typeOptions}
              filterName={"type"}
              heading={"Type"}
              reset={reset}
            />
            <hr />
            <FilterOptions
              handleFilter={handleFilter}
              data={statusOptions}
              filterName={"status"}
              heading={"Status"}
              reset={reset}
            />
            <hr />
            <ScoreFilter handleFilter={handleFilter} />
            <hr />
            <FilterOptions
              handleFilter={handleFilter}
              data={timeOptions}
              filterName={"start_date"}
              heading={"Time"}
              reset={reset}
            />
          </section>
        </div>
      );
  }
  
  export default FilterComponent;