var mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: String,
    price: String,
    image: String,
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    toc: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;