var express = require('express');
var router = express.Router();
var Applications = require('../models/application.js');
var Company = require('../models/company.js');
var User = require('../models/user.js');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

router.get('/', (req, res) => {
    Company.find({})
            .exec((err, companies) => {
                if(err) console.log(err);
                res.json({companies: companies});
            })
});

router.get('/user/:userId', (req, res) => {
    var matchApp = [];
    User.findById(req.params.userId)
        .exec((err, user) => {
            if(err) console.log(err);
            Company.find({})
                    .exec((err, companies) => {
                        if(err) console.log(err);
                        for(var i =0; i< user.favorite.length; i++) {
                            for(var j =0; j < companies.length; j++){
                                if(user.favorite[i].companyId == companies[j]._id){
                                    for(var k = 0; k< companies[j].applications.length; k++) {
                                        if(user.favorite[i].appId == companies[j].applications[k]._id) {
                                            matchApp.push({
                                                _id: companies[j].applications[k]._id,
                                                description: companies[j].applications[k].description,
                                                downloadUrl: companies[j].applications[k].downloadUrl,
                                                logo: companies[j].applications[k].logo,
                                                name: companies[j].applications[k].name,
                                                favId: user.favorite[i]._id
                                            });
                                        }
                                    }

                                }
                            }
                        }
                        res.json({favoriteApp: matchApp});
                    });
        });
        console.log(matchApp.length);
});

router.get('/:companyId/app/:appId', (req, res) => {
    Company.findById(req.params.companyId)
            .exec((err, company) => {
                if(err) res.json({message: 'coudnot not find company bcoz' + err});
                var app = company.applications.id(req.params.appId);

                res.json({app: app});
            });
});

router.delete('/user/:userId/fav/:favId', (req, res) => {
    User.findById(req.params.userId)
    .exec((err, user) => {
        var fav = user.favorite.id(req.params.favId);
        user.save();
        res.json({app: 'App deleted suc'});
    });
})

module.exports = router;