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
    <div>
      <section>
        <h1>Anime</h1>
        <MediaCardsContainer data={animeResult} type="anime" />
      </section>
      <section>
        <h1>Manga</h1>
        <MediaCardsContainer data={mangaResult} type="manga" />
      </section>
      <section>
        <h1>Characters</h1>
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
