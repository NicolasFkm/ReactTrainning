import React, { Component } from 'react';
import ItemContato from './ItemContato';
import { connect } from 'react-redux';
import { removeContato  } from '../actions/ContatosActions'
import { bindActionCreators } from 'redux';

class ListaContato extends Component {

    render() {
        const { props } = this;
        return (
            <div>
                <div className="menu">
                    <ul>
                        <li>
                            {props.contatos.map(contato =>
                                <ItemContato key={contato.id} contato={contato} onRemover={()=>{props.removeContato(contato.id)}} />
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProp = state => ({
    contatos: state.ContatosReducer.contatos
})

const mapDispatchToProps = dispatch => bindActionCreators({
    removeContato
}, dispatch);

export default connect(mapStateToProp, mapDispatchToProps)(ListaContato)