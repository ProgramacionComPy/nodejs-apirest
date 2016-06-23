var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

// Index
router.get('/', function(req, res) {  
   res.send("Hola Mundo - www.programacion.com.py");
});

app.use(router);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});