const jwt = require('jsonwebtoken');
const { USER_JWT_SECRET } = require('..');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(' ')[1];
    const decodedValue = jwt.verify(token, USER_JWT_SECRET);
    if(decodedValue.username){
        req.headers.username = decodedValue.username;
        next();
    }else{
        res.status(403).send({msg: "You are not authorized"});
    }
}

module.exports = userMiddleware;