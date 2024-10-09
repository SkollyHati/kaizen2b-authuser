'use strict'

var  User  = require('../models').users;
var  UserRoles  = require('../models').userRoles;
var  Roles  = require('../models').roles;
var  Security = require('../middleware/security');
const Sequelize     = require('sequelize');
const Op            = Sequelize.Op;

// Authenticate user
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


module.exports = {createUser,getUsers, getUserById, updateUser, updateBulkUsers, deleteUser, deleteBulkUsers}
