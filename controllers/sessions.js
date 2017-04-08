var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelper = require('../helpers/auth.js');

router.get('/login', (req, res) => {
    // where to redirect when there is an error
});

router.post('/login', authHelper.loginUser, (req, res) => {
    if(req.error) {
        // res.redirect('/sessions/logi')
        // where to redirect in case of error
    }
    else if {
        // response with this '/' + req.session.currentUser._id + '?error=' + req.error
    }
});

router.delete('/', (req, res) => {
    req.session.destroy(() => {
        // where to redirect after killing session
    });
});

module.exports = router;