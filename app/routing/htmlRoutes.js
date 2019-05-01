//incorporates path library into the app
var path = require('path');

//setting up HTML routing and makes it available to app
module.exports = function(app){

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    app.get('/survey.html', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.get('/assets/style.css', function(req, res){
        res.sendFile(path.join(__dirname + '/../assets/style.css'));
    });

    app.get('/data/friends.js', function(req, res){
        res.sendFile(path.join(__dirname + '/../data/friends.js'));
    });
}