const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
