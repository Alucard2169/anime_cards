const express = require('express');
const axios = require('axios').default;
const path = require('path')
const app = express();
require('dotenv').config();
const apicache = require('apicache')
const PORT = process.env.PORT || 8000;
let cache = apicache.middleware


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname+'/public')))


// routes

app.get('/', (req, res) => {
    res.redirect('/api')
})


// get anime on front page
app.get(`/api`, cache('2 minutes'), async (req, res) => {
    try {
        let currentPage = 0;
        let data = []
        while (currentPage < 3) {
            currentPage++
            const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${currentPage}`);
            data.push(...response.data.data)
        }
        res.send(data)
    }
    catch (err) {
        console.log(err.message)
    }
})

// get anime by id
app.get('/api/anime/:id' , cache('2 minutes'), async (req,res)=>{
    try {
        const id = req.params.id
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
        const data = response.data
        res.send(data.data);
    }
    catch (err) {
        console.log(err)
    }
})

//get anime by filter
app.get(`/top/:filter`,cache('2 minutes'), async (req, res) => {
    try {
        let currentPage = 0;
        const data = [];
        while (currentPage < 2) {
            currentPage++
            const response = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=${req.params.filter}&page=${currentPage}`)
            data.push(...response.data.data)
        }
        res.send(data)
    } catch (err) {
        console.log(err.message)
    }
})

app.get('/anime/:name', async (req, res) => {
    try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${req.params.name}`)
        const data = response.data
        res.send(data.data);
    } catch (err) {
        console.log(err)
    }
})


app.listen(PORT, () => {
    console.log('connected')
})