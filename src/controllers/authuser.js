'use strict'

var  User  = require('../models').users;
var  UserRoles  = require('../models').userRoles;
var  Roles  = require('../models').roles;
var  Security = require('../middleware/security');

// Authenticate user
async function authuser(req, res){
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ message: "Usuario y clave son requeridos" });
    }
    const usuario = await User.findOne({where: {username: req.body.username }});
    if (!usuario) {
      return res.status(400).json({ message: "Usuario o clave inválidos" });
    }

    if(usuario.password !== req.body.password){
      return res.status(400).json({ message: "Clave incorrecta" });
    }

     const rolesUsuario = await UserRoles.findOne({where: {user_id: usuario.id}})

     const roles = await Roles.findOne({where: {id: rolesUsuario.role_id}})

    var token = Security.generate(usuario.id,usuario.username,roles.code);
      return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}


module.exports = {authuser}
