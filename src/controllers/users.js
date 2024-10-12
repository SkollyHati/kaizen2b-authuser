
// Users Logic
async function getUsers(req, res){
  try {
    let userlist = await User.findAll();
    return res.status(200).json({userlist})
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
async function createUser(req, res){
  try {
    return res.status(200).json({message: "Delete bulk users"})
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function getUserById(req, res){
  try {
    return User.findOne({where: {id: parseInt(req.params.id)}}).then(usuario => res.status(200).send(usuario))
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
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
async function getUserByName(username){

}

module.exports = {createUser,getUsers, getUserById, updateUser, updateBulkUsers, deleteUser, deleteBulkUsers, getUserByName}
