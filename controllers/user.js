var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var User = require('../models/user.js');
var authHelper = require('../helpers/auth.js');
var Favorite = require('../models/favorite.js');

// Shows the user's edit page based off of the user id passed into the params.
router.get('/edit/:id', function(req, res) {
    var id = req.params.id;
    User.findById({_id: id}, function(err, user) {
        if(err) res.json({err});
        res.json({user: user});
    })
});

// shows the user's favorites view based off of the users id. Also checks if the current session user is authorized to view the page.
router.get('/:id', authHelper.authorized, (req, res) => {
    User.findById(req.params.id)
        .exec((err, user) => {
            if(err) res.json({message: 'Invalid user name or password: '+err});
            res.json({user: user});
        });
});

// posts a selected application to the current users favorite array by searching through company by id and then the applications id.
router.post('/fav/:userId/company/:companyId/app/:appId', (req, res) => {
    User.findById(req.params.userId)
        .exec((err, user) => {
        if(err) res.json({message: 'Could not find user because ' + err});
        var newFavorite = new Favorite({
            appId: req.params.appId,
            companyId: req.params.companyId
        });
        user.favorite.push(newFavorite);
        user.save((err) => {
        });
    });
})

// Create account route for users, runs through the custom hashing function.
router.post('/', authHelper.createSecure, (req, res) => {
    var query = {'email' : req.body.email};

    User.findOne(query, (err, item) => {
        if(err) console.log(err);
        if(!item) {
            var user = new User({
                name: req.body.name,
                email: req.body.email,
                password: res.hashedPassword
            });
            user.save((err, user) => {
                if(err) console.log(err);
                res.json({success: 'User account created'});
            })
        } else {
            res.json({message: 'This email is already registered.'});
        }
    });
});

// the edit route for user account information, also re hashes the password if the password is edited.
router.patch('/:id', authHelper.createSecure, (req, res) => {
    var id = req.params.id;

    User.findById({_id: id}, (err, user) => {
        if(err) res.json({message: 'Could not find user because ' + err});

        if(req.body.name) user.name = req.body.name;
        if(req.body.password) user.password = res.hashedPassword;
        if(req.body.email) user.email = req.body.email;

        user.save((err) => {
            if(err) res.json({message: 'Could not update account because ' + err});
            res.json({message: 'User account updated successfully.', user: user});
        })
    }).select('-__v');
});

// delete route to remove the user from the database.
router.delete('/:id', (req, res) => {
    var id = req.params.id;
    User.remove({_id: id}, (err) => {
        if(err) res.json({message: 'Could not delete account.'});
        res.json({message: 'User account deleted.'});
    }).select('-__v');
});

module.exports = router;