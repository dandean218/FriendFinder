/* eslint-disable no-console */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
// API call to bring in and handle survey data from friends
const express = require('express');

const router = express.Router();

const friendList = [
  {
    name: 'Dan',
    photo: 'http://coreywright.info/images/CoreyHeadshot.png',
    scores: [
      2,
      3,
      1,
      2,
      5,
      1,
    ],
  },
  {
    name: 'Sal',
    photo: 'http://coreywright.info/images/CoreyHeadshot.png',
    scores: [
      3,
      5,
      2,
      2,
      1,
      3,
    ],
  },
  {
    name: 'Sam',
    photo: 'http://coreywright.info/images/CoreyHeadshot.png',
    scores: [
      4,
      4,
      4,
      3,
      2,
      1,
    ],
  },
];

// pulls info from API/Friends into a JSON object
router.get('/friends', (req, res) => {
  res.json(friendList);
});

router.post('/friends', (req, res) => {
  // comares data from survey into API/FRIENDS JSON object with new data
  const newFriendScores = req.body.scores;
  const friendScoresArray = [];
  let bestMatch = 0;

  for (let i = 0; i < friendList.length; i++) {
    // loops through all friends in array
    let diffScores = 0;
    for (let f = 0; f < newFriendScores.length; f++) {
      diffScores += (Math.abs(parseInt(friendList[i].scores[f]) - parseInt(newFriendScores[f])));
    }
    friendScoresArray.push(diffScores);
  }
  console.log(friendScoresArray);
  // compares friends compatability scores
  // 121 <= 121 true, bestMatch = 0
  // 199 <= 121 false, bestMatch still 0
  for (let i = 0; i < friendScoresArray.length; i++) {
    console.log(`looking at ${i}...`);
    if (friendScoresArray[i] <= friendScoresArray[bestMatch]) {
      console.log(`${friendScoresArray[i]} is less than or equal to ${friendScoresArray[bestMatch]}`);
      bestMatch = i;
    }
  }

  const soulMate = friendList[bestMatch];
  res.json(soulMate);
});

module.exports = router;
