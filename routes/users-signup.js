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

router.post('/', (req, res, next) => {
  const id = document.getElementById('rest')
  if (id === 'user') {
    knex('users').where('email', req.body.email).then((data) => {
      if (data.length > 0) {
        const restUser = {
          id: data[0].id,
          email: data[0].email
        }
        bcrypt.compare(req.body.password, data[0].hashed_password).then((result) => {
          if (result === true && req.body.email === data[0].email) {
            let signedUser = jwt.sign(user, KEY)

            res.cookie('token', signedUser, {
              path: '/',
              httpOnly: true
            })
            res.render('index', {
              title: 'Narkal',
              signinSuccess: true
            });
          } else {
            // log
            res.status(400).type('text/plain').send("Incorrect email or password");
          }
        }).catch((err) => `>>> OOPS something went wrong ${err}`);
      } else {
        res.status(400).type('text/plain').send("Bad email or password")
      }
    }).catch((err) => `>>> CRAAAAAAAPPPPPPPPPPP ${err}`)
  }
})

module.exports = router;
