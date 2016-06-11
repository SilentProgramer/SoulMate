var express = require('express');
var router = express.Router();

/* GET test page */
/* url: <domain>/test */
router.get('/',function(req,res,next){
    res.render("test")
});

/* url: <domain>/test/echo */
router.get('/echo',function(req,res,next){
    res.render("echo")
});

module.exports = router;