const express = require('express');
const router = express.Router();
const knex = require('../knex');
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Narkal' });
});

router.get('/facebook', passport.authenticate('facebook'))

router.get('/restaurant-profile', (req, res, next) => {
  res.render('restaurant-profile', { title: 'Welcome, Narkal!'})
})

router.get('/facebook/callback', passport.authenticate('facebook', { successRedirect: '/restaurant-profile', failureRedirect: '/' }))

router.post('/', (req, res, next) => {
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
})

module.exports = router;
