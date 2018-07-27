// Import dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {mongoose} = require('./db.js');

var productController = require('./controllers/productController.js');

var app= express();
app.use(bodyParser.json());

const fs = require('fs');

let rawdata = fs.readFileSync('env.json');  
let envdetails = JSON.parse(rawdata);  
let myenv= envdetails.env;
let myinstanceurl=envdetails.instanceurl;
console.log(myenv);
console.log(myinstanceurl); 


app.use(cors({ origin: myinstanceurl }));



//app.use(cors({ origin: 'http://localhost:4200' }));
app.listen(3000, () => console.log('API is running on localhost:3000'));

app.use('/products',productController);
