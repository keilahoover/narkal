const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('rest_type')
    .select('*')
    .then((types) => {
      res.render('restaurant-type', {
        title: 'Restaurant Genres',
        types
      })
    })
    .catch((err) => `No Restaurant Genres --> ${err}`)
})

module.exports = router;
