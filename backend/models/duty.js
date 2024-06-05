const mongoose = require('mongoose');

const dutySchema = new mongoose.Schema({
  checkbox: {
    type: Boolean,
    required: true,
    default: false
  },
  startTime: {
    type: Number,
    required: true
  },
  endTime: {
    type: Number,
    required: true
  },
  assignedArea: {
    type: String,
    required: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Duty', dutySchema);
