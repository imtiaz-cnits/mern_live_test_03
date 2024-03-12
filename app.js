// Lib Import
const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser());

// Database Connection
const URI = "mongodb://localhost:27017/mern_live_test_03";
const OPTION = { user: "", pass: "", autoIndex: true };
mongoose
  .connect(URI, OPTION)
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// route Implement
app.use("/api", router);

// 404 not found Implement
app.use("*", (req, res) => {
  res.status(404).json({ data: "Not found" });
});

module.exports = app;
