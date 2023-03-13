require('dotenv').config()
const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
app.use(express.json());
app.use(cors());

db();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));