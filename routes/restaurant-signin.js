const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
  res.render('restaurant-signin', {title: 'Restaurant SignIn'});
});

router.post('/', (req, res, next) => {
  console.log("post request sent")
  knex('restusers').where('email', req.body.email).then((data) => {
    if (data.length > 0) {
      console.log("data length ", data.length)
      const restUser = {
        id: data[0].id,
        email: data[0].email
      }
      const isSamePassword = bcrypt.compareSync(req.body.password, data[0].hashed_password);
      const KEY = process.env.JWT_KEY;
      if (isSamePassword && req.body.email === data[0].email) {
        let signedUser = jwt.sign(restUser, KEY)
        res.cookie('token', signedUser, {
          path: '/',
          httpOnly: true
        })
        res.send(200);
        // res.render('restaurant-profile', {
        //   title: 'Narkal',
        //   signinSuccess: true
        // })
        console.log('you logged in YAY!!!!!')
      } else {
        // log
        res.status(400).type('text/plain').send("Incorrect email or password");
      }
    } else {
      res.status(400).type('text/plain').send("Bad email or password")
    }
  })
})

module.exports = router;
