const express = require('express');
const app = express();
const cors = require('cors');

let PORT = process.env.PORT || 5000;

//solve cors issue
    
app.listen(PORT, 
    () => console.log("Server Start at the Port"));
    
app.use(express.static('public'));
app.use(cors());

//check if your server is working
app.get('/', (req, res)=>{
    res.send("Welcome to the server")
});

//flip a coin!
app.get('/coinflip', (req, res) => {

    let result = Math.random() > 0.49 ? "heads" : "tails"

    var data = {
      success: true,
      message: result
    };

    // Adds header
    res.setHeader('Content-Type', 'application/json');

    // responds with status code 200 and data
    res.status(200).json(data);
});