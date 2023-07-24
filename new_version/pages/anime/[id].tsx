import Characters from '@/components/Characters';
import Iframe from '@/components/Iframe';
import { AnimeDetailsProps } from "@/types/animeIntefaces";
import { SeriesCharacterProps } from '@/types/characterInterfaces';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { AiFillCaretRight, AiFillPlayCircle } from "react-icons/ai";
import { BiLinkExternal } from 'react-icons/bi';



interface AnimeProps {
  animeResult: AnimeDetailsProps;
  characterResult: SeriesCharacterProps[];
}


const AnimeDeatails: FC<AnimeProps> = ({
  animeResult,
  characterResult,
}) => {
  const addCommasToNumber = (number: number): string => {
    return number.toLocaleString();
  };
  const [state, setState] = useState<boolean>(false);

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
    relations,
    rating,
    source,
  } = animeResult;

  const { youtube_id, embed_url } = trailer;

  return (
    <div className={`pt-20 p-8 w-full  gap-6 ${"animeDetailPage"}`}>
      <div className="w-full bg-PRIMARY_TWO p-3">
        <section className="p-2 bg-PRIMARY w-fit flex flex-col items-center rounded-md gap-4">
          <div className="border border-MAIN border-8 rounded-md overflow-hidden">
            <Image
              src={`${images.webp.large_image_url}`}
              alt={title || title_japanese}
              width="250"
              height="400"
            />
          </div>
          <h1 className="text-PRIMARY_TWO font-bold text-xl">
            {title || title_english}
          </h1>
          <h2 className="text-MAIN font-semibold text-lg">{title_japanese}</h2>
        </section>

        <div className="mt-4 flex flex-col gap-3">
          {titles && (
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-md">Synonims</h4>
              {titles.map((title, i) => (
                <span
                  key={i}
                  className="bg-MAIN text-PRIMARY text-sm w-full rounded-lg p-1 pl-4 font-semibold"
                >
                  {title.title}
                </span>
              ))}
            </div>
          )}
          <ul className="flex flex-col gap-2">
            <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
              Type <span className="ml-2 bg-MAIN p-1 text-PRIMARY">{type}</span>
            </li>
            <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
              Season <span className="ml-2 bg-MAIN p-1 text-PRIMARY">{season}</span>
            </li>
            <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
              Rating <span className="ml-2 bg-MAIN p-1 text-PRIMARY">{rating}</span>
            </li>
            <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
              Airing{" "}
              <span className="ml-2 bg-MAIN p-1 text-PRIMARY">
                {airing ? "Airing" : "Not Airing"}
              </span>
            </li>
            <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
              Episodes{" "}
              <span className="ml-2 bg-MAIN p-1 text-PRIMARY">
                {episodes || "??"}{" "}
              </span>
            </li>
            <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
              Duration{" "}
              <span className="ml-2 bg-MAIN p-1 text-PRIMARY">
                {duration || "??"}
              </span>
            </li>
            <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
              Score{" "}
              <span className="ml-2 bg-MAIN p-1 text-PRIMARY">
                {score || "??"}
              </span>
            </li>
            <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
              Score By{" "}
              <span className="ml-2 bg-MAIN p-1 text-PRIMARY">
                {addCommasToNumber(scored_by) || "??"} People
              </span>
            </li>
            <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
              Source{" "}
              <span className="ml-2 bg-MAIN p-1 text-PRIMARY">
                {source}
              </span>
            </li>
          </ul>
          {studios && (
            <div className="bg-PRIMARY p-1 rounded-md flex flex-col gap-2">
              <h4 className="font-bold text-MAIN">Studios</h4>
              <ul className="grid grid-cols-2">
                {studios.map((studio) => (
                  <span
                    key={studio.mal_id}
                    className="bg-MAIN text-PRIMARY  w-fit p-1 font-semibold"
                  >
                    <a href={studio.url} target="_blank">
                      {studio.name}
                    </a>
                  </span>
                ))}
              </ul>
            </div>
          )}
          {genres && (
            <div className="bg-PRIMARY p-1 rounded-md flex flex-col gap-2">
              <h4 className="font-bold text-MAIN">Genres</h4>
              <ul className="grid grid-cols-2 gap-2 auto-rows-auto">
                {genres.map((genre) => (
                  <span
                    key={genre.mal_id}
                    className="bg-MAIN text-PRIMARY  w-fit p-1 font-semibold"
                  >
                    <a href={genre.url} target="_blank">
                      {genre.name}
                    </a>
                  </span>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div>
          {embed_url && (
            <button
              className="text-xl text-white font-bold flex items-center"
              onClick={() => setState(true)}
            >
              <AiFillPlayCircle className="mr-2 w-12 h-12" />
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
        <div className="flex gap-4 w-full ">
          <section className="bg-PRIMARY_TWO p-2 rounded-sm sm:w-1/2">
            <h2 className="text-PRIMARY font-bold text-2xl">Synopsis</h2>
            <p className="text-white mt-4 leading-6">{synopsis}</p>
          </section>
          {background && (
            <section className="bg-PRIMARY_TWO p-2 rounded-sm sm:w-1/2">
              <h2 className="text-PRIMARY font-bold text-2xl">Background</h2>
              <p className="text-white mt-4 leading-6">{background}</p>
            </section>
          )}
        </div>
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-PRIMARY font-bold">
            Notable Characters
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-5">
            {characterResult.map((character, i) => (
              <Characters data={character} key={i} />
            ))}
          </div>
          <button className=" text-lg text-PRIMARY font-bold ">
            <Link
              className="flex items-center"
              href={`/anime/characters/${mal_id}`}
            >
              {" "}
              View All characters <AiFillCaretRight className="text-2xl" />
            </Link>
          </button>
        </section>
        <hr />
        {streaming.length > 0 && (
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl text-PRIMARY font-bold">Streaming</h2>
            <div className="flex gap-4 align-center">
              {streaming.map((stream) => (
                <span className="cursor-pointer bg-PRIMARY text-MAIN rounded-md p-1 font-semibold flex gap-2 items-center">
                  <a href={`${stream.url}`} target="_blank">
                    {stream.name}
                  </a>{" "}
                  <BiLinkExternal />
                </span>
              ))}
            </div>
          </section>
        )}
        <hr />
        {relations.length > 0 && (
          <section>
            <h2 className="text-2xl text-PRIMARY font-bold mb-4">Relations</h2>
            <ul className="flex flex-col gap-4">
              {relations.map((relation, i) => (
                <li key={i} className="flex gap-2">
                  <h4 className="bg-PRIMARY text-MAIN font-semibold w-1/6 text-center p-1 rounded-md text-xl h-fit">
                    {relation.relation}
                  </h4>
                  {/* Use the entry as an argument in the inner map function */}
                  <div>
                    {relation.entry.map((entry, j) => (
                      <h5 className=" w-fit p-1 text-PRIMARY" key={j}>
                        <Link
                          href={
                            entry.type === "manga"
                              ? `/manga/${entry.mal_id}`
                              : `/anime/${entry.mal_id}`
                          }
                        >
                          {entry.name}
                        </Link>
                      </h5>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
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
    const characterResult = characterData.data.slice(0, 6);


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



