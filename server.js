const express = require('express');
const path = require('path');
const port = process.env.PORT || 80;
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
<<<<<<< HEAD
app.listen(port, () => console.log("server started at 80"));
=======
app.listen(port, () => console.log("server started at 80"));
>>>>>>> 9189c3042343886dee27624e18fc6cb9ceae1962
