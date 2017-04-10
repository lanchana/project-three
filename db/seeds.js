var mongoose = require('mongoose');

require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user.js');
var Company = require('../models/company.js');
var Favorite = require('../models/favorite.js');
var Application = require('../models/application.js');

mongoose.Promise = global.Promise;

// var google = new company

// var company = new Company;
// var application = new Application;
var companies = [{
    name: "google",
    applications: [
        {
            name: "chrome",
            logo: "http://www.chrome.com",
            downloadUrl: "http:///",
            description: "blah blah blah "
        },
        {
            name: "ninja",
            logo:"http://",
            downloadUrl: "htt://",
            description: "blah blahhhhh"
        },
        {
            name: "chrome2",
            logo:"http://",
            downloadUrl: "htt://",
            description: "blah blahhhhh"
        },
        {
            name: "chrome2",
            logo:"http://",
            downloadUrl: "htt://",
            description: "blah blahhhhh"
        }
    ]
},
{
    name: "amazon",
    applications: [
        {
            name: "chrome",
            logo: "http://www.chrome.com",
            downloadUrl: "http:///",
            description: "blah blah blah "
        },
        {
            name: "chrome2",
            logo:"http://",
            downloadUrl: "htt://",
            description: "blah blahhhhh"
        },
        {
            name: "chrome2",
            logo:"http://",
            downloadUrl: "htt://",
            description: "blah blahhhhh"
        },
        {
            name: "chrome2",
            logo:"http://",
            downloadUrl: "htt://",
            description: "blah blahhhhh"
        }
    ]
}
];


// User.remove({}, (err) => {
//     console.log(err);
// });

// Company.remove({}, (err) => {
//     console.log(err);
// });

// Application.remove({}, (err) => {
//     console.log(err);
// });

Company.remove({})
    .then(function() {
        // company = {}
        // Company.create(company)

        // companies = []
        // behind the scenes there is a .forEach
        return Company.create(companies);
    })
    .then(function(companies){
        console.log(companies);
    })
    .then(function(){
        mongoose.connection.close(function() {
            console.log("mongoose is Disconnected");
        });
    });

// Create a company object...applications "field" is just empty array
// Push a application object into array for company
// company = new Company
// app1 = new Application

// company.applications.push(app1)

// company.save