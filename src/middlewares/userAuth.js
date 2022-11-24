const jwt = require("jsonwebtoken");
require('dotenv').config();

const authConfig = require('../service/auth.json')


module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(400).json({
            error:true,
            message: "Token nao fornecido"
        })
    }

    const parts = authHeader.split(" ");

    const [token] = parts;

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err){
            return res.status(401).json({
                error:true,
                message: "Token invalido"
            })
        }

        req.userLogged = decoded;

        return next();
    })
}
