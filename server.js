//import and requirements
const express = require('express')
const path = require('path');
const cors = require('cors');
const userRoute = require("./routes/api/userRoute");
const appointmentCont= require("./controllers/api/appointmentCont");

//const ensureLoggedIn = require('./config/ensureLoggedIn')
const passport = require('./config/passportConfig')
const session = require('express-session');

const logger = require('morgan');

require('dotenv').config()
require('./config/database')

const app = express()

app.use(logger('dev'))
app.use(express.json())


app.use(cors());
// Check if token and create req.user
app.use(require('./config/checkToken'));

app.use(express.static(path.join(__dirname, '../beautysite-front/build')));

//session middleware
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Put API routes here, before the "catch all" route
app.use('/user', userRoute);
// Protect the API routes below from anonymous users

app.use('/appointment', appointmentCont);


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname, '../beautysite-front/build', 'index.html'))
});


//listen on port
const port = process.env.PORT || 3001
app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });