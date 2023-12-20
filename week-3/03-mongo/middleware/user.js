const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const {username, password} = req.headers;
        const userExists = await User.findOne({username, password});
        if(userExists) return next();
        res.status(403).send({msg: "Not Authorized"});
    }catch(err){
        res.status(500).send({msg: "Something went wrong"});
    }
}

module.exports = userMiddleware;