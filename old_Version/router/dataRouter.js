const express = require("express");
const {
  getAnime,
  getAnimeById,
  filterAnime,
  animeByName,
  getCharacter,
} = require("../controller/dataController");
const apicache = require("apicache");

const router = express.Router();
let cache = apicache.middleware;

// initial anime request
router.get(`/api`, cache("2 minutes"), getAnime);

// get anime based on id
router.get("/api/anime/:id", cache("2 minutes"), getAnimeById);

//get anime based on user preference (filter (populatity,etc))
router.get(`/top/:filter`, cache("2 minutes"), filterAnime);

// get anime by name
router.get("/anime/:name", animeByName);

// get anime characters
router.get("/api/characters/:id", cache("2 minutes"), getCharacter);

module.exports = router;
