import Characters from "@/components/Characters";
import DetailColumn from "@/components/DetailColumn";
import Iframe from "@/components/Iframe";
import StreamingColumn from "@/components/StreamingColumn";
import ThemeColumn from "@/components/ThemeColumn";
import TitleColumn from "@/components/TitleColumn";
import { AnimeDetailsProps } from "@/types/animeIntefaces";
import { SeriesCharacterProps } from '@/types/characterInterfaces';
import Image from 'next/image';
import { FC, useState } from 'react';
import { AiFillPlayCircle } from "react-icons/ai";


interface AnimeProps {
  animeResult: AnimeDetailsProps;
  characterResult: SeriesCharacterProps[];
}


const AnimeDeatails: FC<AnimeProps> = ({
  animeResult,
  characterResult,
}) => {
  const addCommasToNumber = (number: number): string => {
    return number.toLocaleString("en-IN");
  };
  const [state, setState] = useState<boolean>(false);

console.log(animeResult)
  const {
    mal_id,
    images,
    title,
    title_english,
    title_japanese,
    type,
    titles,
    airing,
    episodes,
    duration,
    score,
    scored_by,
    studios,
    season,
    genres,
    synopsis,
    background,
    trailer,
    streaming,
    theme,

    rating,
    source,
    status,
  } = animeResult;
 console.log(theme)

  const details = { type, status, episodes, duration, score, scored_by, season, rating, source,genres,studios };
  const { youtube_id, embed_url } = trailer;



  return (
    <div className="pt-20 pb-10 px-2 sm:px-8 w-full gap-6">
      <div className="w-full h-3/5 flex flex-col sm:flex-row gap-10 sm:gap-20">
        <div className="w-full h-full  sm:w-auto sm:h-auto rounded-md ">
          <Image
            src={`${images.webp.large_image_url}`}
            alt={title || title_japanese}
            width="250"
            height="400"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            {embed_url && (
              <button
                className="text-md sm:text-xl text-white font-bold flex items-center"
                onClick={() => setState(true)}
              >
                <AiFillPlayCircle className="mr-2 w-8 h-8 sm:w-12 sm:h-12" />
                Play Trailer
              </button>
            )}
            {state ? (
              <Iframe
                state={state}
                setState={setState}
                data={{ embed_url, youtube_id, title, title_japanese }}
              />
            ) : null}
          </div>

          <TitleColumn
            titleData={titles}
            title={title}
            title_japanese={title_japanese}
          />
        </div>
        <DetailColumn details={details} />
      </div>
      
      <div className="flex justify-between flex-col sm:flex-row mt-20 mb-10">
        <section className="p-2  rounded-sm w-full sm:w-1/2">
          <h2 className="text-TEXT_PRIMARY font-bold text-xl sm:text-2xl">
            Synopsis
          </h2>
          <p className="text-white mt-4 leading-8">{synopsis}</p>
        </section>
        {background && (
          <section className=" p-2 rounded-sm  sm:w-2/5">
            <h2 className="text-TEXT_PRIMARY font-bold text-xl sm:text-2xl">
              Background
            </h2>
            <p className="text-white mt-4 leading-8 ">{background}</p>
          </section>
        )}
      </div>
      <hr />
      <section className="flex flex-col gap-10 my-10">
        <h2 className="text-xl sm:text-2xl text-PRIMARY font-bold">
          Notable Characters
        </h2>
        <div className=" grid grid-cols-3 sm:grid-cols-8 gap-5">
          {characterResult.map((character) => (
            <Characters data={character} key={character.mal_id} />
          ))}
        </div>
      </section>
      <hr />
      <ThemeColumn theme={theme} />
      <hr className="mb-10" />
      <StreamingColumn streaming={streaming} />
    </div>
  );
};
 
export default AnimeDeatails;


export async function getServerSideProps(context: any) {
  const { id } = context.query;

  try {
    const animeResponse = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
    const animeData = await animeResponse.json();
    const animeResult = animeData.data;

    // get character data
    const characterResponse = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/characters`
    );
    const characterData = await characterResponse.json();
    const characterResult = characterData.data.slice(0, 8);


    return {
      props: {
        animeResult,
        characterResult,
      },
    };
  } catch (err: any) {
    console.log(err);
    return {
      props: {
        animeResult: {},
        characterResult: [],
      },
    };
  }
}



