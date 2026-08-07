const pool = require('../db/connection');
const followerStrings = require('../sql/followerStrings');

module.exports = {

    // follow a band
    followBand: async (req, res) => {
        const { user_id, band_id } = req.body;
        const sqlQuery = followerStrings.followBand;
        const inputs = [user_id, band_id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // unfollow a band
    unfollowBand: async (req, res) => {
        const { user_id, band_id } = req.body;
        const sqlQuery = followerStrings.unfollowBand;
        const inputs = [user_id, band_id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    }
}
