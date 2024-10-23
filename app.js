const express = require('express');
const routerApi = require('./src/routes');
const logger        = require('morgan');
const port = 3005;
const http = require('http');
const app = express();
const cors = require('cors');
const corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:80','http://localhost:5173/'] // Whitelist the domains you want to allow
};

routerApi(app);
app.use("/swagger", require("./src/swagger/api-doc"));
app.use(express.json());
app.use(logger('dev'));
app.use(cors(corsOptions));
/*

*/
const server = http.createServer(app);
server.listen(port, () => {
  console.log('Corriendo en puerto ' + port);
});
