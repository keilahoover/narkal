const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('dietary')
    .select('*')
    .then((diets) => {
      res.render('dietary', {
        title: 'Dietary Information',
        diets
      })
    })
    .catch((err) => `No Dietary Info --> ${err}`)
})
