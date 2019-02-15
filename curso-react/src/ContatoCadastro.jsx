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
        this.adicionar = this.adicionar.bind(this);
        this.changeData = this.changeData.bind(this);
    }

    adicionar() {
        const { contato } = this.state;
        console.log(this.state);
        if (contato.imagem !== '' && contato.nome !== '' && contato.telefone !== '') {
            contato.imagem = `./imagens/${contato.imagem}`;
            this.setState({
                contato
            });
            
            ContatosService.adicionar(contato);
        }
    }

    changeData(event){
        const { contato } = this.state;
        const {target} = event;
        const {name,value} = target;
        contato[name] = value;
        this.setState({
            contato
        });
    }

    render() {
        const { contato } = this.state;

        return (
            <div className="form">
                <div className="form-field">
                    <input name="imagem" type="text" value={contato.imagem} placeholder="Digite seu imagem" onChange={this.changeData} />
                </div>
                <div className="form-field">
                    <input name="nome" type="text" value={contato.nome} placeholder="Digite seu nome" onChange={this.changeData}/>
                </div>
                <div className="form-field">
                    <input name="telefone" type="text" value={contato.telefone} placeholder="Digite seu telefone" onChange={this.changeData}/>
                </div>
                <div className="btn btn-send">
                    <button onClick={this.adicionar}>Cadastrar</button>
                </div>
            </div>
        );
    }

}