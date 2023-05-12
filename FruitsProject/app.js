const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ShopDBM', {
    useNewUrlParser: true,
    // useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name: "Apple",
    rating: 5.3,
    review: "A good Fruit for eat!"
})

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model("Person", PersonSchema);

const person = new Person({
    name: "Ahmad",
    age: 25

})

// fruit.save();





const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB database');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});