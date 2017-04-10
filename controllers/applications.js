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
    // var matchapp1 = [];

    // Hassan
    // set var appId = findAppId
    // update company's app info
    // A query to find specifc app in favorites of every user...it's one query
    // db.users.find({ 'favorites.id': appId}) **something like this**
    // then take this array of all the favorites and update them with the new information and save

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
                                        // console.log(companies[j].applications[k]);
                                        if(user.favorite[i].appId == companies[j].applications[k]._id) {
                                            // console.log("Match: " + companies[j].applications[k]);
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
                if(err) res.json({message: 'could not not find company because' + err});
                var app = company.applications.id(req.params.appId);

                res.json({app: app});
            });
});

router.delete('/user/:userId/fav/:favId', (req, res) => {
    console.log("Delete fav: "+req.params.userId+': '+req.params.favId);
    User.findById(req.params.userId)
    .exec((err, user) => {
        var fav = user.favorite.id(req.params.favId);
        console.log(fav);
        console.log('identicle' + user.favorite.pull(req.params.favId));
        user.save();
        // Deletes the specific photo based on its id
        // place.photos.pull(req.params.id)
        // Saves the changes made into database
        // user.save();
        // Redirects to the same page to delete more photos
        // res.redirect('/'+req.params.userId+'/'+req.params.placesId+'/photos/edit')
        res.json({app: 'App deleted suc'});
    });
})

module.exports = router;