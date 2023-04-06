import useFetch from "../hooks/usefetch";
import AnimeCard from "../components/animeCard";
import "../style/animeList.css";

import { useContext } from "react";
import { SearchTerm } from "../context/appContext";

import QuerySection from "../components/querySection";

const AnimeList = () => {
  const { query } = useContext(SearchTerm);

  const { data: anime, error, isLoading, total } = useFetch(query);

  return (
    <div className="home">
      <QuerySection total={total} />
      <div className="container">
        {error && <div className="error">{error}</div>}
        {isLoading && <div className="loading"></div>}
        {anime && <AnimeCard anime={anime} />}
      </div>
    </div>
  );
};

export default AnimeList;
