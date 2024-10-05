const express = require('express');
const request = require('request');
const path = require('path');
const app = express();


app.use('/images',express.static(path.join(__dirname,'images')))

app.get('/getImageURL',(req,res)=>{
    const animeTitle = req.query.title || 'Gakusen Toshi Asterisk';

    const imageFile = animeTitle.split(' ').join('_').toLowerCase() + '.jpg';
    const imageURL = `http://localhost:6090/images/${imageFile}`;
    res.send({imageURL});
});

app.listen(6090,()=>{
    console.log("Server Listening on port http://localhost:6090")
});