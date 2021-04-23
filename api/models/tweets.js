const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
   
    time: { type: String},
    count: { type: Number}
});

module.exports = mongoose.model('Tweets', tweetSchema);