import express from "express"
import mongoose from "mongoose"
// const express = require("express");
// const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// ---------------------------- defult

const FruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});

const Fruit = mongoose.model("Fruit", FruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 4,
    review: "A good fruit for eating",
});

const banana = new Fruit({
    name: 'banana',
    rating: 4,
    review: "A tasty fruit",
});

const orange = new Fruit({
    name: "Orange",
    rating: 3,
    review: "Juicy and sweet",
});

const mellon = new Fruit({
    name: "mellonjan",
    rating: 3,
    review: "it's so good for every thing you know!"
})
const tometo = new Fruit({
    name: "tometo",
    rating: 4,
    review: "you know it's kind of fruits!"
})

const defaultFruits = [apple, banana, orange, mellon, tometo];
Fruit.insertMany(defaultFruits)
    .then(() => {
        console.log("Successfully saved default fruits to DB");
    })
    .catch((error) => {
        console.log(error);
    });



// Fruit.find(function(err, fruits) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(fruits);
//     }
// });



Fruit.find({})
    .then((fruits) => {
        console.log(fruits)
            // fruits.forEach(function(fruit) {
            //     console.log(fruit.name);
            // });
        mongoose.connection.close(); // add this line to close the connection
    })
    .catch((error) => {
        console.log(error);
    });



// ------------------------------------------- Default
app.listen(port, function() {
    console.log("Server started on port " + port);
});

mongoose.connection.once("open", function() {
    console.log("Connection has been made, now make fireworks...");
}).on("error", function(error) {
    console.log("Connection error: ", error);
});