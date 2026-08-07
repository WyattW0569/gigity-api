const pool = require('../db/connection');
const bandStrings = require("../sql/bandStrings");

module.exports = {
    getAllBands: async (req, res) => {
        const sqlQuery = bandStrings.getAllBands;
        const [rows] = await pool.query(sqlQuery);
        res.json(rows);
    },

    getBandById: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = bandStrings.getBandById;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    getBandsPlayedWith: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = bandStrings.getBandsPlayedWith;
        const inputs = [id, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    getBandMembers: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = bandStrings.getBandMembers;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    getBandFollowers: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = bandStrings.getBandFollowers;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    getBandShows: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = bandStrings.getBandShows;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    createBand: async (req, res) => {
        const { name, icon_link } = req.body;
        const sqlQuery = bandStrings.createBand;
        const inputs = [name, icon_link];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    updateBandPFP: async (req, res) => {
        const { id, icon_link } = req.body;
        const sqlQuery = bandStrings.updateBandPFP;
        const inputs = [icon_link, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    updateBandName: async (req, res) => {
        const { id, name } = req.body;
        const sqlQuery = bandStrings.updateBandName;
        const inputs = [name, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    deleteBand: async (req, res) => {
        const id = req.params.id;
        const sqlQuery = bandStrings.deleteBand;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    }
}