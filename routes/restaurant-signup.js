const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('restusers')
    .select('*')
    .then((info) => {
      res.render('restaurant-signup', {
        title: 'Restaurant Sign Up',
        info
      })
      .catch((err) => `Restaurant sign in error --> ${err}`)
    })
})



module.exports = router;
