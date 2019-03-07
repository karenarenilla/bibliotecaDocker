const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

MongoClient.connect("mongodb://mongo:27017", function(err, client) {
    
    assert.equal(null, err);
 
    console.log("Connected successfully to server"); 
    const db = client.db("Biblioteca");

    client.close();
});

module.exports = MongoClient;