require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const tripRoutes = require("./routes/tripRoutes");
const userRoutes = require("./routes/userRoutes");


const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/trip", tripRoutes);
app.use("/user", userRoutes);


mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to DB");
    app.listen(process.env.PORT,() => {
        console.log(`App is listening on PORT ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});