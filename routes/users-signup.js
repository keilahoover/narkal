const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('users').select('*').then((info) => {
    res.render('sign-up', {
      title: 'User Sign Up',
      info
    })
  }).catch((err) => `User sign in error --> ${err}`)
})



module.exports = router;
