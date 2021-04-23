const express = require('express');
const router = express.Router();
// const multer = require('multer');
const TweetController = require('../controllers/tweets');

router.get('/', TweetController.get_all_tweets);
router.post('/', TweetController.create_tweets);

module.exports =  router;