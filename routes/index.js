var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '123',no:"99" });
});
router.get('/search', function(req, res, next) {
  console.log(req.query)
  res.render('search', { title: 'search page',keyword:req.query.q });
});

module.exports = router;
