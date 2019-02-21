import React, { Component } from 'react';
// import '../App.css';
import ItemContato from './ItemContato';
import NovoContato from './NovoContato';
import { ContatosService } from '../services/ContatosService';

export default class ListaContato extends Component {

    constructor(props) {
        super(props);
        this.remover = this.remover.bind(this);
    }

    remover(contatoId) {
        const { contatos } = this.props,
            index = contatos.findIndex(contato => contato.id === contatoId);

        contatos.splice(index, 1);

        ContatosService.remover(contatoId);

        this.setState({
            contatos
        });

    }

    render() {
        const { props } = this;

        return (
            <div>
                <div className="menu">
                    <ul>
                        <li>
                            {props.contatos.map(contato =>
                                <ItemContato key={contato.id} contato={contato} onRemover={this.remover} />
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}