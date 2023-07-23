import { FC, useState } from "react";
import { MangaProps } from "@/types/mangaInterfaces";
import Image from "next/image";
import Link from "next/link";
import Iframe from "@/components/Iframe";
import { AiFillPlayCircle, AiFillCaretRight } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import Characters from "@/components/Characters";
import {
  SeriesCharacterProps,
} from "@/types/characterInterfaces";

interface MangaData {
    mangaResult: MangaProps;
  characterResult: SeriesCharacterProps[];
}

const MangaDetails: FC<MangaData> = ({
    mangaResult,
}) => {

  const [state, setState] = useState<boolean>(false);

  const {
     mal_id,
  url,
  images,
  approved,
  title,
  title_english,
  title_japanese,
 
  type,
      titles,

  status,
  chapters,
  volumes,
  rank,
  score,
  scored_by,
  synopsis,
  background,
  genres,
  } = mangaResult;


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
               Status{" "}
               <span className="ml-2 bg-MAIN p-1 text-PRIMARY">
                 {status}
               </span>
             </li>
             <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
           Chapters{" "}
              <span className="ml-2 bg-MAIN p-1 text-PRIMARY">
             {chapters || "??"}{" "}
           </span>
         </li>
         <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
               Volumes{" "}
               <span className="ml-2 bg-MAIN p-1 text-PRIMARY">
                 {volumes || "??"}
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
                 {scored_by || "??"} People
               </span>
             </li>
           </ul>
    
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
      
         <div className="flex gap-4 w-full h-fit">
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
          </div>
      );
};

export default MangaDetails;
export async function getServerSideProps(context: any) {
  const { id } = context.query;

  try {
    // Fetch manga data
    const mangaResponse = await fetch(
      `https://api.jikan.moe/v4/manga/${id}`
    );
    if (!mangaResponse.ok) {
      throw new Error("Failed to fetch manga data.");
    }

      const mangaData = await mangaResponse.json();
      const mangaResult = mangaData.data;
   

    // // Fetch character data
    // const characterResponse = await fetch(
    //   `https://api.jikan.moe/v4/manga/${id}/characters`
    // );
    // if (!characterResponse.ok) {
    //   throw new Error("Failed to fetch character data.");
    // }
    // const characterData = await characterResponse.json();
    // const characterResult = characterData.data.characters.slice(0, 6);

    return {
      props: {
        mangaResult,
        // characterResult,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        mangaResult: null,
        characterResult: [],
      },
    };
  }
}
