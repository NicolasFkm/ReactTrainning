import * as Constantes from '../actions/inputTypes';

const ContatosReducer = (contatos = [], action) => {
    switch (action.type) {
        case Constantes.CONTATO_LISTAR:
            return action.contatos

        default:
            return contatos;
    }
}

export default ContatosReducer;