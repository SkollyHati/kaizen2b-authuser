'use strict'
const  Client  = require('../models').Clients;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const getClientById = async (data) =>
{
  var u = await Client.findOne({where: {Clientname: data }});
  var ur = await getClientRoles(u.id);
  var r = await getRoles(ur);
  var ClientDTO = {
    usuario: u,
    roles: r
  }

return ClientDTO;
};

const getClientByName = async (data) =>
  {
    try{
    var u = await Client.findOne({where: {Clientname: data }});
    var ur = await getClientRoles(u.id);
    var r = await getRoles(ur);
    var ClientDTO = {
      usuario: u,
      roles: r
    }

  return ClientDTO;
    }
    catch {
      return null;
    }
  };


const getClientByCUIT = async (data) =>
  {
    try{
    var u = await Client.findOne({where: {cuit: data }});
    var ur = await getClientRoles(u.id);
    var r = await getRoles(ur);
    var ClientDTO = {
      usuario: u,
      roles: r
    }

  return ClientDTO;
    }
    catch {
      return null;
    }
  };

  const createClient = async (newClient) =>
    {
      try{
       return Client.create(newClient);

      }
      catch(e) {
        return null;
      }
    }

const getClients = async () =>
    {
      return Client.findAll()
    };

const updateClient = async (data) => {
  var Client  = getClientById(data.id);
  Client.usuario = data;
  Client.save();
  return true;
}



module.exports = { updateClient, getClients, getClientByCUIT, getClientByName, createClient, getClientById}
