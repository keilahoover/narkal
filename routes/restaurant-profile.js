const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next) {
  console.log('i am here')
  res.render('restaurant-profile', { title: 'Restaurant Profile' });
});

module.exports = router;
