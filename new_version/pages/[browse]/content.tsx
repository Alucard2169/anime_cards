import AnimeCard from "@/components/AnimeCards";
import { AnimeDetailsProps } from "@/types/animeIntefaces";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: ["600"],
  subsets: ["latin-ext"],
});

interface ContentProps {
  heading: string,
  animeResult: AnimeDetailsProps[];
}

const Content: React.FC<ContentProps> = ({ heading,animeResult }) => {
  return (
    <div className="flex flex-col gap-6 px-6 pt-20 pb-5">
      <hr />
      <h1 className={`${oswald.className} text-2xl text-white font-bold`}>
        {heading}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-[70%_25%] justify-between gap-6 ">
        <div className="grid grid-cols-2   sm:grid-cols-4 gap-10 ">
          {animeResult.map((anime) => (
            <AnimeCard data={anime} />
          ))}
        </div>
        <div></div>
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
