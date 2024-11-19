'use strict'

const Security = require('../middleware/security');
const UserRepository = require('../repositories/usersRepository');
const bcrypt = require('bcrypt');

// Authenticate user
async function authuser(req, res){
  try {
    let validPassword="";
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ message: "Usuario y clave son requeridos" });
    }
    const usuario = await UserRepository.getUserByName(req.body.username);
    if (!usuario) {
      return res.status(400).json({ message: "Usuario o clave inválidos" });
    }
    if(usuario.status == 0){
      return res.status(400).json({message: "Usuario inactivo"})
    }
    await correctPassword(req.body.password, usuario.password).then(valid => validPassword=valid)
    if(!validPassword){
      return res.status(400).json({ message: "Clave incorrecta" });
    }

    var token =   Security.generate( usuario.id, usuario.username, usuario.role);
      return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function verifyToken(req, res){
  try {
    if (!req.body.token) {
      return res.status(400).json({ message: "Token not provided" });
    }
    Security.authenticated(req,res);

  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

const correctPassword = (enteredPassword, originalPassword) => {
  return new Promise(resolve => {
    bcrypt.compare(enteredPassword, originalPassword, (err, res) =>{
      resolve(res)
    });
  })
}

module.exports = {authuser, verifyToken}
