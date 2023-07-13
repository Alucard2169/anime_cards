import { FC } from 'react';
import { AnimeDetailsProps } from '@/types/animeIntefaces';
import Image from 'next/image';
import Link from 'next/link';


interface AnimeProps {
    animeResult: AnimeDetailsProps;
}


const AnimeDeatails: FC<AnimeProps> = ({ animeResult }) => {
    console.log(animeResult)
    const {
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
        genres,
    } = animeResult;
   
    
    return (
      <div className="pt-20 p-8">
        <div className="w-full bg-PRIMARY_TWO p-3 sm:w-1/5">
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
            <h2 className="text-MAIN font-semibold text-lg">
              {title_japanese}
            </h2>
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
                Type{" "}
                <span className="ml-2 bg-MAIN p-1 text-PRIMARY">{type}</span>
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
                  {episodes}
                </span>
              </li>
              <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
                Duration{" "}
                <span className="ml-2 bg-MAIN p-1 text-PRIMARY">
                  {duration}
                </span>
              </li>
              <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
                Score{" "}
                <span className="ml-2 bg-MAIN p-1 text-PRIMARY">{score}</span>
              </li>
              <li className="text-MAIN bg-PRIMARY p-1 font-bold rounded-md">
                Score By{" "}
                <span className="ml-2 bg-MAIN p-1 text-PRIMARY">
                  {scored_by} People
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
                          <a href={studio.url} target="_blank">{studio.name}</a>
                    </span>
                  ))}
                </ul>
              </div>
            )}
            {genres && (
              <div className="bg-PRIMARY p-1 rounded-md flex flex-col gap-2">
                <h4 className="font-bold text-MAIN">Genres</h4>
                <ul className="grid grid-cols-3">
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
      </div>
    );
}
 
export default AnimeDeatails;


export async function getServerSideProps(context:any) {
    const {id} = context.query;
    
    try {
        const animeResponse = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
        const animeData = await animeResponse.json()
        const animeResult = animeData.data;
          return {
        props: {
            animeResult,
        }
    }
    }
    catch (err: any) {
        console.log(err)
    }
    
  
}

// const getAnimeById = async (req, res) => {
//   try {
//     // get id from request params
//     const id = req.params.id;

//     // make request to api
//     const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
//     const data = response.data;
//     res.status(200).json(data.data);
//   } catch (err) {
//     res.status(500).json({ error: "Anime not available" });
//   }
// };