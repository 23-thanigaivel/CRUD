
const mongoose = require('mongoose')

const connectDB = mongoose.connect("mongodb://127.0.0.1:27017/tution").then(()=>{
    console.log("Database wokring")
}).catch(()=>{
    console.log("not working")
})

module.exports = connectDB;