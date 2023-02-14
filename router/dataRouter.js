const express = require('express');
const { getAnime, getAnimeById, filterAnime, animeByName, getCharacter } = require('../controller/dataController');
const apicache = require('apicache');

const router = express.Router();
let cache = apicache.middleware

router.get(`/api`, cache('2 minutes'), getAnime)

router.get('/api/anime/:id', cache('2 minutes'), getAnimeById)

router.get(`/top/:filter`, cache('2 minutes'), filterAnime)

router.get('/anime/:name', animeByName)

router.get('/api/characters/:id',cache('2 minutes'), getCharacter)

module.exports = router;