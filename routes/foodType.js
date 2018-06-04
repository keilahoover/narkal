const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('foodType')
    .select('*')
    .then((types) => {
      res.render('foodType', {
        title: 'Food Genres',
        types
      })
    })
    .catch((err) => `No Food Genres --> ${err}`)
})
