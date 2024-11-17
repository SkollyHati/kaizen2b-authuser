const express = require('express');
const router = express.Router();
const Sequelize     = require('sequelize');
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
 *     
 *     Token:
 *         type: object
 *         properties:
 *            token:
 *              type: string
 *                 
 */

/**
 * @swagger
 *
 * /api/auth/login:
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
 *
  * /api/auth/verifyToken:
  *   post:
  *     summary: verifyToken.
  *     description: Verify received token
  *
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *            schema:
  *               $ref: "#/definitions/Token"
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


router.post("/verifyToken", async (req, res) => {
  return await Controller.verifyToken(req,res);
});


module.exports = router;
