var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user.js');

// function createSecure(req, res, next) {
//     var password = req.body.password;

//     res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
//     next();
// }

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
             console.log('auth : '+ foundUser.password );
            if(foundUser == null) {
                console.log('first no.. i am not in');
                // res.json({ message: '-1'});
                req.error = 'Invalid User Name or Password';
            } else if(bcrypt.compareSync(password, foundUser.password)) {
                console.log('yes i am in');
                req.session.currentUser = foundUser;

            } else {
                console.log(' second no.. i am not in');
                // res.json({message: '-1'})
                req.error = 'Invalid User Name or Password';
            }
            next();
        })
        .catch((err) => {
            console.log('no.. i am not in: '+ err);
            res.json({status: 500, message: 'Invalid User Name or Password'});
            // req.eror = 'Invalid User Name or Password';
            // res.json({status: 500, data: err});
        });
}

function authorized(req, res, next) {
    var currentUSer = req.session.currentUser;
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