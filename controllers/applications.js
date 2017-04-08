var express = require('express');
var router = express.Router();
var applications = require('../models/application.js');
var Company = require('../models/company.js');
// Parses information from POST
var bodyParser = require('body-parser');
//  used to manipulate POST
var methodOverride = require('method-override');

router.get('/', (req, res) => {
    Company.find({})
            .exec((err, companies) => {
                if(err) console.log(err);
                res.json({companies: companies}).select('-__v');;
            })
});

module.exports = router;