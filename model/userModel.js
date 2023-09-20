const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    gender : String,
    status : String
})

module.exports = mongoose.model("userss",userSchema);