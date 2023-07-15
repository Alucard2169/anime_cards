import Image from "next/image";
import { useState } from "react";

interface CharacterProps {
    data: any;
}

const Characters: React.FC<CharacterProps> = ({ data }) => {
    const { character, role, favorite } = data;
    const { mal_id, url, images, name } = character;
    const [visibility,setVisibility] = useState<number>(0)
    return (
      <div
        key={mal_id}
            className="z-1 relative flex flex-col gap-2  w-32 max-w-fit h-52 rounded-md overflow-hidden"
            onMouseOver={()=>setVisibility(1)} onMouseLeave={()=>setVisibility(0)}
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
        <div className={`absolute bottom-0 left-0 bg-MAIN w-full p-1 opacity-${visibility} transition-all duration-200 ease text-center`}>
          <h2 className="font-bold text-PRIMARY text-md mb-2">{name}</h2>
          <span className="font-semibold text-MAIN bg-PRIMARY p-1/2">{role}</span>
          <span>{favorite}</span>
        </div>
      </div>
    );
}
 
export default Characters;