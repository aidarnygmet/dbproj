var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var countryRouter = require('./routes/country');
var discoverRouter = require('./routes/discover');
var diseaseRouter = require('./routes/disease');
var disease_typeRouter = require('./routes/disease-type');
var doctorRouter = require('./routes/doctor');
var psRouter = require('./routes/public-servant');
var recRouter = require('./routes/record');
var specRouter = require('./routes/specialize');
var userRouter = require('./routes/user');
const port = process.env.PORT || 3000;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/country', countryRouter);
app.use('/discover', discoverRouter);
app.use('/disease', diseaseRouter);
app.use('/disease-type', disease_typeRouter);
app.use('/doctor', doctorRouter);
app.use('/public-servant', psRouter);
app.use('/record', recRouter);
app.use('/specialize', specRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.listen(3000,() => {
console.log("Started on PORT 3000");
})
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
