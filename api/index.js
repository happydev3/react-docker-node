const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes');
dotenv.config();

const app = express();

const corsOptions = {
    origin: process.env.ALLOW_ACCESS_CORS_ORIGIN,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use('/', router);

const listener = app.listen(process.env.PORT || 8000, () => {
    console.log(`API running on port ${listener.address().port}`)
})