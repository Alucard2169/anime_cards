import { FC } from "react";
import { CharacterProps } from "@/types/characterInterfaces";
import Link from "next/link";
import Image from "next/image";

interface CharacterMangaProps {
  characterResult: CharacterProps;
}

const CharacterManga: FC<CharacterMangaProps> = ({ characterResult }) => {
  const { name, manga } = characterResult;
  return (
    <div className="pt-20 px-4 flex flex-col gap-8">
      <h1 className="text-2xl text-PRIMARY font-semibold">
        {name}'s anime appearances
      </h1>
      <span className="text-PRIMARY text-lg">total {manga.length}</span>
      <div className="grid grid-cols-4 gap-3">
        {manga.map((an) => (
          <Link href={`/manga/${an.manga.mal_id}`}>
            <div
              className="flex w-fit h-full flex-col justify-between items-center gap-2  p-2 rounded-md hover:bg-PRIMARY_TWO transition-all duratoin-100 ease-in"
              title={an.manga.title}
            >
              <div className="relative w-44 h-4/5 rounded-md overflow-hidden">
                <Image
                  src={an.manga.images.webp.large_image_url}
                  alt={an.manga.title}
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="mb-auto flex flex-col justify-between h-1/5 gap-4">
                <h4 className="text-center text-sm text-PRIMARY font-semibold word-wrap">
                  {an.manga.title.length > 50
                    ? `${an.manga.title.slice(0, 50)}...`
                    : an.manga.title}
                </h4>
                <p className="text-MAIN bg-PRIMARY p-1 rounded-md text-center font-semibold">
                  Role{" "}
                  <span className="text-PRIMARY bg-MAIN p-1 rounded-md">
                    {an.role}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterManga;

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
    return {
      props: {
        CharacterResult: null,
      },
    };
  }
}
