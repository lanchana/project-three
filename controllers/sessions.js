var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelper = require('../helpers/auth.js');

router.get('/login', (req, res) => {
    res.json({message: 'Invalid Username or Password.'});
});

router.post('/login', authHelper.loginUser, (req, res) => {
    if(req.error) {
        res.json({message: 'Invalid Username or Password.'});
    }
    else {
        res.json({currentUser: req.session.currentUser});
    }
});

router.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.json({message: "session is deleted."});
    });
});

module.exports = router;