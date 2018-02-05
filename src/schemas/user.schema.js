var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  Id: {
    type: String,
    required: true
  },
  Fname: {
    type: String,
    required: true
  },
  Mname: {
    type: String,
    required: false
  },
  Lname: {
    type: String,
    required: true
  },
  Bday: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  CivilStatus: {
    type: String,
    required: true
  },
  Bplace: {
    type: String,
    required: true
  },
  MobCellNumber: {
    type: String,
    required: false
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  Address: {
    type: String,
    required: true
  },
  UserName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

var user = mongoose.model('User', userSchema);

module.exports = user;