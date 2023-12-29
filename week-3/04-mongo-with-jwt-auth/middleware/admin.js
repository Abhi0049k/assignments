// Middleware for handling auth
const jwt = require('jsonwebtoken');
const { ADMIN_JWT_SECRET } = require('..');

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(' ')[1];
    const decodedValue = jwt.verify(token, ADMIN_JWT_SECRET);
    if(decodedValue.username){
        req.headers.username = decodedValue.username;
        next();
    }else{
        res.status(403).send({msg: "You are not authorized"});
    }
}

module.exports = adminMiddleware;