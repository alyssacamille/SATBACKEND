var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true }, // Username is required
    email: { type: String, required: true, unique: true }, // Email is required and must be unique
    password: { type: String, required: true }, // Password is required
    dateOfBirth: { type: Date, required: true }, // Date of Birth is required
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

const User = mongoose.model('User', userSchema);

module.exports= User