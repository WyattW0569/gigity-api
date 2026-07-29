const pool = require('../db/connection');
const userStrings = require("../sql/userStrings");

module.exports = {

    // get all users
    getAllUsers: async (req, res) => {
        const sqlQuery = userStrings.getAllUsers;
        const [rows] = await pool.query(sqlQuery);
        res.json(rows);
    },

    // get user from id
    getUserById: async (req, res) => {
        const id = req.params.id
        const sqlQuery = userStrings.getUserById;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // get followed bands of specific user
    getFollowedBands: async (req, res) => {
        const id = req.params.id
        const sqlQuery = userStrings.getFollowedBands;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // create new user
    createUser: async (req, res) => {
        const { email, username, password, pfp_url } = req.body;
        const sqlQuery = userStrings.createUser;
        // add pass hashing
        password_hash = password;
        const inputs = [email, username, password_hash, pfp_url];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // update pfp
    updatePFP: async (req, res) => {
        const { id, pfp_url } = req.body;
        const sqlQuery = userStrings.updatePFP;
        const inputs = [pfp_url, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // update username
    updateUsername: async (req, res) => {
        const { id, username } = req.body;
        const sqlQuery = userStrings.updateUsername;
        const inputs = [username, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },
    // update password
    updatePassword: async (req, res) => {
        const { id, password } = req.body;
        const sqlQuery = userStrings.updatePassword;
        // add pass hashing
        password_hash = password;
        const inputs = [password_hash, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    }
}