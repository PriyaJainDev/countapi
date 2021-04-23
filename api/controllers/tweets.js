const mongoose = require('mongoose');
const Tweets = require('../models/tweets');

exports.get_all_tweets = (req, res, next) => {
    Tweets.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })       
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
};

exports.create_tweets = (req, res, next) => {
    const tweetbody = req.body;

    tweetbody._id = mongoose.Types.ObjectId();

    const tweet = new Tweets(tweetbody);
    tweet
    .save()
    .then(docs => {
        console.log(docs, 'Tweets');
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err, 'error found');
        res.status(500).json({
          error:err
        });
    });
};