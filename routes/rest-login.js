const express = require('express');
const router = express.Router();
const knex = require('../knex');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Narkal' });
});

router.post('/', (req, res, next) => {
  console.log("post request sent")
    knex('restusers')
    .where('email', req.body.email)
    .then((data) => {
      if(data.length > 0){
        console.log("data length ", data.length)
        const restUser = {
          id: data[0].id,
          email: data[0].email
        }
        bcrypt.compare(req.body.password, data[0].hashed_password)
        .then((result) => {
          const KEY = process.env.JWT_KEY
          if (result === true && req.body.email === data[0].email) {
            let signedUser = jwt.sign(restUser, KEY)
            console.log("signedUser ", signedUser)
            res.cookie('token', signedUser, {
              path: '/',
              httpOnly: true
            })
            res.render('restaurant-profile', { title: 'Narkal', signinSuccess: true })
            console.log('you logged in YAY!!!!!')
          } else {
            // log
            res.status(400).type('text/plain')
            .send("Incorrect email or password");
            }
        })
        .catch((err) => `>>> OOPS something went wrong ${err}`);
      }else {
        res.status(400).type('text/plain')
      .send("Bad email or password")
      }
    })
  })


module.exports = router;
