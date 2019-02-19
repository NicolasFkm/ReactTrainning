import React, { Component } from 'react';
import Cabecalho from '../menu/cabecalho';

export default class Contato extends Component {

    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo="Entre em contato conosco"/>
            </div>
        )
    }

}