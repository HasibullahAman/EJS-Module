const express = require('express');
const bodyParser = require("body-parser");


const app = express();


app.get('/', function(req, res) {
    var today = new Date();

    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send("Hey I'm Happy today because it's free day")
    } else {
        res.send("Oh my god I have to work!!!!!!!!!!!!!!!!")
    }



})


app.listen(3000, function() {
    console.log("Server is run on port 3000 Now: ")
})