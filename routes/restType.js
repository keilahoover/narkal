const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('restType')
    .select('*')
    .then((types) => {
      res.render('restType', {
        title: 'Restaurant Genres',
        types
      })
    })
    .catch((err) => `No Restaurant Genres --> ${err}`)
})
