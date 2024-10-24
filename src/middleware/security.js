'use strict'
const jwt = require("jsonwebtoken");
const secretKey = 'clave_secreta_';



function verify (token) {
    try {
     return jwt.verify(token, secretKey);
    }
    catch(err){
      return null;
    }
}

module.exports = {

  generate: function(userid,username,role) {
    var token = jwt.sign({ userid: userid, username: username, role:role }, secretKey,{ expiresIn: "1h" });
    return token;
  },

  authenticated: function (req, res, next){
    if(!req.headers.authorization && !req.body.token){
        return res.status(403).send({message: 'La peticion no tiene la cabecera de autenticación'});
    } else {
        if(req.headers.authorization)
          {
            var token = req.headers.authorization.split(" ")[1];
            var payload = verify(token);
            if(payload){
            req.user = payload;
            next();
          }else  return res.status(400).json({succes: false, message: 'Invalid Token'});
         }
        else {
            var payload = verify(req.body.token);
            if(payload) {
            req.user = payload;
            return res.status(200).json({succes: true, message: 'Ok'});
            }else  return res.status(400).json({succes: false, message: 'Invalid Token'});
          }
    }
 },
 decodeToken: function(req){
            var token = req.headers.authorization.split(" ")[1];
            var payload = verify(token);
            return payload;
 }
}
