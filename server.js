const express = require('express');
const app = express();

let PORT = process.env.PORT || 5000;

app.get('/coinflip', (req,res) => {
    let flip = Math.random() > 0.4999 ? "Heads" : "Tails" 
    console.log(flip)
    res.send(flip)
});

app.listen(PORT);