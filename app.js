//Mention express dependency
var express = require('express');

//get an instance of express
var app = express();

//port number
var port = process.env.PORT || 5000;

//telling express which folder to look in for static files
//by static files, we mean files having extensions like css, js, etc
app.use(express.static('public'));

//telling express which folder to look in for static files
//This time we will give the folder where we have our html files
app.use(express.static('src/views'));


//set the location of views
app.set('views','./src/views');

//Set View Engine
app.set('view engine','ejs');


//--------------- Routing ------------------
//mention default page to load
app.get('/', function (req, res) {
    //res.send('Hello World! It works!');
    res.render('landing');
});

//login page
app.get('/login', function (req, res) {
    res.send('This is the Login Page');
});



//tell express to listen to this port number
app.listen(port, function (err) {
    console.log('running server on port ' + port);
});