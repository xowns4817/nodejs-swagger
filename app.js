const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const multer = require("multer");
const bodyParser = require('body-parser');
const upload = multer();

const swaggerDefinition = {
    info: { // API informations (required)
      title: 'Flogging ', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'Flogging API docs', // Description (optional)
    },
    host: 'localhost:3000', // Host (optional)
    basePath: '/', // Base path (optional)
  }

  const options = {
    // Import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // Path to the API docs
    apis: ['./trash.js']
  }
  
const UserRouter = require('./trash.js');

const swaggerSpec = swaggerJSDoc(options)

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(upload.array()); // for parsing multipart/form-data

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/trash', UserRouter);


app.listen(3000, function(req, res) {
    console.log("server connect ! ");
});