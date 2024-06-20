const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Message: String
});

const creations = mongoose.model("creations", userSchema);
module.exports = creations;
