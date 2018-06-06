const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next) {
  res.render('restaurant-profile', { title: 'Restaurant Profile' });
});

router.post('/', (req, res, next) => {
  console.log('hit the post route')
    knex('restusers')
    .where('email', req.body.email).then((data) => {
      if (data.length > 0) {
        console.log(data.length)
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
            res.render('restaurant-profile', {
              title: 'Narkal',
              signinSuccess: true
            })
            console.log('you logged in YAY!!!!!')
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
