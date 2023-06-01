// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const Client = require('./models/userMod');
//const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, prodecure, appointment;
let users, prodecures, appointments;