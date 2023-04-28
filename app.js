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

// let express = require('express');
// const bodyParser = require("body-parser");
// let app = express();

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('index', { foo: 'FOO' });
// });

// app.listen(3000, () => console.log('Example app listening on port 3000!'));




// let express = require("express");
// const bodyParser = require('body-parser');

// let app = express(;)



// app.set('view engine', 'ejs');
// var today = new Date();
// var curentday = today.getDay();
// var day = "";

// // app.get('/', (req, res) => {
// //     if (curentday == 6) {
// //         day = 'Friday';
// //     } else if (curentday === 0) {
// //         day = 'Staturday'
// //     } else if (curentday === 1) {
// //         day = 'sunday'
// //     } else if (curentday === 2) {
// //         day = 'monday'
// //     } else if (curentday === 3) {
// //         day = 'thusday'
// //     } else if (curentday === 4) {
// //         day = 'Wedenday'
// //     } else if (curentday === 5) {
// //         day = "thursday"
// //     }
// //     res.render('list', { kindOfDay: day });
// // });
// app.get('/', (req, res) => {
//     // switch (curentday) {
//     //     case 0:
//     //         day = 'Saturday';
//     //         break;
//     //     case 1:
//     //         day = 'Sunday';
//     //         break;
//     //     case 2:
//     //         day = 'Monday';
//     //         break;
//     //     case 3:
//     //         day = 'Tuesday';
//     //         break;
//     //     case 4:
//     //         day = 'Wednesday';
//     //         break;
//     //     case 5:
//     //         day = 'Thursday';
//     //         break;
//     //     case 6:
//     //         day = 'Friday';
//     //         break;
//     //     default:
//     //         console.log('Error: current day is invalid');
//     var options = {
//         weekday: 'long',
//         day: 'numeric',
//         month: 'long',
//     }
// }

// res.render('list', { kindOfDay: day });
// });


let express = require('express');
const bodyParser = require("body-parser");


let app = express();
var items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var today = new Date();
var curentday = today.getDay();
var day = "";
app.get('/', (req, res) => {
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    var day = today.toLocaleString('en-US', options);
    res.render('list', {
        kindOfDay: day,
        NewItems: items,
    });
});

app.post('/', (req, res) => {
    item = req.body.newItem;
    items.push(item);

    res.redirect('/')
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));