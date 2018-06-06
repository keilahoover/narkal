const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next) {
  console.log('hello');
  res.render('restaurant-signin', { title: 'Restaurant SignIn' });
});

module.exports = router;
