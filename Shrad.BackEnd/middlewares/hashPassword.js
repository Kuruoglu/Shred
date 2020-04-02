const bcrypt = require('bcrypt');

const saltAround = 10;

async function hashPassword(req, res, next) {
    try{
        const password = req.body.password;
        const salt = await bcrypt.genSalt(saltAround);
        const hash = await  bcrypt.hash(password, salt);
        req.body.password = hash;
        next()
    }
    catch (e) {
        next(e)
    }
}

module.exports = {
    hashPassword,
}