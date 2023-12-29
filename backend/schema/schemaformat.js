const mongoose = require("mongoose");

const myDataPattern = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    gender: {
        type: String
    },
    city: {
        type: String
    },
    pass: {
        type: String
    },
    myPic: {
        type: String
    }

})

const myPattern = mongoose.model("ducatPro", myDataPattern);
module.exports = myPattern;

