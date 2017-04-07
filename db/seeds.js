var mongoose = require('mongoose');

require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user.js');
var Company = require('../models/company.js');
var Application = require('../models/application.js');

mongoose.Promise = global.Promise;

var google = new company

var company =


User.remove({}, (err) => {
    console.log(err);
});

Company.remove({}, (err) => {
    console.log(err);
});

Application.remove({}, (err) => {
    console.log(err);
});


// Create a company object...applications "field" is just empty array
// Push a application object into array for company
// company = new Company
// app1 = new Application

// company.applications.push(app1)

// company.save