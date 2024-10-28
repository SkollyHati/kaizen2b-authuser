const express = require('express');
const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const clientsRouter = require('./clients.router');
const bodyParser    = require('body-parser');

function routerApi(app){
  const router = express.Router();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/api/', router);

  router.use('/auth', authRouter);
  router.use('/users', usersRouter);
  router.use('/clients', clientsRouter);

}

module.exports = routerApi;
