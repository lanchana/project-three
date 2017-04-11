var mongoose = require('mongoose');

require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user.js');
var Company = require('../models/company.js');
var Favorite = require('../models/favorite.js');
var Application = require('../models/application.js');

mongoose.Promise = global.Promise;

var companies = [{
    name: "Google",
    applications: [
        {
            name: "Materialize",
            logo: "http://i.imgur.com/9WTWm0X.png",
            downloadUrl: "http://materializecss.com/bin/materialize-v0.98.1.zip",
            description: "Created and designed by Google, Material Design is a design language that combines the classic principles of successful design along with innovation and technology. Google's goal is to develop a system of design that allows for a unified user experience across all their products on any platform."
        },
        {
            name: "Angular",
            logo:"http://i.imgur.com/ungliig.png",
            downloadUrl: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js',
            description: "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop."
        },
        {
            name: "Android Studio",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/2000px-Android_Studio_icon.svg.png",
            downloadUrl: "https://developer.android.com/studio/index.html#mac-bundle",
            description: "Android Studio provides the fastest tools for building apps on every type of Android device. World-class code editing, debugging, performance tooling, a flexible build system, and an instant build/deploy system all allow you to focus on building unique and high quality apps."
        },
    ]
},
{
    name: "Joyent",
    applications: [
        {
            name: "Node.js",
            logo: "http://i.imgur.com/acot7o6.png",
            downloadUrl: "https://nodejs.org/dist/v6.10.2/node-v6.10.2.pkg",
            description: "As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. In the following 'hello world' example, many connections can be handled concurrently. Upon each connection the callback is fired, but if there is no work to be done Node is sleeping."
        },
        {
            name: "SmartOS",
            logo: "http://i.imgur.com/0crNTZ1.png",
            downloadUrl: "https://wiki.smartos.org/display/DOC/Download+SmartOS",
            description: "blah blahhhhh"
        },
        {
            name: "Triton Compute",
            logo: "http://www.wired.com/wp-content/uploads/2016/06/triton-1200x600.jpg",
            downloadUrl: "https://www.joyent.com/downloads",
            description: "Triton Compute is a Cloud Infrastructure for Containers and VMs. Triton Compute Service allows you to securely deploy and operate containers with bare metal speed on the world's only container-native public cloud, powered by Triton."
        },
    ]
},
{
    name: "Josh Kushner Co.",
    applications: [
        {
            name: "Ok..?",
            logo: "https://19818-presscdn-pagely.netdna-ssl.com/wp-content/uploads/067/5e/whiguyblink.gif",
            downloadUrl: "https://github.com/canes6288/collegepros",
            description: "Anyone ever disagree with you? Have different point of view from you? With this light weight app you can throw some of the best reaction gifs straight from terminal!"
        },
        {
            name: "College Pros",
            logo:"http://i.imgur.com/8k6c24Z.png",
            downloadUrl: "https://github.com/canes6288/collegepros",
            description: "Pretty dope app im proud of. Can track your favoire college football players. yeah."
        },
        {
            name: "Just That Good",
            logo: "https://www.emojibase.com/resources/img/emojis/apple/x1f4af.png.pagespeed.ic.XGag47MW_q.png",
            downloadUrl: "https://github.com/canes6288",
            description: "Are you the best around? Is everyone else outright inferior to you? Time to let everyone know. This application sets up your console to log everytime there is a bug 'This isn't a bug, when you're this good, your code doesn't break.'"
        },
    ]
},
{
    name: "Gerry Pass Co.",
    applications: [
        {
            name: "Fire Supplies",
            logo: "http://i.imgur.com/ReCfoOj.png",
            downloadUrl: "https://github.com/rgpass",
            description: "A complete collection of every single possible variation of fire emojis! Ever have a sick burn you threw out in slack and the normal fire emoji cant express how sick of a burn it was? Then you've come to the right place."
        },
        {
            name: "Six Figures",
            logo:"http://i.imgur.com/eYekxan.jpg",
            downloadUrl: "https://github.com/rgpass",
            description: "On a scale of one to ten, i'd say uhh...*cough* HUNDRED THOUSAND *cough*..."
        },
        {
            name: "Chicken .env",
            logo: "http://greenmangoscatering.com/wp-content/uploads/2014/07/chicken.jpg",
            downloadUrl: "https://github.com/rgpass",
            description: "Do you love chicken? Is it the greatest meat of all time? Then with this simple application the entire world of chicken is at your fingertips. Incorporating google maps api you can search for every single chicken based food within a 50 mile radius of your location!"
        },
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
        },
        {
            name: "Paint-er",
            logo: "http://vignette3.wikia.nocookie.net/tlaststand/images/8/85/Paint_can.jpg/revision/latest?cb=20150118021455",
            downloadUrl: "https://github.com/dphurley",
            description: "This application lets you take pictures of any surface, wall, roof, floor etc, and on the computer preview what different paints look like! Making use of Home Depots paint api you have thousands of paints to choose from."
        },
    ]
}
];

Company.remove({})
    .then(function() {
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