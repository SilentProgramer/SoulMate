///Mention express dependency : express will handle server creation
var express = require('express');
///Mention morgan dependency: morgan is a popular node logger
var logger = require('morgan');
///route to js file which handles defaultPage
var defaultPage = require('./routes/default');
var testPage = require('./routes/test');

///get an instance of express
var app = express();


//--------------- View Engine Setup -----------//
//set the location of views
app.set('views','./src/views');
//Set View Engine
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//Set logger
app.use(logger('dev'));
//telling express which folder to look in for static files
//by static files, we mean files having extensions like css, js, etc
app.use(express.static('public'));
//some scripts that we need are actually inside the node_modules folder. We do not want to expose the 
//internal structure of our server, so we are creating a mapping. Here we will map the nodemodules path
//to "/scripts"
app.use("/scripts/@angular",express.static("node_modules/@angular/"));
app.use("/scripts/angular2-in-memory-web-api",express.static("node_modules/angular2-in-memory-web-api/"));
app.use("/scripts/rxjs",express.static("node_modules/rxjs/"));
app.use("/scripts/es6",express.static("node_modules/es6-shim/"));
app.use("/scripts/angular2/platform-browser-dynamic",express.static("node_modules/@angular/platform-browser-dynamic/"));
app.use("/scripts/system",express.static("node_modules/systemjs/dist/"));
app.use("/scripts/rx",express.static("node_modules/rxjs/bundles/"));
app.use("/scripts/systemjs.config.js",express.static("systemjs.config.js"));
app.use("/scripts/reflect-metadata/",express.static("node_modules/reflect-metadata/"));
app.use("/scripts/crypto-js/",express.static("node_modules/crypto-js/"));
app.use("/scripts/zone/",express.static("node_modules/zone.js/dist/"));



//----- Routing ---------//
app.use('/',defaultPage);
app.use('/test',testPage);

//catch 404 and forward to error handler
app.use(function(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})


///port number
var port = process.env.PORT || 5000;
//tell express to listen to this port number
var server = app.listen(port, function (err) {
    console.log('running server on port ' + port);
});

module.exports = app;