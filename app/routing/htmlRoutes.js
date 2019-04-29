//incorporates path library into the app
var path = require('path');

//setting up HTML routing and makes it available to app
module.exports = function(app){
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.us(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}