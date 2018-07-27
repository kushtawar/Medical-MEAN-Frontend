
///////////////////////////////////////////////////



const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
//const dbHost = 'mongodb+srv://mongodbtestuser2:Termina_3@cluster0-0zlxa.mongodb.net/directtestdb1';
const dbHost = 'mongodb://mongodbtestuser2:Termina_3@cluster0-shard-00-00-0zlxa.mongodb.net:27017,cluster0-shard-00-01-0zlxa.mongodb.net:27017,cluster0-shard-00-02-0zlxa.mongodb.net:27017/directtestdb1?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
// Connect to mongodb
mongoose.connect(dbHost,(err) => {
if(!err){
    console.log('MongoDB connection succeeded.');
}else
{
    console.log('Error in DB connection: '+ JSON.stringify(err,undefined,2));
}
});
module.exports=mongoose;