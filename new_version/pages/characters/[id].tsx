import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiFillCaretRight } from 'react-icons/ai';

import {
  CharacterProps,
} from "@/types/characterInterfaces";

 interface CharaProps {
  characterResult: CharacterProps
}

const CharacterDetails: FC<CharaProps> = ({ characterResult }) => {



  const {
    mal_id,
    images,
    name,
    name_kanji,

      about,
      nicknames,


  } = characterResult;



  return (
    <div className={`pt-20 p-2 sm:p-8 w-full gap-6 ${"animeDetailPage"}`}>
      <div className="w-full bg-PRIMARY_TWO p-3">
        <section className="p-2 bg-PRIMARY w-fit mx-auto flex  flex-col items-center rounded-md gap-4">
          <div className=" w-44 h-3/5 sm:w-auto sm:h-auto border border-MAIN border-8 rounded-md overflow-hidden">
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
            <p className="text-sm sm:text-lg text-white mt-4 leading-6">{about}</p>
          </section>
        </div>
        <h2 className="text-xl text-PRIMARY font-semibold">
          <Link href={`/characters/anime/${mal_id}`} className="flex items-end">
            View All Anime Roles <AiFillCaretRight />
          </Link>
        </h2>
        <h2 className="text-xl text-PRIMARY font-semibold">
          <Link href={`/characters/manga/${mal_id}`} className="flex items-end">
            View All Manga Roles <AiFillCaretRight />
          </Link>
        </h2>
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
