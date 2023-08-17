import React, { useState } from "react";
import useSWR from "swr";

interface Genre {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

interface Data {
  data: Genre[];
}

interface GenreFilterProps {
  state: boolean;
  setData: any;
  setIsLoading: (newState: boolean) => void;
  setGenreState: (newState: boolean) => void;
}


const GenreFilter: React.FC<GenreFilterProps> = ({ state,setData,setIsLoading ,setGenreState}) => {

 

  const fetcher = async (args: any) => {
    const response = await fetch(args);
    const data = await response.json();
    return data;
  };

  const { data, error, isValidating } = useSWR<Data>(
    "https://api.jikan.moe/v4/genres/anime",
    fetcher
  );

  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const toggleGenreSelection = (genreId: number) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genreId)
        ? prevSelectedGenres.filter((id) => id !== genreId)
        : [...prevSelectedGenres, genreId]
    );
  };



  const handleGenreData = async () => {
  
    try {
      setIsLoading(true);
      const genres = selectedGenres.join(",");
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?genres=${genres}`
      );
      const genreResult = await response.json();
      const data = genreResult.data;
      setData(data);
      setIsLoading(false);
      setGenreState(false);
    } catch (error: any) {
      console.log(error.message);
    }
    

  }

  return (
    <div
      className={`bg-gray-900 rounded-md py-2 px-4 transition-all duration-200 ease-in-out ${
        state ? "opacity-100 h-full" : "opacity-0 h-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-purple-600 font-bold text-xl">Genre</h3>
       {selectedGenres.length !== 0 ?  <button className="bg-purple-600 p-1 px-4 font-bold text-white rounded-full   hover:bg-purple-900" onClick={handleGenreData} disabled={selectedGenres.length === 0}>Submit</button>:null}
      </div>

      {selectedGenres.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          <h4 className="text-purple-600 font-bold">Selected Genres:</h4>
          <ul className="grid grid-cols-6 gap-5">
            {selectedGenres.map((genreId) => (
              <li
                key={genreId}
                className="bg-purple-400 rounded-full text-center font-bold"
              >
                {data?.data.find((genre) => genre.mal_id === genreId)?.name}
              </li>
            ))}
          </ul>
          <hr className="mt-4" />
        </div>
      )}
      {isValidating ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading data</p>
      ) : (
        <ul className="grid grid-cols-5 gap-6 mt-4">
          {data?.data.map((genre) => (
            <li key={genre.mal_id}>
              <button
                className={`text-sm outline outline-1 ${
                  selectedGenres.includes(genre.mal_id)
                    ? "outline-purple-600 bg-purple-600"
                    : "outline-transparent"
                } text-white p-1 hover:outline-none hover:bg-purple-600 transition-all duration-400 cursor-pointer`}
                onClick={() => toggleGenreSelection(genre.mal_id)}
              >
                {genre.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenreFilter;
