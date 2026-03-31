const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blacklist.model")

async function authUser(req, res, next) {

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Unauthorized, no token provided"
        })
    }

    const istokenBlacklisted = await tokenBlacklistModel.findOne({
        token 
    });

    if(istokenBlacklisted){
        return res.status(401).json({
            message: "Unauthorized, token is invalid"
        })
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded;

        next();
    }
    catch(err){
        return res.status(401).json({
            message: "Unauthorized, invalid token"
        })
    }
    
}

module.exports = {authUser};