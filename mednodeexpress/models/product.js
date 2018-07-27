const mongoose = require('mongoose');


// create mongoose schema


var Product= mongoose.model('Product', {
    productname: {type: String},
    productassetid: {type: String},
    productweight: {type: String},
    productmanufacturer: {type: String}
});
module.exports={Product:Product};