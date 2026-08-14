const pool = require('../db/connection');
const bandStrings = require("../sql/bandStrings");

async function canEditBand(req, res, bandId) {
    const isAdmin = req.user.role === 'admin';
    if (isAdmin) return true;

    const [rows] = await pool.query(
        'SELECT 1 FROM Members WHERE user_id = ? AND band_id = ?',
        [req.user.user_id, bandId]
    );

    if (rows.length === 0) {
        res.status(403).json({ error: 'Not a member of this band' });
        return false;
    }
    return true;
}

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
        const newBandId = rows.insertId;
        await pool.query(
            'INSERT INTO Members (user_id, band_id) VALUES (?, ?)',
            [req.user.user_id, newBandId]
        );
        res.status(201).json({ band_id: newBandId });
    },

    updateBandPFP: async (req, res) => {
        const { id, icon_link } = req.body;
        const allowed = await canEditBand(req, res, id);
        if (!allowed) return;

        const sqlQuery = bandStrings.updateBandPFP;
        const inputs = [icon_link, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    updateBandName: async (req, res) => {
        const { id, name } = req.body;
        const allowed = await canEditBand(req, res, id);
        if (!allowed) return;
        const sqlQuery = bandStrings.updateBandName;
        const inputs = [name, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    deleteBand: async (req, res) => {
        const id = req.params.id;
        const allowed = await canEditBand(req, res, id);
        if (!allowed) return;

        const sqlQuery = bandStrings.deleteBand;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    getMemberCount: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = bandStrings.getMemberCount;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    getFollowerCount: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = bandStrings.getFollowerCount;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    getShowCount: async (req, res) => {
        const { id } = req.params;
        const sqlQuery = bandStrings.getShowCount;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

}