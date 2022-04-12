const { Event } = require('../models');

/**
 * Create a event
 * @param {Object} eventBody
 * @returns {Promise<Event>}
 */
const createEvent = async (eventBody) => {
  return Event.create(eventBody);
};

const queryEvents = async (filter, options) => {
  const events = await Event.paginate(filter, options);
  return events;
};

module.exports = {
  createEvent,
  queryEvents,
};
