const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('food_allergies')
    .select('*')
    .then((allergies) => {
      res.render('food-allergies', {
        title: 'Food Allergies',
        allergies
      })
    })
    .catch((err) => `No Food Allergies --> ${err}`)
})

module.exports = router;
