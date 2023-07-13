import MediaCardsContainer from "@/components/ScrollCardContainer";
import { AnimeProps } from "@/types/animeIntefaces";
import { MangaProps } from "@/types/mangaInterfaces";
import { CharacterProps } from "@/types/characterInterfaces";




interface ContentProps {
  animeResult: AnimeProps[];
  mangaResult: MangaProps[];
  characterResult: CharacterProps[];
}



const Content: React.FC<ContentProps> = ({ animeResult, mangaResult, characterResult }) => {
  return (
    <div className="flex flex-col gap-12 p-6 pt-16">
      <section className="flex flex-col gap-6">
        <h1 className="text-2xl text-PRIMARY p-2 rounded-md w-fit font-bold">
          Currently Popular In Anime
        </h1>
        <MediaCardsContainer data={animeResult} type="anime" />
      </section>
      <hr />
      <section className="flex flex-col gap-6">
        <h1 className="text-2xl text-PRIMARY p-2 rounded-md w-fit font-bold">
          Currently Popular In Manga
        </h1>
        <MediaCardsContainer data={mangaResult} type="manga" />
      </section>
      <hr />
      <section className="flex flex-col gap-6">
        <h1 className="text-2xl text-PRIMARY p-2 rounded-md w-fit font-bold">
          Currently Popular In Characters
        </h1>
        <MediaCardsContainer data={characterResult} type="character" />
      </section>
    </div>
  );
};

export default Content;

export async function getServerSideProps() {
    try {
      
        //get anime data
    const animeResponse = await fetch(
      "https://api.jikan.moe/v4/top/anime?filter=airing&page=1"
    );
      const animeData = await animeResponse.json();
    
      const animeResult = animeData.data;


//get manga data
      const mangaResponse = await fetch(
        "https://api.jikan.moe/v4/top/manga?filter=publishing&page=1"
      );
      const mangaData = await mangaResponse.json()
        const mangaResult = mangaData.data;
        
        //get character data
        const characterResponse = await fetch(
          "https://api.jikan.moe/v4/top/characters"
        );
        const characterData = await characterResponse.json();
        const characterResult = characterData.data;

    return {
      props: {
        animeResult,
        mangaResult,
        characterResult,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        animeResult: null,
        mangaResult: null,
        characterResult: null,
      },
    };
  }
}
