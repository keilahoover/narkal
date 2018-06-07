const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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


router.post('/', (req, res, next) => {
  const givenPassword = req.body.password;

  bcrypt.hash(givenPassword, 12)
    .then((result) => {
      return knex('restusers').insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        hashed_password: result
      }, '*');
    })
    .then((user) => {
      const newObj = {
        id: user[0].id,
        first_name: user[0].first_name,
        last_name: user[0].last_name,
        email: user[0].email
      }
      res.send(newObj);
    })
    .catch((err) => {
      next(err);
    })
})

module.exports = router;
