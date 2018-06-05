const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('restaurant')
    .select('*')
    .then((info) => {
      res.render('restaurantInfo', {
        title: 'Restaurant Details',
        info
      })
    })
    .catch((err) => `No Details --> ${err}`)
})

module.exports = router;
