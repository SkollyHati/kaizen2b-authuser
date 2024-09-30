const express = require('express');
const authRouter = require('./auth.router')
const bodyParser    = require('body-parser');

function routerApi(app){
  const router = express.Router();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/api/v1', router);

  router.use('/auth', authRouter);

}

module.exports = routerApi;
