const mongoose = require("mongoose");

const connectDB = mongoose
  .connect(
    "mongodb+srv://vellesnar:velambrose@cluster0.bk4fzut.mongodb.net/crud"
  )
  .then(() => {
    console.log("Database wokring");
  })
  .catch(() => {
    console.log("not working");
  });

module.exports = connectDB;
