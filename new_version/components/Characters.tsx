import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CharacterProps {
    data: any;
}

const Characters: React.FC<CharacterProps> = ({ data }) => {
    const { character, role, favorite } = data;
    const { mal_id, images, name } = character;
    const [visibility,setVisibility] = useState<number>(0)
    return (
      <Link key={mal_id} href={`/characters/${mal_id}`}>
        <div
          key={mal_id}
          className="z-1 relative flex flex-col gap-2  w-32 max-w-fit h-52 rounded-md overflow-hidden"
          onMouseOver={() => setVisibility(1)}
          onMouseLeave={() => setVisibility(0)}
        >
          <div className="rounded-md overflow-hidden w-full h-full">
            <Image
              src={images.webp.image_url}
              alt={name}
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          <div
            className={`absolute bottom-0 left-0 bg-MAIN w-full p-1 ${visibility === 0 ? 'opacity-0' : 'opacity-1'} transition-all duration-200 ease text-center`}
          >
            <h2 className="font-bold text-PRIMARY text-md mb-2">{name}</h2>
            <span className="font-semibold text-MAIN bg-PRIMARY p-1/2">
              {role}
            </span>
            <span>{favorite}</span>
          </div>
        </div>
      </Link>
    );
}
 
export default Characters;