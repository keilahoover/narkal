const express = require('express');
const router = express.Router();
const knex = require('../knex');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Narkal' });
});

module.exports = router;
