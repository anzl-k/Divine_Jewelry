require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr =
  "mongodb+srv://bipin:bipin@cluster0.scqgwzc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(connectionStr, { useNewUrlparser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
