const express = require('express');
const bodyParser = require("body-parser");


const app = express();


app.get('/', function(req, res) {
    var today = new Date();
    var curentday = today.getDay();

    if (curentday === 6 || curentday === 0) {
        res.send("Hey I'm Happy today because it's free day")
    } else {
        res.sendFile(__dirname + "/index.html")
    }



})


app.listen(3000, function() {
    console.log("Server is run on port 3000 Now: ")
})