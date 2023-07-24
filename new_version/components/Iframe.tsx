import React from "react";

interface trailerProps {
  embed_url: string | null;
  youtube_id: string | null;
  title: string;
  title_japanese: string;
}

interface IframeProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  data: trailerProps;
}

const Iframe: React.FC<IframeProps> = ({ state, setState, data }) => {
  const { embed_url, title, title_japanese } = data;

  const handleIFrameClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const dataset = target.getAttribute("data-set");

    if (dataset === "backdrop") {
      setState(false);
    }
  };

  return (
    <div
      className={`${
        !state ? "hidden" : ""
      } z-50 fixed bg-black bg-opacity-90 w-screen h-screen inset-0 flex justify-center items-center`}
      data-set="backdrop"
      onClick={handleIFrameClose}
    >
      <iframe
        width="560"
        height="315"
        src={embed_url || ""}
        title={title || title_japanese}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-11/12 h-2/6 sm:w-4/5 sm:h-4/5"
      ></iframe>
    </div>
  );
};

export default Iframe;
