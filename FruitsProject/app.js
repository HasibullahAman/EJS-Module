const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');


// connection URL

const url = 'mongodb://localhost:27017';



// Database Name
const dbname = 'myproject';


// Create a new mongoClient

const client = new mongoClient(url);

// Use connet method to connect the server

client.connect(function(err) {
    assert.equal(null, err);
    console.log("connect with server wass successfuly!");


    const db = client.db(dbName);

    client.close();
})