const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  guardianemail:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);