var express = require('express');
var router = express.Router();
var Applications = require('../models/application.js');
var Company = require('../models/company.js');
var User = require('../models/user.js');
// Parses information from POST
var bodyParser = require('body-parser');
//  used to manipulate POST
var methodOverride = require('method-override');

router.get('/', (req, res) => {
    Company.find({})
            .exec((err, companies) => {
                if(err) console.log(err);
                res.json({companies: companies});
            })
});

router.get('/user/:userId', (req, res) => {
    console.log('I am hitting router');
    var matchApp = [];
    User.findById(req.params.userId)
        .exec((err, user) => {
            if(err) console.log(err);
            Company.find({})
                    .exec((err, companies) => {
                        if(err) console.log(err);
                        // console.log(companies);
                        // console.log(companies[0].applications);
                        for(var i =0; i< user.favorite.length; i++) {
                            for(var j =0; j < companies.length; j++){
                                if(user.favorite[i].companyId == companies[j]._id){
                                    // console.log('match' +companies[j].applications.length);
                                    for(var k = 0; k< companies[j].applications.length; k++) {
                                        // console.log(companies[j].applications[k]);
                                        if(user.favorite[i].appId == companies[j].applications[k]._id) {
                                            // console.log("Match: " + companies[j].applications[k]);
                                            matchApp.push(companies[j].applications[k]);
                                        }
                                    }

                                }
                            }
                            // console.log(user.favorite[i]);
                        }
                        // console.log(matchApp[0]);
                        // console.log(matchApp.length);
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

module.exports = router;