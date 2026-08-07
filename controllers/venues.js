const pool = require('../db/connection');
const userStrings = require("../sql/venueStrings");

module.exports = {
    // get all venues
    getAllVenues: async (req, res) => {
        const sqlQuery = venueStrings.getAllVenues;
        const [rows] = await pool.query(sqlQuery);
        res.json(rows);
    },

    // get venues by venue_id
    getVenueById: async (req, res) => {
        const { id } = req.params.id;
        const sqlQuery = venueStrings.getVenueById;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // get all shows at a given venue
    getVenueShows: async (req, res) => {
        const { id } = req.params.id;
        const sqlQuery = venueStrings.getVenueShows;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // create a new venue
    createVenue: async (req, res) => {
        const { name, address, booking_link } = req.body;
        const sqlQuery = venueStrings.createVenue;
        const inputs = [name, address, booking_link];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // update venue name
    updateVenueName: async (req, res) => {
        const { id, name } = req.body;
        const sqlQuery = venueStrings.updateVenueName;
        const inputs = [name, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // update venue booking link
    updateVenueBookingLink: async (req, res) => {
        const { id, booking_link } = req.body;
        const sqlQuery = venueStrings.updateVenueBookingLink;
        const inputs = [id, booking_link];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    deleteVenue: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = venueStrings.deleteVenue;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    }
}