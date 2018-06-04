const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('cultureConvenience')
    .select('*')
    .then((info) => {
      res.render('cultureConvenience', {
        title: 'Culture & Convenience',
        info
      })
    })
    .catch((err) => `No Restaurant Genres --> ${err}`)
})
