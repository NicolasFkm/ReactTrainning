const Contatos = require("../../models/contatos/ContatosModel.js")

Contatos.methods(['get', 'post', 'put', 'delete']);
Contatos.updateOptions({new: true, runValidators: true});

module.exports = Contatos;