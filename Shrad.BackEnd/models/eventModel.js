const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventStart: {
        type: Date,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: false
    }
})


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;