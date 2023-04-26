const express = require('express');
const bodyParser = require("body-parser");


const app = express();


app.get('/', function(req, res) {
    res.send("Hello again");
})


app.listen(3000, function() {
    console.log("Server is run on port 3000 Now: ")
})