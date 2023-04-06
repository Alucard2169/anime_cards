import useFetch from "../hooks/usefetch";
import { useParams, useNavigate } from "react-router-dom";
import Character from "../components/character";
import "../style/animeDetails.css";
import { motion } from "framer-motion";

const AnimeDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, error } = useFetch("/api/anime/" + id);

  return (
    <>
      {error && <div className="error">{error}</div>}
      {isLoading && <div className="loading"></div>}
      {data && (
        <>
          <div className="details">
            <motion.button
              className="back"
              onClick={() => navigate("/anime")}
              whileHover={{ scale: 1.2 }}
            >
              Go Back
            </motion.button>

            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="malLink"
            >
              MAL LINK
            </a>

            <section className="right">
              <div className="animeImage">
                <img src={data.images.webp.large_image_url} alt={data.title} />
              </div>
              <div className="naming">
                <h1 className="eng">{data.title_english}</h1>
                <hr />
                <h1 className="jap">{data.title_japanese}</h1>
              </div>

              <div className="stats">
                {data.rank && (
                  <>
                    <p>Score:</p> <span>{data.rank}</span>
                  </>
                )}
                {data.season && (
                  <>
                    <p>Season:</p> <span>{data.season}</span>
                  </>
                )}
                {data.status && (
                  <>
                    <p>Status:</p> <span>{data.status}</span>
                  </>
                )}
                {data.year && (
                  <>
                    <p>Year:</p> <span>{data.year}</span>
                  </>
                )}
                {data.type && (
                  <>
                    <p>Type:</p> <span>{data.type}</span>
                  </>
                )}
                {data.rating && (
                  <>
                    <p>Rating:</p> <span>{data.rating}</span>
                  </>
                )}
                {data.episodes && (
                  <>
                    <p>Episodes:</p> <span>{data.episodes}</span>
                  </>
                )}
                {data.duration && (
                  <>
                    <p>Duration:</p> <span>{data.duration}</span>
                  </>
                )}
                <p>Airing:</p>{" "}
                <span>{data.airing === false ? "Finished" : "Airing"}</span>
                {data.broadcast.day && (
                  <>
                    <p>Broadcast on:</p> <span>{data.broadcast.day}</span>
                  </>
                )}
                {data.source && (
                  <>
                    <p>Source:</p> <span>{data.source}</span>
                  </>
                )}
                {data.aired.string && (
                  <>
                    <p className="from">Aired From:</p>
                    <span>{data.aired.string}</span>
                  </>
                )}
              </div>
            </section>
            <section className="left-det">
              {data.trailer.embed_url && (
                <div className="trailer" id="trailer">
                  <iframe
                    width="100%"
                    height="315"
                    src={`${data.trailer.embed_url}?autoplay=0`}
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <div className="naming">
                <h1 className="eng">{data.title_english}</h1>
                <h1 className="eng">{data.title_japanese}</h1>
              </div>
              <div className="dit">
                <div className="synopsis">
                  <h2 className="sy">Synopsis</h2>
                  {data.synopsis}
                </div>

                <Character id={id} />

                <div className="special">
                  {data.background && (
                    <div className="history">
                      <h2 className="history-head">History</h2>
                      {data.background}
                    </div>
                  )}
                  <div className="photos">
                    <img src={data.images.webp.image_url} alt="" />
                    <img src={data.images.webp.large_image_url} alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default AnimeDetails;
