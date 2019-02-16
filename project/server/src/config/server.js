const port = 3200;

// MIDDLEWARES
const bodyParser = require('body-parser');
const express = require('express');

const server = express();

const allowCors = require("./cors");

// Configura para que o body parser interprete as requisições no formato url encoded
server.use(bodyParser.urlencoded({extended: true}));

// Considera o formato json no corpo da requisição
server.use(bodyParser.json());

server.use(allowCors);

server.get("/", function(req, res){
    res.send("Nodezada");
});

server.listen(port, function(){
    console.log("Server ON!");
})

module.exports = server;