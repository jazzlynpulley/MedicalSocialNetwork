var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var docSchema = new Schema({
  title: String,
  description: Number
});
module.exports = mongoose.model('MedicalSocialNetwork', docSchema);
