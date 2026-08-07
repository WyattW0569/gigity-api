const pool = require('../db/connection');
const userStrings = require("../sql/memberStrings");

module.exports = {
    // get all members from a given band
    getMembers: async(req,res) => {
        const { id } = req.params.id;
        const sqlQuery = memberStrings.getMembers;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // get all bands a given user is in
    getBandsbyMember: async(req,res) => {
        const { id } = req.params.id;
        const sqlQuery = memberStrings.getBandsbyMember;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // create a band member
    createMember: async(req,res) => {
        const{user_id, band_id} = req.body;
        const sqlQuery = memberStrings.createMember;
        const inputs = [user_id, band_id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    //remove a band member
    removeMember: async(req,res) => {
        const{user_id, band_id} = req.body;
        const sqlQuery = memberStrings.removeMember;
        const inputs = [user_id, band_id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    }
}