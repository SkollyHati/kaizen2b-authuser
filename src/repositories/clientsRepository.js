const  Client  = require('../models').Clients;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const getClientById = async (data) =>
{
  try {
  return await Client.findOne({where: {Clientname: data }});
  }
  catch {
    return null;
  }
};

const getClientByName = async (data) =>
  {
   return await Client.findOne({where: {Clientname: data }});
  }


const getClientByCUIT = async (data) =>
  {
    try{
    return await Client.findOne({where: {cuit: data }});
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
      try  {
        return await Client.findAll({attributes:['id','company_name','cuit','status']})
              }
        catch(e){
          return (e);
        }

    };

const updateClient = async (data) => {
  var Client  = getClientById(data.id);
  Client.usuario = data;
  Client.save();
  return true;
}



module.exports = { updateClient, getClients, getClientByCUIT, getClientByName, createClient, getClientById}
