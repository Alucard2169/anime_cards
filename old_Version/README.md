
# Anime_cards

# [LIVE SITE](https://different-pear-bullfrog.cyclic.app/)

Anime Card is a prototype web application that let's you search and browse your favorite anime, it gives you a brief detail about every anime.

> ### Build using :- 

> #### Frontend
 *  ReactJS  [docs](https://react.dev/)
 * Framer-motion [docs](https://www.framer.com/motion/)
 
 > #### Backend
 * NodeJS [docs](https://nodejs.org/en)
 * ExpressJS [docs](https://expressjs.com/)
 * Axios [docs](https://axios-http.com/)
 * APIcache [docs](https://apicache.net/)
 
 ---
#### The packages can be downloaded using [NPM](https://www.npmjs.com/)

---
### The project uses [Jikan](https://docs.api.jikan.moe/) API 
> [Jikan](https://jikan.moe) is an **Unofficial** MyAnimeList API. It scrapes the website to satisfy the need for a complete API - which MyAnimeList lacks.

A basic API request to Jikan API looks like this


     const id = req.params.id;
    // make request to api
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    const data = response.data;
    res.status(200).json(data.data);

 ---
 ## Project is deployed on [Cyclic](https://www.cyclic.sh/)
 > Cyclic is a serverless Hosting service that provides different pricing subscription including Free hosting upto 3 projects.
 ---
 ## Homepage preview
 
 ![https://github.com/Alucard2169/Anime_cards/old_Version/blob/main/Screenshot%202022-09-26%20at%2009-43-31%20Anime%20Cards.png?raw=true](https://github.com/Alucard2169/anime_cards/blob/main/old_Version/Screenshot%202022-09-26%20at%2009-43-31%20Anime%20Cards.png?raw=true)
 
 
 
# Contributing

If you would like to contribute to Anime_cards, feel free to submit a pull request with your changes. Please be sure to include a description of your changes and an explanation of why they are needed.

# Credits

Anime_cards was created by Alucard2169.
