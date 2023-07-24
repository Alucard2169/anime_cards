import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  CharacterProps,
} from "@/types/characterInterfaces";

export interface CharaProps {
  characterResult: CharacterProps
}

const CharacterDetails: FC<CharaProps> = ({ characterResult }) => {

    const [state, setState] = useState<boolean>(false);
     const [showAllAnime, setShowAllAnime] = useState<boolean>(false);

  const {
    images,
    name,
    name_kanji,

      about,
      nicknames,
      anime,
   manga,
  } = characterResult;

  const truncatedAnime = anime.slice(0, 4); // Truncate anime data to first 15 items

  const toggleShowAllAnime = () => {
    setShowAllAnime((prev) => !prev); // Toggle the state to show all anime
  };


  return (
    <div className={`pt-20 p-8 w-full  gap-6 ${"animeDetailPage"}`}>
      <div className="w-full bg-PRIMARY_TWO p-3">
        <section className="p-2 bg-PRIMARY w-fit flex flex-col items-center rounded-md gap-4">
          <div className="border border-MAIN border-8 rounded-md overflow-hidden">
            <Image
              src={`${images.webp.image_url}`}
              alt={name || name_kanji}
              width="250"
              height="400"
            />
          </div>
          <h1 className="text-PRIMARY_TWO font-bold text-xl">{name}</h1>
          {name_kanji && (
            <h2 className="text-MAIN font-semibold text-lg">{name_kanji}</h2>
          )}
        </section>

        <div className="mt-4 flex flex-col gap-3">
          {nicknames.length !== 0 && (
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-md">Nicknames</h4>
              {nicknames.map((nicknames, i) => (
                <span
                  key={i}
                  className="bg-MAIN text-PRIMARY text-sm w-full rounded-lg p-1 pl-4 font-semibold"
                >
                  {nicknames}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex gap-4 w-full ">
          <section className="bg-PRIMARY_TWO p-2 rounded-sm ">
            <h2 className="text-PRIMARY font-bold text-2xl">About</h2>
            <p className="text-white mt-4 leading-6">{about}</p>
          </section>
        </div>
        <h2 className="text-2xl text-PRIMARY font-semibold">Animes</h2>
        <div className="grid grid-cols-4 gap-3">
          {truncatedAnime.map((an) => (
            <Link href={`/anime/${an.anime.mal_id}`}>
              <div
                className="bg-PRIMARY_TWO w-full h-fit flex flex-col gap-1 items-center pr-5 rounded-md overflow-hidden"
                title={an.anime.title}
              >
                <div className="w-full h-40">
                  <Image
                    src={an.anime.images.webp.large_image_url}
                    alt={an.anime.title}
                    width={205}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="bg-MAIN w-full p-2 text-center">
                  <h4 className="font-semibold text-PRIMARY truncate">
                    {an.anime.title}
                  </h4>
                  <span className="text-white">{an.role}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;

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
    console.log(err);
  }
}
