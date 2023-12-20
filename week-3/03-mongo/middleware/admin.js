const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const {username, password} = req.headers;
        const adminExists = await Admin.findOne({username, password});
        if(adminExists) return next();
        res.status(403).send({msg: "Not Authorized"});
    }catch(err){
        res.status(500).send({msg: "Something went wrong"});
    }
}

module.exports = adminMiddleware;