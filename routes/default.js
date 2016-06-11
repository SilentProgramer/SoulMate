var express = require('express');
var router = express.Router();

/* GET home page */
/* url: <domain>/ */
router.get('/',function(req,res,next){
    //res.render("landing"); 
    res.render("landing.html")
});

module.exports = router;