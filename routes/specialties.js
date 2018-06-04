const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('specialties')
    .select('*')
    .then((specials) => {
      res.render('restType', {
        title: 'Specialties',
        specials
      })
    })
    .catch((err) => `No Specialties --> ${err}`)
})
