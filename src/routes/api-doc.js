const express = require("express");
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

//swagger Doc.
const swaggerOptions = {
  swaggerDefinition:{
    openapi: '3.1.0',
    info:{
      version: "1.0.0",
      title: "AuthUser - Security Documentation",
      contact:{
        name:"Lucas Ismael Gutierrez",
        url:"https://www.linkedin.com/in/lucas-gutierrez-856b49100/"
      },
      servers:["http://localhost:3005"]
    }
  }, basePath: "/",
  apis: ["./src/routes/*.js"],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;
