const axios = require("axios").default;

// get initial data of anime
const getAnime = async (req, res) => {
  try {
    let currentPage = 0;
    let data = [];
    while (currentPage < 3) {
      currentPage++;
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?page=${currentPage}`
      );
      data.push(...response.data.data);
    }
    res.status(200).json(data);
  } catch (err) {
    res.json({ error: err.message });
  }
};

// get anime by ID (when user clicks on any anime card from frontend, it requests the server for that specific anime)
const getAnimeById = async (req, res) => {
  try {
    // get id from request params
    const id = req.params.id;

    // make request to api
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    const data = response.data;
    res.status(200).json(data.data);
  } catch (err) {
    res.status(500).json({ error: "Anime not available" });
  }
};

// filter anime based on user preference (popularity, airing, etc)
const filterAnime = async (req, res) => {
  try {
    let currentPage = 0;
    const data = [];
    while (currentPage < 2) {
      currentPage++;
      const response = await axios.get(
        `https://api.jikan.moe/v4/top/anime?filter=${req.params.filter}&page=${currentPage}`
      );
      data.push(...response.data.data);
    }
    res.status(200).json(data);
  } catch (err) {
    res.json({ error: err.message });
  }
};

// get anime by name (search bar)
const animeByName = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${req.params.name}`
    );
    const data = response.data;
    res.status(200).json(data.data);
  } catch (err) {
    res.json({ error: err.message });
  }
};

// get characters in anime anime
const getCharacter = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime/${id}/characters`
    );
    const data = await response.data;

    res.status(200).json(data.data.slice(0, 15));
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = {
  getAnime,
  getAnimeById,
  filterAnime,
  animeByName,
  getCharacter,
};
