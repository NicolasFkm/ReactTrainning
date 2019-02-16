const express = require("express");

module.exports = function (server) {
    const Cursos = require("../controllers/cursos/CursoController");
    const Contatos = require("../controllers/contatos/ContatoController");

    const router = express.Router();
    server.use(`/api`, router);

    Cursos.register(router, "/cursos");
    Contatos.register(router, "/contatos");
}