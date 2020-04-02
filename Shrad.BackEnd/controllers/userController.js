const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

async function createUser(req, res, next) {
    try{
        const body = req.body;
        const newUser = new User(body);
        const addUser = await newUser.save();
       res.send(addUser);
    }
    catch (e) {
        next(e)
    }

}

async function getAllUser(req, res, next) {
    try{
        const users = await User.find();
        res.send(users);
    }
    catch (e) {
        next(e)
    }

}

async function login(req, res, next) {
    const email = req.body.email;
    const passwordToCompare = req.body.password;
try {
    const user = await User.findOne({email});
    if (!user) {next(new Error('Email or password is not valid'))};
    const isPasswordValid = await bcrypt.compare(passwordToCompare, user.password);
    if (isPasswordValid) {
        const token = await jwt.sign({ololo: user._id}, 'mySecret', {expiresIn: '1h'});
        return res.send({user, token})
    }

}
catch (e) {
    next(e)
}
}

module.exports ={
    createUser,
    getAllUser,
    login
}