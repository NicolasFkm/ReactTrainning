import React, { Component } from 'react';

export default class Cabecalho extends Component {
    constructor(props) {

        super(props);

    }

    render() {
        return(
            <header>
                <h2>
                    <strong>{this.props.titulo}</strong> - <small>{this.props.subtitulo}</small>
                </h2>
            </header>
        )
    }

}