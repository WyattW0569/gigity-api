const pool = require('../db/connection');
const userStrings = require("../sql/userStrings");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_ROUNDS = 10;


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
        const password_hash = await bcrypt.hash(password, SALT_ROUNDS);
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
        const password_hash = await bcrypt.hash(password, SALT_ROUNDS);
        const inputs = [password_hash, id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // delete user
    deleteUser: async (req, res) => {
        const id = req.params.id
        const sqlQuery = userStrings.deleteUser;
        const inputs = [id];
        const [rows] = await pool.query(sqlQuery, inputs);
        res.json(rows);
    },

    // login
    login: async (req, res) => {
        const { email, password } = req.body;
        const [rows] = await pool.query(userStrings.getUserByEmail, [email]);
        if (rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

        const user = rows[0];
        const match = await bcrypt.compare(password, user.hashed_password);
        if (!match) return res.status(401).json({ error: 'Invalid credentials' });

        const payload = {
            user_id: user.user_id,
            email: user.email,
            username: user.username,
            pfp_url: user.profile_picture_url,
            role: user.role
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token });
    },


}