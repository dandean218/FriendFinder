// bringing in express, path, and bodyparser
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');

// setting up express and port for the app
const app = express();
const PORT = process.env.PORT || 9000;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'app')));

// API routing
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// what PORT app is running on
app.listen(PORT, () => {
  console.log(`FriendFinder app listening on PORT: ${PORT}`);
});
