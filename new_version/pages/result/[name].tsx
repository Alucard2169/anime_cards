import AnimeCardContainer from "@/components/AnimeCardContainer";
import LoadingPrimary from "@/components/LoadingPrimary";
import { AnimeDetailsProps } from "@/types/animeIntefaces";
import { FC, useCallback, useMemo, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

interface ResultProps {
  animeResult: AnimeDetailsProps[];
}

const Result: FC<ResultProps> = ({ animeResult }) => {
  const [data, setData] = useState(animeResult);
  const [query, setQuery] = useState("");
  const [genreState, setGenreState] = useState<boolean>(false);
  const [isLoading,setIsLoading] = useState<boolean>(false)

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setIsLoading(true)
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?q=${query}`
        );
        const data = await response.json();
        setData(data.data);
        setIsLoading(false)
      } catch (error: any) {
        setIsLoading(false)
        console.log(error.message);
      }
    },
    [query]
  );

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    []
  );

  const filteredAnimeResult = useMemo(() => {
    // Apply filtering logic here based on genreState or any other criteria
    return data;
  }, [data, genreState]);

  return (
    <div className="px-6 pt-20 pb-5 flex flex-col gap-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="query" className="relative flex items-center">
          <LiaSearchSolid className="absolute left-2 text-PRIMARY text-sm sm:text-xl" />
          <input
            type="text"
            id="query"
            placeholder="Bleach"
            value={query}
            onChange={handleOnChange}
            className="pl-8 text-xs w-32   rounded-full bg-transparent  py-2 px-4 border-none outline-none outline-1 outline-transparents focus:outline focus:outline-PRIMARY text-PRIMARY placeholder:text-purple-300 sm:text-md  sm:pl-10 sm:w-auto transition-all duration-100"
          />
        </label>
      </form>
      <div className="relative mt-12 flex justify-center w-4/5 self-center">
        {isLoading ? (
          <LoadingPrimary />
        ) : (
          <AnimeCardContainer animeResult={filteredAnimeResult} />
        )}
      </div>
    </div>
  );
};

export default Result;

export async function getServerSideProps(context: any) {
  const { name } = context.query;

  try {
    //get anime data
    const animeResponse = await fetch(
      `https://api.jikan.moe/v4/anime?q=${name}`
    );
    const animeData = await animeResponse.json();

    const animeResult = animeData.data;

    return {
      props: {
        animeResult,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        animeResult: null,
      },
    };
  }
}
