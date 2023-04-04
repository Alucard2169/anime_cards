const express = require('express');

const path = require('path')
const app = express();
require('dotenv').config();
const router = require('./router/dataRouter');
const PORT = process.env.PORT || 8000;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname + '/public')))



// routes

app.get('/', (req, res) => {
    res.redirect('/api')
})

app.use('/',router)

app.listen(PORT, () => {
    console.log('connected')
})