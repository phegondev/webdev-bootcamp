import express from 'express';
import db from '../models/index.js';
import auth from '../middleware/auth.js'


const router = express.Router();


// Get all events:localhost:8090/api/events
router.get('/', async (req, res) => {
    try {
        // This is the Sequelize query to find all events.
        const events = await db.Event.findAll({
            //It means to search the events table and include 
            // related data from the users and attendees tables for each event found.
            include: [
                { model: db.User, as: 'creator', attributes: ['id', 'name'] },// only fetch the id and name from the user table
                { model: db.Attendee, as: 'attendees' },
            ],
            // 'order' sorts the results.
            // The events are ordered by their date, from earliest to latest (ASC for ascending).
            order: [['date', 'ASC']]
        });

        res.json(events);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Create new event (protected)
router.post('/', auth, async (req, res) => {
    try {
        const event = await db.Event.create({
            ...req.body,
            userId: req.user.id
        });
        res.status(201).json(event);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})



// Filter/ search events
router.get('/filter', async (req, res) => {
    try {
        const { date, location } = req.query;
        const where = {};

        //search for all events whose date that is equal to or greater than the date being passed in.
        // so all future events from the data will also be fetched along
        if (date) {
            where.date = {
                [db.Sequelize.Op.gte]: new Date(date)
            };
        }

        if (location) {
            where.location = {
                [db.Sequelize.Op.like]: `%${location}%`
            };
        }

        const events = await db.Event.findAll({
            where,
            include: [
                { model: db.User, as: 'creator', attributes: ['id', 'name'] },// only fetch the id and name from the user table
                { model: db.Attendee, as: 'attendees' },
            ],
            order: [['date', 'ASC']]
        });
        res.json(events);

    } catch (error) {
        res.status(500).json({ error: error.message });

    }
});




// RSVP to event (protected). // register for an event
router.post('/:id/rsvp', auth, async (req, res) => {
    try {
        const eventId = req.params.id;

        const event = await db.Event.findByPk(eventId)

        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        const attendee = await db.Attendee.create({
            ...req.body,
            eventId: eventId,
            userId: req.user.id
        });

        res.status(201).json(attendee);

    } catch (error) {
        res.status(400).json({ error: error.message });

    }
});


export default router;