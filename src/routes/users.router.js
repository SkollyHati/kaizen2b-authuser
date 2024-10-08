const express = require('express');
const router = express.Router();
const Controller = require('../controllers/users');
var  Security = require('../middleware/security');
router.use(express.json());


router.get('/', Security.authenticated, async (req,res) => {
   return await Controller.getUsers(req,res);
});

router.get('/:id', Security.authenticated, async (req,res) => {
  return await Controller.getUserById(req,res);
});

router.put('/:id', Security.authenticated, async (req,res) => {
  return await Controller.updateUser(req,res);
});

router.post('/:id', Security.authenticated, async (req,res) => {
  return await Controller.createUser(req,res);
});

router.delete('/:id', Security.authenticated, async (req,res) => {
  return await Controller.deleteUser(req,res);
});

module.exports = router;
