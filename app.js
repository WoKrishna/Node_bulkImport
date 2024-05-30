const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect("mongodb://localhost:27017", { dbName: "bulk-import" }).then(() => {
    console.log("MongoDb is connected.....")
}).catch((err) => {
    console.log(`Error:${err.message}`)
});

var db = mongoose.connection;

const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

db.collection('users').insertMany(users).then(() => {
    console.log("Insert Success..............");
});