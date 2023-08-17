import { MangaRelationProps } from "@/types/mangaInterfaces";
import { FC } from "react";


interface RelatedProps {
    data: MangaRelationProps[]
}

const Related: FC<RelatedProps> = ({ data }) => {
  console.log(data)
    return (
      <section>
        <h2 className="text-xl sm:text-2xl text-PRIMARY font-bold mb-4">
          Relations
        </h2>
        <ul className="flex flex-col gap-4">
          {data.map((relation, i) => (
            <li key={i} className="flex gap-2">
              <h4 className="bg-PRIMARY text-MAIN font-semibold w-32 sm:w-1/6 text-center p-1 rounded-md text-lg sm:text-xl h-fit">
                {relation.relation}
              </h4>
              {/* Use the entry as an argument in the inner map function */}
              <div>
                {relation.entry.map((entry, j) => (
                  <h5 className=" w-fit p-1 text-PRIMARY" key={j}>
                 
                      {entry.name}
                
                  </h5>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
}
 
export default Related;