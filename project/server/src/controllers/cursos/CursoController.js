const Cursos = require('../../models/cursos/CursosModel');

Cursos.methods(['get', 'post', 'put', 'delete']);
Cursos.updateOptions({new: true, runValidators: true});

module.exports = Cursos;