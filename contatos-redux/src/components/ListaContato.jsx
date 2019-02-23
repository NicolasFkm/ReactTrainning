import React, { Component } from 'react';
import ItemContato from './ItemContato';
import { connect } from 'react-redux';
import { removeContato, listar } from '../actions/ContatosActions'
import { bindActionCreators } from 'redux';

class ListaContato extends Component {

    componentDidUpdate (nextProps) {
        console.log(nextProps);
        console.log(this.props);
        
        if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
            this.props.listar();
        }
    }

    render() {
        const { props } = this;
        return (
            <div>
                <div className="menu">
                    <ul>
                        <li>
                            {props.contatos.map(contato =>
                                <ItemContato key={contato.id}
                                    contato={contato}
                                    onRemover={() => { props.removeContato(contato.id) }}
                                />
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProp = state => ({
    contatos: state.ContatosReducer.contatos,
    novoContato: state.ContatosReducer.novoContato,
    contatoRemovidoId: state.ContatosReducer.contatoRemovidoId

})

const mapDispatchToProps = dispatch => bindActionCreators({
    removeContato,
    listar
}, dispatch);

export default connect(mapStateToProp, mapDispatchToProps)(ListaContato)