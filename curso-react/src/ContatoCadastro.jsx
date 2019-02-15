import React, { Component } from 'react';
import { ContatosService } from './ContatoService';

export default class ContatoCadastro extends Component {

    static defaultValue = {
        imagem: '',
        nome: '',
        telefone: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            contato: {
                imagem: '',
                nome: '',
                telefone: ''
            }
        };
        this.onAdicionar = this.onAdicionar.bind(this);
        this.changeData = this.changeData.bind(this);
    }

    changeData(event) {
        const { contato } = this.state;
        const { target } = event;
        const { name, value } = target;
        contato[name] = value;
        this.setState({
            contato
        });
    }

    onAdicionar() {
        const { contato } = this.state;
        contato.imagem = `./imagens/${contato.imagem}`;
        this.setState({
            contato
        });

        this.props.onAdicionar(contato);
    }

    render() {
        const { contato } = this.state;

        return (
            <div className="form">
                <div className="form-field">
                    <input name="imagem" type="text" value={contato.imagem} placeholder="Digite seu imagem" onChange={this.changeData} />
                </div>
                <div className="form-field">
                    <input name="nome" type="text" value={contato.nome} placeholder="Digite seu nome" onChange={this.changeData} />
                </div>
                <div className="form-field">
                    <input name="telefone" type="text" value={contato.telefone} placeholder="Digite seu telefone" onChange={this.changeData} />
                </div>
                <div className="btn btn-send">
                    <button onClick={this.onAdicionar}>Cadastrar</button>
                </div>
            </div>
        );
    }

}