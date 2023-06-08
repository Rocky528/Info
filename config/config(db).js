const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://CandleStick_Tardepal:bohdanmike@cluster0.0cemq7w.mongodb.net/").then(() => {
    console.log("Database connected!");
}).catch((err) => {
    console.log(err, " error");
})                  