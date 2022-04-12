const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
