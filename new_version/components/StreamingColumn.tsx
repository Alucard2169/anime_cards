import { StreamingProps } from "@/types/animeIntefaces";
import { FC } from "react";
import { BiLinkExternal } from "react-icons/bi";


interface StreamingColumnProps {
    streaming: StreamingProps[]
}

const StreamingColumn:FC<StreamingColumnProps> = ({ streaming }) => {
    return (
      <section className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl text-PRIMARY font-bold">
          Streaming
        </h2>
        <div className="flex gap-4 align-center flex-wrap">
          {streaming.map((stream) => (
            <span
              key={stream.name}
              className="cursor-pointer bg-PRIMARY text-MAIN rounded-md p-1 font-semibold flex gap-2 items-center"
            >
              <a href={`${stream.url}`} target="_blank">
                {stream.name}
              </a>{" "}
              <BiLinkExternal />
            </span>
          ))}
        </div>
      </section>
    );
}
 
export default StreamingColumn;