const Event = require('../models/EventModel');
const moment = require('moment');

async function createEvent(req, res, next) {

    try{
        const body = req.body;
        const newEvent = Event(body);
        const addEvent = await newEvent.save();
        res.send(addEvent);
    }catch (e) {
        next(e);
    }
}
async function getEventByDate(req, res, next) {
console.log("SSSSSSSSSSS")

    const date = req.query;

console.log(date)
    try {

        let event = await Event.find();
        for( const key in date) {
            event = event.filter((item => {
                  moment(item[key]).format('YYYY-MM-DD') === date[key]
                console.log(date[key])
                // console.log('asdad ' + moment(item[key]).format('YYYY-MM-DD'))
            }))

        }

       res.send(event);
    } catch (e) {
        next(e)
    }
}
//  async function getAllEvents(req, res, next) {
//     console.log("FFFFFFF")
//     try{
//         const events = await Event.find();
//         res.send(events);
//     }catch (e) {
//         next(e)
//     }
// }


module.exports = {
    createEvent,
    // getAllEvents,
    getEventByDate
};