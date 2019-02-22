import React, { Component } from 'react'
// import './App.css';

class ItemContato extends Component {

    static defaultProps = {
        contato: {
            imagem: './imagens/img1.jpg',
            nome: '[Não informado]',
            telefone: '[Não informado]',
        },
        onRemover: () => { }
    }

    constructor(props) {
        super(props);
        this.remover = this.remover.bind(this);
    }

    remover() {
        const { props } = this;
        props.onRemover(props.contato.id);
    }

    render() {
        const { props } = this,
            { contato } = props;
        return (

            <div className='linha borda'>
                <div>
                    <button type="submit" className="botao align-right" onClick={this.remover}>
                        x
                </button>
                </div>
                <div className='centraliza'>
                    <img src={contato.imagem} width='150px' alt={contato.nome} />
                </div>
                <div>
                    <span><strong>Nome: </strong>{contato.nome}</span>
                </div>
                <div>
                    <span><strong>Telefone: </strong>{contato.telefone}</span>
                </div>

            </div>
        )
    }
}
export default ItemContato;