var express = require('express');
var document = require("./model/document.js")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('search');
});

router.get('/result', function(req,res,next) {



});

module.exports = router;