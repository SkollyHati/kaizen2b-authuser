const express = require('express');
const router = express.Router();
const Sequelize     = require('sequelize');
var  User  = require('../models').users;
const Op            = Sequelize.Op;
const Controller = require('../controllers/authuser');
router.use(express.json());


/**
 * @swagger
 * definitions:
 *     Login:
 *         type: object
 *         properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 */

/**
 * @swagger
 *
 * /api/v1/auth/login:
 *   post:
 *     summary: Login.
 *     description: Login by FormBody
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *               $ref: "#/definitions/Login"
 *
 *     responses:
 *       "200":
 *         description: Ok
 *       "401":
 *         description: Authentication failed
 */

router.post('/login', async (req,res) => {
   return await Controller.authuser(req,res);
});


/**
 * @swagger
 *
 * /refresh:
 *   get:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         in: formData
 *         required: true
 *         type: string
 */
router.get("/verifyToken", async (req, res) => {
  return await Controller.verifyToken(req,res);
});


module.exports = router;
