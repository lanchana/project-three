var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var User = require('../models/user.js');
var authHelper = require('../helpers/auth.js');
var Favorite = require('../models/favorite.js');

router.get('/edit/:id', function(req, res) {
    var id = req.params.id;
    User.findById({_id: id}, function(err, user) {
        if(err) res.json({err});
        res.json({user: user});
    })
});

router.get('/:id', authHelper.createSecure, (req, res) => {
    User.findById(req.params.id)
        .exec((err, user) => {
            if(err) res.json({message: 'Invalid user name or password:'+err});
            res.json({user: user});
        });
});

router.post('/fav/:userId/company/:companyId/app/:appId', (req, res) => {
    User.findById(req.params.userId)
        .exec((err, user) => {
        if(err) res.json({message: 'Could not find user bcoz' + err});
        var newFavorite = new Favorite({
            appId: req.params.appId,
            companyId: req.params.companyId
        });

        user.favorite.push(newFavorite);

        user.save((err) => {
             console.log('updated');
        });

    });
})

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
                res.json({success: 'User acount created'});
            })
        } else {
            res.json({message: 'This user email already registered'});
        }
    });
});

router.patch('/:id', authHelper.createSecure, (req, res) => {
    var id = req.params.id;

    User.findById({_id: id}, (err, user) => {
        if(err) res.json({message: 'Could not find user bcoz' + err});

        if(req.body.name) user.name = req.body.name;
        if(req.body.password) user.password = res.hashedPassword;
        if(req.body.email) user.email = req.body.email;

        user.save((err) => {
            if(err) res.json({message: 'could not update your account bcoz' + err});

            res.json({message: 'USer account updated successfully', user: user});
        })
    }).select('-__v');
});

router.delete('/:id', (req, res) => {
    var id = req.params.id;
    User.remove({_id: id}, (err) => {
        if(err) res.json({message: 'couldnt delete user'});
        res.json({message: 'User account delete'});
    }).select('-__v');
});

module.exports = router;