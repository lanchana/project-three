var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelper = require('../helpers/auth.js');

router.get('/login', (req, res) => {
    // where to redirect when there is an error
    // console.log('sessions in');
    res.json({message: 'invaid username or password'});
});

router.post('/login', authHelper.loginUser, (req, res) => {
    if(req.error) {
        // res.redirect('/sessions/logi')
        // where to redirect in case of error
        // console.log('inside sessions error');
        res.json({message: 'invaid username or password'});
    }
    else {
        // console.log('session no error');
        console.log('sessions'+ req.session.currentUser._id)
        res.redirect('/api/user/' + req.session.currentUser._id + '?error=' + req.error);
        // response with this '/' + req.session.currentUser._id + '?error=' + req.error
    }
});

router.delete('/', (req, res) => {
    req.session.destroy(() => {
        // where to redirect after killing session
        res.json({message: "session is deleted"});
    });
});

module.exports = router;