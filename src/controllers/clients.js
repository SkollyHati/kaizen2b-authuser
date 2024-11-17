const ClientRepository = require('../repositories/clientsRepository');

async function getClients(req, res){
  try {
    let data = await ClientRepository.getClients();
    return res.status(200).send(data)
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
async function createClient(req, res){
  try {
    const Clientbuname = validateClient(data= {Clientname: req.body.Clientname })
    if (Clientbuname){

      return  res.status(400).json({ message: "Ya existe un usuario con el correo que desea ingresar" })
    }
    const Clientbycuit = validateClient(data= {cuit: req.body.cuit})
    if (Clientbycuit)
    {
      return  res.status(400).json({ message: "Ya existe un usuario con el CUIT que desea ingresar" });
    }
    else
    {
      return ClientRepository.createClient(req);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function getClientById(req, res){
  try {
    return Client.findOne({where: {id: parseInt(req.params.id)}}).then(usuario => res.status(200).send(usuario))
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function validateClient(data){
  try {
    if (data.username)return UserRepository.getUserByName(req.body.username);
    if (data.cuit) return UserRepository.getyUserByCUIT(req.body.cuit);
    else return null;
  }
  catch(e){
    return null;
  }

}

module.exports = {getClientById, createClient, getClients}
