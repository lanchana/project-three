var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelper = require('../helpers/auth.js');

router.get('/login', (req, res) => {
    res.json({message: 'invaid username or password'});
});

router.post('/login', authHelper.loginUser, (req, res) => {
    if(req.error) {
        res.json({message: 'invaid username or password'});
    }
    else {
        console.log("inside sessions post action: " + req.session.currentUser)
        res.json({currentUser: req.session.currentUser});
        // res.redirect('/api/user/' + req.session.currentUser._id + '?error=' + req.error);
    }
});

router.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.json({message: "session is deleted"});
    });
});

module.exports = router;