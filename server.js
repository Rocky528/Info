const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const User_router = require('./routes/User-router')
require('./config/config(db)');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client')));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname + '/client', 'index.html'));
});
app.use("/api/users", User_router);
app.listen(port, () => console.log("server started at 3001"));