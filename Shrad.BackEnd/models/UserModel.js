const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
})