var  Security = require('../middleware/security');
const UserRepository = require('../repositories/usersRepository');
// Users Logic
async function getUsers(req, res){
  try {
    let data = await UserRepository.getUsers();
    return res.status(200).send(data)
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
async function createUser(req, res){
  try {
    const userbyuname = validateUser(data= {username: req.body.username })
    if (userbyuname){

      return  res.status(400).json({ message: "Ya existe un usuario con el correo que desea ingresar" })
    }
    const userbycuit = validateUser(data= {cuit: req.body.cuit})
    if (userbycuit)
    {
      return  res.status(400).json({ message: "Ya existe un usuario con el CUIT que desea ingresar" });
    }
    else
    {
      return UserRepository.createUser(req);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function getUserById(req, res){
  try {
    const user = await UserRepository.getUserById(req.params.id);
    if (!user){
      return  res.status(400).json({ message: "Usuario no encontrado" });
    }
    else return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function getUserLogged(req, res){
  try{
    var decoded = Security.decodeToken(req,res);
    var user = await UserRepository.getUserById(decoded.userid);
      } catch (e) {
          return res.status(401).send('unauthorized');
      }
      return  res.status(200).json(user);
  }

async function updateUser(req, res){
  try {
    const usuario = await User.findOne({where: {id: req.params.id }});
    const newpassword = "Abzcde";
    usuario.password = newpassword;
    await usuario.save();
    return res.status(200).json({message: "User update"})
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function updateBulkUsers(req, res){
  try {
    return res.status(200).json({message: "User bulk update"})
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteUser(req, res){
  try {
    return res.status(200).json({message: "Delete users"})
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteBulkUsers(req, res){
  try {
    return res.status(200).json({message: "Delete bulk users"})
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

//
async function validateUser(data){
  try {
    if (data.username)return UserRepository.getUserByName(req.body.username);
    if (data.cuit) return UserRepository.getyUserByCUIT(req.body.cuit);
    else return null;
  }
  catch(e){
    return null;
  }

}

module.exports = {createUser, getUsers, getUserLogged, getUserById, updateUser, updateBulkUsers, deleteUser, deleteBulkUsers}
