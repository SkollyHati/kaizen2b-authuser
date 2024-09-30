'use strict'
const jwt = require("jsonwebtoken");
var secretKey = 'clave_secreta_';

module.exports = { generate: function(userid,username,role) {
    jwt.sign(({ userid,username,role }, secretKey, { expiresIn: "1h" }))
    return jwt;
  }
}
