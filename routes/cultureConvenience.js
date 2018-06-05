const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('culture_convenience')
    .select('*')
    .then((info) => {
      res.render('culture-convenience', {
        title: 'Culture & Convenience',
        info
      })
    })
    .catch((err) => `No Restaurant Genres --> ${err}`)
})

module.exports = router;
