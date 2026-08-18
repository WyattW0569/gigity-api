const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));
app.use(express.json());

const router = require('./routes/routes');
app.use('/', router);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
