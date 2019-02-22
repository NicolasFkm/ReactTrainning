import React, { Component } from 'react';
import { mudaTextoImagem, mudaTextoNome, mudaTextoTelefone, clickButton  } from '../actions/ContatosActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class NovoContato extends Component {

    render() {
        const { clickButton, mudaTextoImagem, mudaTextoNome, mudaTextoTelefone, imagem, nome, telefone } = this.props;

        return (
            <div className="centraliza">
                <div className="form borda">
                    <div className="form-field">
                        <input name="nome" type="text" value={nome} placeholder="Digite seu nome" onChange={mudaTextoNome} />
                    </div>
                    <div className="form-field">
                        <input name="telefone" type="text" value={telefone} placeholder="Digite seu telefone" onChange={mudaTextoTelefone} />
                    </div>
                    <div className="form-field">
                        <input name="imagem" type="text" value={imagem} placeholder="Digite seu imagem" onChange={mudaTextoImagem} />
                    </div>
                    <div className="btn btn-send">
                        <button 
                        onClick={() => { clickButton({
                                nome, 
                                telefone,
                                imagem,
                            })
                        }}>
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    nome: state.ContatosReducer.nome,
    telefone: state.ContatosReducer.telefone,
    imagem: state.ContatosReducer.imagem
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(
        {
            clickButton, 
            mudaTextoImagem,
            mudaTextoNome,
            mudaTextoTelefone
        }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NovoContato);