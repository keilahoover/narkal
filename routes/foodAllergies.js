const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('foodAllergies')
    .select('*')
    .then((allergies) => {
      res.render('foodAllergies', {
        title: 'Food Allergies',
        allergies
      })
    })
    .catch((err) => `No Food Allergies --> ${err}`)
})

module.exports = router;
