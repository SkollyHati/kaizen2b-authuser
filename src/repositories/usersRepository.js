'use strict'
const  User  = require('../models').users;
const  Roles = require('../models').roles;
const UserRoles = require ('../models').userRoles;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const getUserById = async (data) =>
{
  var u = await User.findOne({where: {username: data }});
  var ur = await getUserRoles(u.id);
  var r = await getRoles(ur);
  var userDTO = {
    usuario: u,
    roles: r
  }

return userDTO;
};

const getUserByName = async (data) =>
  {
    try{
    var u = await User.findOne({where: {username: data }});
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

const getUserRoles = async (id) => {
  return  await UserRoles.findAll({where: {user_id: id}});
}

const getRoles = async (userrolelist) => {
  let roles = await Roles.findAll();
  let result = [];
  userrolelist.forEach((element) => result.push(roles.find(r=> r.id = element.id)))
  return result;
  }


const updateUserPassword = async (data) => {
  var user  = getUserById(data.id);
  user.password = data.password;
  user.save();
  return true;
}


module.exports = {updateUserPassword, updateUser, getUsers, getUserByCUIT, getUserByName, createUser, getUserById}
