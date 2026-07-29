const pool = require('../db/connection');
const showStrings = require("../sql/showStrings");

module.exports = {
    getAllShows: async (req, res) => {
        const sqlQuery = showStrings.getAllShows;
        const [rows] = await pool.query(sqlQuery);
        res.json(rows);
    },

    getShowById: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = showStrings.getShowById;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    getShowsByDate: async (req, res) => {
        const { date } = req.params;
        const sqlQuery = showStrings.getShowsByDate;
        const inputs = [date];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    getLineup: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = showStrings.getLineup;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    getVenue: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = showStrings.getVenue;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    createShow: async (req, res) => {
        const { show_name, date, venue_id, ticket_link, bands } = req.body;
        const sqlQueryShow = showStrings.createShow;
        const sqlQueryLineup = showStrings.createLineup;
        const inputsShow = [show_name, date, venue_id, ticket_link];
        const [rowsShow] = await pool.query(sqlQueryShow, inputsShow);
        const show_id = rowsShow.insertId;
        for (const band_id of bands) {
            const inputsLineup = [show_id, band_id];
            await pool.query(sqlQueryLineup, inputsLineup);
        }
        res.status(201).json({ show_id });
    },

    updateShowName: async (req, res) => {
        const { id, show_name } = req.body;
        const sqlQuery = showStrings.updateShowName;
        const inputs = [show_name, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    updateShowDate: async (req, res) => {
        const { id, date } = req.body;
        const sqlQuery = showStrings.updateShowDate;
        const inputs = [date, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    updateShowVenue: async (req, res) => {
        const { id, venue_id } = req.body;
        const sqlQuery = showStrings.updateShowVenue;
        const inputs = [venue_id, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    updateShowTicketLink: async (req, res) => {
        const { id, ticket_link } = req.body;
        const sqlQuery = showStrings.updateShowTicketLink;
        const inputs = [ticket_link, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    }
}