// const express = require('express');


// const app = express();


// app.get('/', function(req, res) {
//     var today = new Date();
//     var curentday = today.getDay();

//     if (curentday === 6 || curentday === 0) {
//         res.send("Hey I'm Happy today because it's free day")
//     } else {
//         res.sendFile(__dirname + "/index.html")
//     }



// })


// app.listen(3000, function() {
//     console.log("Server is run on port 3000 Now: ")
// })

let express = require('express');
const bodyParser = require("body-parser");
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));