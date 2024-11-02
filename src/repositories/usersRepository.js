'use strict'
const  User  = require('../models').Users;
const Roles = require('../models').Roles;
const Clients = require('../models').Clients;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const getUserById = async (data) =>
{
  try{
  return await User.findOne({where: {id: data }, include: [{model:Roles, as:'Roles'},  {model:Clients, as: 'Clients'}]})
  }
catch (e){
  console.log(e);
  return null}
};

const getUserByName = async (data) =>
  {
    try{

      return await User.findOne({where: {cuit: data }, include: Roles, include: Clients})
    }
    catch {
      return null;
    }
  };


const getUserByCUIT = async (data) =>
  {
    try{
    var u = await User.findOne({where: {cuit: data }});
    var ur = await getUserRoles(u.id);
    var r = await getRoles(ur);
    var userDTO = {
      usuario: u,
      roles: r
    }

  return userDTO;
    }
    catch {
      return null;
    }
  };

  const createUser = async (newUser) =>
    {
      try{
       return User.create(newUser);

      }
      catch(e) {
        return null;
      }
    }

const getUsers = async () =>
    {
      return User.findAll()
    };

const updateUser = async (data) => {
  var user  = getUserById(data.id);
  user.usuario = data;
  user.save();
  return true;
}

const updateUserPassword = async (data) => {
  var user  = getUserById(data.id);
  user.password = data.password;
  user.save();
  return true;
}


module.exports = {updateUserPassword, updateUser, getUsers, getUserByCUIT, getUserByName, createUser, getUserById}
