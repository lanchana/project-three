require('dotenv').config();

const express =require('express');
const app = express();

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on ('error', (err) => {
    console.log(err);
    process.exit(-1);
});

app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 5000, () => {
    console.log('I\'m listening on 5000');
});