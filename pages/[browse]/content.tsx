import AnimeCardContainer from "@/components/AnimeCardContainer";
import FilterComponent from "@/components/FilterComponent";
import GenreFilter from "@/components/GenreFilter";
import LoadingPrimary from "@/components/LoadingPrimary";
import { AnimeDetailsProps } from "@/types/animeIntefaces";
import { Oswald } from "next/font/google";
import { useLayoutEffect, useState } from "react";

const oswald = Oswald({
  weight: ["600"],
  subsets: ["latin-ext"],
});

interface ContentProps {
  heading: string,
  animeResult: AnimeDetailsProps[];
}

const Content: React.FC<ContentProps> = ({ heading, animeResult }) => {
  const [isLoading,setIsLoading] = useState(false)
  const [data,setData] = useState(animeResult)
  const [genreState, setGenreState] = useState<boolean>(false);
  const [mobileVisible, setMobileVisible] = useState<boolean>(false);


    const [windowWidth, setWindowWidth] = useState<number>(
      typeof window !== "undefined" ? window.innerWidth : 0
    );

    useLayoutEffect(() => {
      function updateWindowWidth() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener("resize", updateWindowWidth);
      return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);

    // Automatically show filter on desktop size, hide on mobile size
    useLayoutEffect(() => {
      if (windowWidth >= 768) {
        setMobileVisible(true);
      } else {
        setMobileVisible(false);
      }
    }, [windowWidth]);


  const handleMobileFilter = () => {
    setMobileVisible(!mobileVisible)
  }

  return (
    <div className="flex flex-col gap-6 px-6 pt-20 pb-5">
      <hr />
      <div className="flex justify-between">
        <h1 className={`${oswald.className} text-2xl text-white font-bold`}>
          {heading}
        </h1>
        <button className="visible sm:hidden bg-purple-600 px-2 rounded-md text-white" onClick={handleMobileFilter}>Filter</button>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-[70%_25%] justify-between gap-6 ">
        <div className="flex flex-col gap-2">
          <GenreFilter
            state={genreState}
            setGenreState={setGenreState}
            setData={setData}
            setIsLoading={setIsLoading}
          />
          {isLoading ? (
            <LoadingPrimary />
          ) : (
            <AnimeCardContainer animeResult={data} />
          )}
        </div>
        <div className=" w-full">
          <FilterComponent
            mobileVisible={mobileVisible}
            setData={setData}
            genreState={genreState}
            getGenreState={setGenreState}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

export async function getServerSideProps(context: any) {
  const { browse } = context.query;
  try {
    //get anime data
    const animeResponse = await fetch(
      `https://api.jikan.moe/v4/top/anime?filter=${browse === 'top' ? "bypopularity" : "airing"}&sfw`
    );
    const animeData = await animeResponse.json();

    const animeResult = animeData.data;

    const heading = browse === 'top' ? 'Top Anime By Popularity' : "Top This Season"

    return {
      props: {
        animeResult,
        heading
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
