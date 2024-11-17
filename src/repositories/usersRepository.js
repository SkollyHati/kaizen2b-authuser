'use strict'
const  User  = require('../models').Users;
const Roles = require('../models').Roles;
const Clients = require('../models').Clients;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const getUserById = async (data) =>
{
  try{
   let userfind = await User.findOne({where: {id: data }, include: [{model:Roles, as:'Roles'},  {model:Clients, as: 'Clients'}]});

   let response = {
    id: userfind.id,
    username: userfind.username,
    firstname: userfind.firstname,
    lastname: userfind.lastname,
    cuil: userfind.cuil,
    client: {
      id: userfind.Clients.id,
      company_name: userfind.Clients.company_name,
      company_cuit: userfind.Clients.cuit
    },
    role: userfind.Roles[0].code
   }
   return response;
  }
catch (e){
  console.log(e);
  return null
}
};

const getUserByName = async (data) =>
  {
    try{

      let userfind = await User.findOne({where: {username: data }, include: [{model:Roles, as:'Roles'},  {model:Clients, as: 'Clients'}]});

      let response = {
        id: userfind.id,
        username: userfind.username,
        firstname: userfind.firstname,
        lastname: userfind.lastname,
        cuil: userfind.cuil,
        password: userfind.password,
        client: {
          id: userfind.Clients.id,
          company_name: userfind.Clients.company_name,
          company_cuit: userfind.Clients.cuit
        },
        role: userfind.Roles[0].code
       }

       return response;
    }
    catch(e) {
      throw(e);
    }
  };


const getUserByCUIT = async (data) =>
  {
    try{

      let userfind = await User.findOne({where: {cuil: data }, include: [{model:Roles, as:'Roles'},  {model:Clients, as: 'Clients'}]});

      let response = {
        id: userfind.id,
        username: userfind.username,
        firstname: userfind.firstname,
        lastname: userfind.lastname,
        cuil: userfind.cuil,
        client: {
          id: userfind.Clients.id,
          company_name: userfind.Clients.company_name,
          company_cuit: userfind.Clients.cuit
        },
        role: userfind.Roles[0].code
       }

       return response;
    }
    catch(e) {
      throw(e);
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
      return await User.findAll({attributes:['id','username','email','firstname','lastname','cuil','client_id','status']})
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
