var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user.js');

function createSecure(req, res, next) {
    var password = req.body.password;
    var salt = bcrypt.hashSync("baconTableOfBaconOfRainbows");  // our custom salt we apply to all passwords for authentication.
    res.hashedPassword = bcrypt.hashSync(password, salt);
    next();
}

function loginUser(req, res, next) {  // logs in and creates a session of the current user
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email: email})
        .then((foundUser) => {
            if(foundUser == null) {
                req.error = 'Invalid User Name or Password';
            } else if(bcrypt.compareSync(password, foundUser.password)) {
                req.session.currentUser = foundUser;
            } else {
                req.error = 'Invalid User Name or Password';
            }
            next();
        })
        .catch((err) => {
            res.json({status: 500, message: 'Invalid User Name or Password'});
        });
}

function authorized(req, res, next) {  // checks if the user id is the same as the session user's id when trying to view a users favorites
    var currentUser = req.session.currentUser;
    if(!currentUser || currentUser._id != req.params.id) {
        res.json({status: 404, data: "Oops.. you are accessing a wrong page"});
    } else {
        next();
    }
};

module.exports = {
    createSecure: createSecure,
    loginUser: loginUser,
    authorized: authorized
};