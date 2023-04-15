const express = require('express');
const cors = require('cors');
// const routes = require('./routes');
const http = require('http');
const mongoose = require('mongoose');
const app = express();
const server = http.Server(app);
const dbConfig = require('./utils/db.config');


app.use(cors());
app.use(express.json());
// app.use(routes);

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error", () => {
    console.log("error while connecting to db");
});
db.once("open", () => {
    console.log("connected to MongoDB");
});

server.listen(process.env.LISTEN_PORT);

//We will meet back at 10:06 PM