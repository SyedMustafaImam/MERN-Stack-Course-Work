var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user.route');
var productRouter = require('./routes/product.route');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//mongoose db connection here
mongoose.connect("mongodb://localhost/productsDB",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log("Connected to the database");
})
.catch(err =>{
  console.log("Cannot connect to the database",err);
  process.exit();
});

app.use(session(
  {
  name:'sid',
  secret: 'random message', //this is needed for making a session key
  saveUninitialized: false, //for login sessions set it to false, setting to true means store blank sessions
  resave: false, 
  cookie: {
      expires: 600000 //or use maxAge ( takes in milliseconds value)
    }
  }
)
);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);


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
