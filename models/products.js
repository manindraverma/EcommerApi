const mongoose = require('mongoose');


// creating the product schema
const productSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
   
},{
    timestamp:true,
});

// creating a new model called "Product"
const Product = mongoose.model('Product', productSchema);

module.exports = Product;