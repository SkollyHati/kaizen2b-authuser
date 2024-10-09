const express = require('express');
const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const bodyParser    = require('body-parser');

function routerApi(app){
  const router = express.Router();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/api/v1', router);

  router.use('/auth', authRouter);
  router.use('/users', usersRouter);

}

module.exports = routerApi;
