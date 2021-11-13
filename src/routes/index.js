var express = require('express');
var router = express.Router();
var { restrict } = require('../lib-0.js')

router.get('/', restrict, function(req, res){
  res.render('index');
});

router.get('/app/:path', restrict, function (req, res) {
  res.send("/public/" + req.params.path)
})

module.exports = router;
