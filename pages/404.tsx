import { useEffect, useState } from "react";

const Custom404Page = () => {
  const [gif, setGif] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/random?tag=anime&rating=g&api_key=${process.env.NEXT_PUBLIC_GIPHY_KEY}`
      );
        const gifData = await res.json();
        console.log(gifData)
      setGif(gifData.data.embed_url);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      {gif && (
        <iframe
          src={gif}
          title="Anime GIF"
          width="400"
          height="300"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      <h1 className="text-white font-bold text-2xl">404</h1>
      <p className="text-white text-md">Not found</p>
    </div>
  );
};

export default Custom404Page;
