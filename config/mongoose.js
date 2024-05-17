//library included
const mongoose = require('mongoose');

//Printing version of mongoose
console.log("Mongoose Version :", mongoose.version);

//connection made 
mongoose.connect('mongodb://localhost/contacts_list_db');

//Acquire The Connection
const db = mongoose.connection;

//checking error
db.on('error', console.error.bind(console, 'connection error :'));

//connection made and sending a message
db.once('open', function(){
    console.log("Successfully connected to the database");
});