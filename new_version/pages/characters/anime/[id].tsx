import { CharacterProps } from "@/types/characterInterfaces";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CharacterAnimeProps {
    characterResult: CharacterProps;
}

const CharacterAnime: FC<CharacterAnimeProps> = ({ characterResult }) => {
    const {name, anime } = characterResult;
    return (
      <div className="pt-20 px-2 sm:px-4 flex flex-col gap-8">
        <h1 className="text-md sm:text-2xl text-PRIMARY font-semibold">
          {name}&apos;s anime appearances
            </h1>
            <span className="text-PRIMARY text-sm sm:text-lg">total: {anime.length}</span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {anime.map((an) => (
            <Link href={`/anime/${an.anime.mal_id}`} key={an.anime.mal_id}>
              <div
                className="flex w-fit h-full flex-col justify-between items-center gap-2  p-2 rounded-md hover:bg-PRIMARY_TWO transition-all duratoin-100 ease-in"
                title={an.anime.title}
              >
                <div className="relative w-32 h-3/5 sm:w-44 sm:h-4/5 rounded-md overflow-hidden">
                  <Image
                    src={an.anime.images.webp.large_image_url}
                    alt={an.anime.title}
                    width={200}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="mb-auto flex flex-col justify-between h-1/5 gap-4">
                  <h4 className="text-center text-xs sm:text-sm text-PRIMARY font-semibold word-wrap">
                    {an.anime.title.length > 40
                      ? `${an.anime.title.slice(0, 40)}...`
                      : an.anime.title}
                  </h4>
                  <p className="text-sm sm:text-md text-MAIN bg-PRIMARY p-1 rounded-md text-center font-semibold">
                    Role <span className="text-PRIMARY bg-MAIN p-1 rounded-md">{an.role}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
}
 
export default CharacterAnime;


export async function getServerSideProps(context: any) {
  const { id } = context.query;

  try {
    // get character data
    const characterResponse = await fetch(
      `https://api.jikan.moe/v4/characters/${id}/full`
    );
    const characterData = await characterResponse.json();
    const characterResult = characterData.data;

    return {
      props: {
        characterResult,
      },
    };
  } catch (err: any) {
      console.log(err)
      return {
          props: {
              CharacterResult: null
          }
      }
  }
}
