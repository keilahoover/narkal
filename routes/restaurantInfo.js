const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/:uid', (req, res, next) => {
  knex('restaurant')
    .select('*')
    .then((info) => {
      res.render('restaurant-info', {
        title: 'Restaurant Details',
        info,
        uid: req.params.uid
      })
    })
    .catch((err) => `No Details --> ${err}`)
})



router.post('/', (req, res, next) => {
  console.log('req.body ', req.body)
  //parse info from headers/cookies/jwt
  //create const w/ cookie/id from user
  knex('restaurant')
    .insert({
      // id = cookie.id
        restName: req.body.restName,
        email: req.body.email,
        hoursOperation: req.body.hoursOperation,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        phone: req.body.phone,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        twitter: req.body.twitter,
        profileImg: req.body.profileImg,
        menuImg: req.body.menuImg,
        expense_1: req.body.expense_1,
        expense_2: req.body.expense_2,
        expense_3: req.body.expense_3,
        expense_4: req.body.expense_4
      }, '*')
    .then((rest) => {
      console.log("here I am")
      console.log("rest ", rest)
      const newObj = {
        id: rest[0].id,
        restName: rest[0].restName,
        email: rest[0].email,
        hoursOperation: rest[0].hoursOperation,
        streetAddress: rest[0].streetAddress,
        city: rest[0].city,
        state: rest[0].state,
        zip: rest[0].zip,
        phone: rest[0].phone,
        facebook: rest[0].facebook,
        instagram: rest[0].instagram,
        twitter: rest[0].twitter,
        profileImg: rest[0].profileImg,
        menuImg: rest[0].menuImg,
        expense_1: rest[0].expense_1,
        expense_2: rest[0].expense_2,
        expense_3: rest[0].expense_3,
        expense_4: rest[0].expense_4
      }
      res.send(newObj);
    })
    .catch((err) => {
      next(err);
    })
})

module.exports = router;
