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
    name: "Google",
    applications: [
        {
            name: "Materialize",
            logo: "http://i.imgur.com/9WTWm0X.png",
            downloadUrl: "http://materializecss.com/getting-started.html",
            description: "Created and designed by Google, Material Design is a design language that combines the classic principles of successful design along with innovation and technology. Google's goal is to develop a system of design that allows for a unified user experience across all their products on any platform."
        },
        {
            name: "Angular",
            logo:"http://i.imgur.com/ungliig.png",
            downloadUrl: 'https://angularjs.org/',
            description: "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop."
        }
    ]
},
{
    name: "Joyent",
    applications: [
        {
            name: "Node.js",
            logo: "http://i.imgur.com/acot7o6.png",
            downloadUrl: "https://nodejs.org/en/download/",
            description: "As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. In the following 'hello world' example, many connections can be handled concurrently. Upon each connection the callback is fired, but if there is no work to be done Node is sleeping."
        },
        {
            name: "SmartOS",
            logo: "http://i.imgur.com/0crNTZ1.png",
            downloadUrl: "https://wiki.smartos.org/display/DOC/Download+SmartOS",
            description: "blah blahhhhh"
        }
    ]
},
{
    name: "Josh Kushner Co.",
    applications: [
        {
            name: "Ok..?",
            logo: "http://www.chrome.com",
            downloadUrl: "http:///",
            description: "Anyone ever disagree with you? Have different point of view from you? With this light weight app you can throw some of the best reaction gifs straight from terminal!"
        },
        {
            name: "College Pros",
            logo:"http://i.imgur.com/8k6c24Z.png",
            downloadUrl: "https://github.com/canes6288/collegepros",
            description: "Pretty dope app im proud of. Can track your favoire college football players. yeah."
        }
    ]
},
{
    name: "Gerry Pass Co.",
    applications: [
        {
            name: "Fire Supplies",
            logo: "http://i.imgur.com/ReCfoOj.png",
            downloadUrl: "https://github.com/rgpass",
            description: "A completel collection of every single possible variation of fire emojis! Ever have a sick burn you threw out in slack and the normal fire emoji cant express how sick of a burn it was? Then you've come to the right place."
        },
        {
            name: "Six Figures",
            logo:"http://i.imgur.com/eYekxan.jpg",
            downloadUrl: "https://github.com/rgpass",
            description: "On a scale of one to ten, i'd say uhh...*cough* HUNDRED THOUSAND *cough*..."
        }
    ]
},
{
    name: "Danny Hurley Co.",
    applications: [
        {
            name: "Download Later",
            logo: "http://i.imgur.com/JwEf8vz.jpg",
            downloadUrl: "https://github.com/dphurley",
            description: "Ever have a lot of stuff to download but only a limited ammount of time during the day? Then this application is perfect for you! You can easily set up scripts with the touch of a button to download all those files...later! Ligtning fast queing it'll have you saying, 'I'll download that on tuesday!'"
        },
        {
            name: "Higher Level",
            logo:"http://i.imgur.com/5U388es.png",
            downloadUrl: "https://github.com/dphurley",
            description: "This application was built with learning in mind. Designed to help users learn in a whole new way, whether it's at school or a bootcamp, simply take notes on our custom editor and it'll have you thinking BIG PICTURE. No more learning and staying focused on the little parts, the application takes all of your notes and compiles them to help you see THE BIG PICTURE."
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