const express = require('express');
const router = express.Router();
const Controller = require('../controllers/clients');
var  Security = require('../middleware/security');
router.use(express.json());


router.get('/all', Security.authenticated, async (req,res) => {
   return await Controller.getClients(req,res);
});


router.get('/:id', Security.authenticated, async (req,res) => {
  return await Controller.getClientsbyId(req,res);
});

router.put('/:id', Security.authenticated, async (req,res) => {
  return await Controller.updateClient(req,res);
});

router.post('/', Security.authenticated, async (req,res) => {
  return await Controller.createClient(req,res);
});

router.delete('/:id', Security.authenticated, async (req,res) => {
  return await Controller.deleteClient(req,res);
});

module.exports = router;
