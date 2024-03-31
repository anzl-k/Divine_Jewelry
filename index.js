const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
dotenv.config;

mongoose.connect(
    "mongodb+srv://kleakaraj:klea@divinejewelry.v6wzmmb.mongodb.net/DivineJewelry?retryWrites=true&w=majority&appName=DivineJewelry")
    .then(()=>console.log("DB Connection Succesful"))
    .catch((err)=>{
    console.log(err);
    });

    app.use(express.json());
   app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);




app.listen(process.sourceMapsEnabled.PORT || 5000, ()=>{
    console.log("Backend server is running");
});