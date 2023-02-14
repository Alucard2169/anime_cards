const axios = require('axios').default;

const getAnime = async (req, res) => {
     try {
        let currentPage = 0;
        let data = []
        while (currentPage < 3) {
            currentPage++
            const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${currentPage}`);
            data.push(...response.data.data)
        }
        res.status(200).json(data)
    }
    catch (err) {
        res.json({error: err.message})
    }
}


const getAnimeById = async (req, res) => {
     try {
        const id = req.params.id
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
        const data = response.data
        res.status(200).json(data.data);
    }
    catch (err) {
        console.log(err)
    }
}


const filterAnime = async (req, res) => {
     try {
        let currentPage = 0;
        const data = [];
        while (currentPage < 2) {
            currentPage++
            const response = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=${req.params.filter}&page=${currentPage}`)
            data.push(...response.data.data)
        }
        res.status(200).json(data)
    } catch (err) {
        res.json({error: err.message})
    }
}



const animeByName = async (req, res) => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${req.params.name}`)
        const data = response.data
        res.status(200).json(data.data);
    } catch (err) {
        res.json({error: err.message})
    }
}


const getCharacter = async (req, res) => {
    const {id} = req.params

    try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`);
        const data = await response.data;

        res.status(200).json((data.data).slice(0,15))
    } catch (err) {
        res.json({error: err.message})
    }
}

module.exports = {getAnime,getAnimeById,filterAnime,animeByName,getCharacter}