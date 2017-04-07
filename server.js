require('dotenv').config();

const express =require('express');
const app = express();
const logger = require('logger');
const bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connection.on ('error', (err) => {
    console.log(err);
    process.exit(-1);
});

app.use(express.static(__dirname + '/public'));

// var homeController = require('./controllers/home.js');
// app.use('/', homeController);
app.get('/', function(req, res) {
    console.log('home page');
});

var userController = require('./controllers/user.js');
app.use('/api/user', userController);

app.listen(process.env.PORT || 5000, () => {
    console.log('I\'m listening on 5000');
});