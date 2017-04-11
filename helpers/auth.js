var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user.js');

function createSecure(req, res, next) {
    var password = req.body.password;
    var hash = bcrypt.hashSync("baconTableOfBaconOfRainbows");
    console.log('password create secure' + password);
    res.hashedPassword = bcrypt.hashSync(password, hash);
    next();
}

function loginUser(req, res, next) {

    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email: email})
        .then((foundUser) => {
            if(foundUser == null) {
                console.log('first no.. i am not in');
                req.error = 'Invalid User Name or Password';
            } else if(bcrypt.compareSync(password, foundUser.password)) {
                req.session.currentUser = foundUser;
                console.log("Current user in req.session = " + req.session.currentUser)
            } else {
                console.log(' second no.. i am not in');
                req.error = 'Invalid User Name or Password';
            }
            next();
        })
        .catch((err) => {
            console.log('no.. i am not in: '+ err);
            res.json({status: 500, message: 'Invalid User Name or Password'});
        });
}

function authorized(req, res, next) {
    var currentUser = req.session.currentUser;
    console.log("inside auth helper : " + currentUser);
    console.log('---------------------');
    if(!currentUser || currentUser._id != req.params.id) {
        res.json({status: 404, data: "Opps.. you are accessing a wrong page"});
    } else {
        next();
    }
};

module.exports = {
    createSecure: createSecure,
    loginUser: loginUser,
    authorized: authorized
};