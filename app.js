var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var handlebars = require('handlebars')
// handlebars.registerPartial('head', '{{head}}')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;