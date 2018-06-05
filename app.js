'use strict';

const createError = require('http-errors')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config(); // require and init
const indexRouter = require('./routes/index');
const usersSignUpRouter = require('./routes/users-signup');
const restaurantSignUpRouter = require('./routes/restaurant-signup')
const restaurantInfoRouter = require('./routes/restaurantInfo');
const restaurantProfileRouter = require('./routes/restaurant-profile');
const restTypeRouter = require('./routes/restType');
const cultureRouter = require('./routes/cultureConvenience');
const dietaryRouter = require('./routes/dietary');
const allergiesRouter = require('./routes/foodAllergies');
const foodTypeRouter = require('./routes/foodType');
const specialtiesRouter = require('./routes/specialties');

const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users-signup', usersSignUpRouter);
app.use('/restaurant-signup', restaurantSignUpRouter);
app.use('/restaurant-info', restaurantInfoRouter)
app.use('/restaurant-profile', restaurantProfileRouter);
app.use('/restaurant-type', restTypeRouter)
app.use('/culture-convenience', cultureRouter);
app.use('/dietary', dietaryRouter);
app.use('/food-allergies', allergiesRouter);
app.use('/food-type', foodTypeRouter);
app.use('/specialties', specialtiesRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Listening on port', port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
