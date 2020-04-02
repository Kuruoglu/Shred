const jwt = require('jsonwebtoken');

async function checkJwt(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    if(!authHeader) {
        next(new Error('token is required'));
    }
    const [keyword, token] = authHeader.split(' ');
    if(keyword !== 'Bearer') {
        return next(new Error('invalid token signature'));
    }
    try{
        const decoded = await jwt.verify(token, 'mySecret');
        req.userId = decoded.ololo;
        next()
    }catch (e) {
        next(e)
    }
}

module.exports = {
    checkJwt,
}