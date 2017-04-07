const express =require('express');
const app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/web-app', () => {
    console.log('Database is connected');
});

app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 5000, () => {
    console.log('I\'m listening on 5000');
});