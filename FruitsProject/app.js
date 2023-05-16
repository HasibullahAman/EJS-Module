// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/ShopDBM', {
//     useNewUrlParser: true,
//     // useUnifiedTopology: true
// });

// const fruitSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// })

// const Fruit = mongoose.model("Fruit", fruitSchema);
// const fruit = new Fruit({
//     name: "Apple",
//     rating: 5.3,
//     review: "A good Fruit for eat!"
// })

// const PersonSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// })

// const Person = mongoose.model("Person", PersonSchema);

// const person = new Person({
//     name: "Ahmad",
//     age: 25

// });

// const kiwe = new Fruit({
//     name: "Kiwe",
//     rating: 4,
//     review: "Hello dear"
// });
// const banana = new Fruit({
//     name: "bananna",
//     rating: 9,
//     review: "I love it"
// });

// // Fruit.insertMany([kiwe, banana], function(err) {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log("sucessfuly add o shir az ma famidi ya na:");
// //     }
// // });

// Fruit.insertMany([kiwe, banana])
//     .then(function() {
//         console.log("Successfully saved defult items to DB");
//     })
//     .catch(function(err) {
//         console.log(err);
//     });




// const findDocuments = function(db, callback) {
//     const collection = db.collection('fruits');
//     collection.find({}).toArray(function(err, fruits) {
//         assert.equal(err, null);
//         console.log("Found the folwoing records!");
//         console.log(fruits);
//         callback(fruits);
//     });
// };









// fruit.save();





// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('Connected to MongoDB database');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });



// ---------------------------------------------------------------------------------------------------

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ShopDBM', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 4,
    review: "Hello dear"
});

const banana = new Fruit({
    name: "Banana",
    rating: 9,
    review: "I love it"
});

Fruit.insertMany([kiwi, banana])
    .then(function(res) {
        console.log("Successfully saved default items to DB");
    })
    .catch(function(err) {
        console.log(err);
    });

app.listen(port, function() {
    console.log("Server started on port " + port);
});

mongoose.connection.once('open', function() {
    console.log("Connection has been made, now make fireworks...");
}).on('error', function(error) {
    console.log("Connection error: ", error);
});

app.get("/", function(req, res) {
    Fruit.find({}, function(err, fruits) {
        if (err) {
            console.log(err);
        } else {
            console.log(fruits);
            res.send(fruits);
        }
    });
});