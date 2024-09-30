const express = require('express');
const routerApi = require('./src/routes');
const logger        = require('morgan');
const port = 3005;
const http = require('http');
const app = express();

routerApi(app);
app.use("/swagger", require("./src/routes/api-doc"));
app.use(express.json());
app.use(logger('dev'));
/*

*/
const server = http.createServer(app);
server.listen(port, () => {
  console.log('Corriendo en puerto ' + port);
});
