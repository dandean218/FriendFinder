//API call to bring in and handle survey data from friends
var friendlist = require('../data/friends.js');

module.exports = function(app){
    //pulls info from API/Friends into a JSON object
    app.get('/api/friends', function(req,res){
        res.json(friendlist)
    });

    app.post('api/friends', function(req, res){
        //comares data from survey into API/FRIENDS JSON object with new data
        var newFriendScores = req.body.scores;
        var friendScoresArray = [];
        var bestMatch = 0;

        for(let i = 0; i<friendlist.length; i++){
            //loops through all friends in array
            var diffScores = 0;
            for(let f = 0; f<newFriendScores.length; f++){
                diffScores += (Math.abs(parseInt(friendList[i].scores[f])-pareseInt(newFriendScores[j])));
            }
            friendScoresArray.push(diffScores);
        }
        //compares friends compatability scores
        for(let i=0; i < friendScoresArray.length; i++){
            if(friendScoresArray[i] <= friendScoresArray[bestMatch]){
                bestMatch = [i];
            }
        }

        var soulMate = friendList[bestMatch];
        res.json(soulMate);

        friendList.push(req.body);

    });
}