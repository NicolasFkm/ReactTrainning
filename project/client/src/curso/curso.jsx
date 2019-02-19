import React, { Component } from 'react';
import Cabecalho from '../menu/cabecalho';
import CursoCadastro from './cursoCadastro';

export default class Curso extends Component {

    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="Cadastro de Cursos"/>
                <CursoCadastro/>
            </div>
        )
    }

}