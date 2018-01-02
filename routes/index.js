var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '新创建的项目，名字叫yzk' });
});

module.exports = router;
