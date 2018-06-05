'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('food_type')
    .select('*')
    .then((types) => {
      res.render('food-type', {
        title: 'Food Genres',
        types
      })
    })
    .catch((err) => `No Food Genres --> ${err}`)
})

module.exports = router;
