const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'subAdmin', 'regulator', 'superAdmin','user'], 
  },
  areas: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
