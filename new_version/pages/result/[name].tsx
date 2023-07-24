import MediaCardsContainer from "@/components/ScrollCardContainer";
import { AnimeProps } from "@/types/animeIntefaces";
import { CharacterProps } from "@/types/characterInterfaces";
import { MangaProps } from "@/types/mangaInterfaces";
import { FC } from "react";

interface ResultProps {
  animeResult: AnimeProps[] | null;
  mangaResult: MangaProps[] | null;
    characterResult: CharacterProps[] | null;
    name: string;
  errorMessage: string;
}

const Results: FC<ResultProps> = ({
  animeResult,
  mangaResult,
    characterResult,
  name,
  errorMessage,
}) => {
  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }


    return (
      <div className="flex flex-col gap-12 p-6 pt-20">
        <h1 className="text-white font-bold text-2xl">
          Search Result: <span className="bg-PRIMARY rounded-md p-2 text-MAIN">{name}</span>
        </h1>

        {animeResult && animeResult.length > 0 && (
          <section className="flex flex-col gap-6">
            <h2 className="text-xl text-PRIMARY p-2 rounded-md w-fit font-bold">
              Anime
            </h2>
            <MediaCardsContainer data={animeResult} type="anime" />
          </section>
        )}
        <hr />
        {mangaResult && mangaResult.length > 0 && (
          <section className="flex flex-col gap-6">
            <h2 className="text-xl text-PRIMARY p-2 rounded-md w-fit font-bold">
              Manga
            </h2>
            <MediaCardsContainer data={mangaResult} type="manga" />
          </section>
        )}
        <hr />
        {characterResult && characterResult.length > 0 && (
          <section className="flex flex-col gap-6">
            <h2 className="text-xl text-PRIMARY p-2 rounded-md w-fit font-bold">
              Character
            </h2>
            <MediaCardsContainer data={characterResult} type="character" />
          </section>
        )}
      </div>
    );
};

export default Results;

export async function getServerSideProps(context: any) {
  const { name } = context.query;

  try {
    // Get anime search result
    const animeResponse = await fetch(
      `https://api.jikan.moe/v4/anime?q=${name}&sfw`
    );
    const animeData = await animeResponse.json();
    const animeResult = animeData.data; // Update this according to the actual response structure

    // Get manga search result
    const mangaResponse = await fetch(
      `https://api.jikan.moe/v4/manga?q=${name}&sfw`
    );
    const mangaData = await mangaResponse.json();
    const mangaResult = mangaData.data; // Update this according to the actual response structure

    // Get character search result
    const characterResponse = await fetch(
      `https://api.jikan.moe/v4/characters?q=${name}&sfw`
    );
    const characterData = await characterResponse.json();
    const characterResult = characterData.data; // Update this according to the actual response structure

    return {
      props: {
        animeResult,
        mangaResult,
            characterResult,
            name,
        errorMessage: "",
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        animeResult: null,
        mangaResult: null,
        characterResult: null,
        errorMessage: "An error occurred while fetching data.",
      },
    };
  }
}
