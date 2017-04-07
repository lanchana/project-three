const express =require('express');
const app = express();

app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 5000, () => {
    console.log('I\'m listening on 5000');
});