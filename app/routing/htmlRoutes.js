// incorporates path library into the app
const express = require('express');

const router = express.Router();
const path = require('path');

// setting up HTML routing and makes it available to app
router.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/home.html`));
});

router.get('/survey', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/survey.html`));
});

router.get('/data/friends', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../data/friends.js`));
});

module.exports = router;
