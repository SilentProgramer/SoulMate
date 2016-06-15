///Mention express dependency : express will handle server creation
var express = require('express');
///Mention morgan dependency: morgan is a popular node logger
var logger = require('morgan');
///Mention path dependency: path is used to construct relative file paths
var path = require('path');

///route to js file which handles defaultPage
var defaultPage = require('./routes/default');
var testPage = require('./routes/test');

///get an instance of express
var app = express();


//--------------- View Engine Setup -----------//
//set the location of views
app.set('views',path.join(__dirname,'src/views'));
//Set View Engine
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//Set logger
app.use(logger('dev'));
//telling express which folder to look in for static files
//by static files, we mean files having extensions like css, js, etc
app.use(express.static(path.join(__dirname,'public')));


//----- Routing ---------//
app.use('/',defaultPage);
app.use('/test',testPage);

//some scripts that we need are actually inside the node_modules folder. We do not want to expose the 
//internal structure of our server, so we are creating a mapping. Here we will map the nodemodules path
//to "/lib"
app.use("/lib",express.static(path.join(__dirname,"node_modules/")));

//Some scripts may be present in the root of the server itself e.g. systemjs.config.js. For that
//we must route such get requests to the root. The variable __dirname is a pre-defined variable that
//stores path to the root directory
app.use("/lib",express.static(__dirname));

//to load angular components
//app.use("/templates",express.static(path.join(__dirname,"public/components/")));
        
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