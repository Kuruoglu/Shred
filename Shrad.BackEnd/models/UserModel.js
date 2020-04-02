const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    email: {
        type: String,
        reqired: true
    },
    phone: {
        type: String,
        reqired: false
    },
    password: {
        type: String,
        reqired: false
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;