//bringing in express, path, and bodyparser
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const friendList = require('./app/data/friends');
var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

//setting up express and port for the app
var app = express();
var PORT = process.env.PORT || 9000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//API routing
// require('./app/routing/apiRoutes.js')(app);
apiRoutes(app);
// require('./app/routing/htmlRoutes.js')(app);
htmlRoutes(app);

//what PORT app is running on
app.listen(PORT, function(){
    console.log('FriendFinder app listening on PORT: '+PORT);
});
