//models/Expense.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  monthDOB: String,
  dayDOB: Number,
  yearDOB: Number
});
module.exports = mongoose.model('User', userSchema);
