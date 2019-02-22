import * as Constantes from '../actions/inputTypes';

const estadoInicial = {
    contatos: [],
    imagem: '',
    nome: '',
    telefone: '',
}

const ContatosReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        
        case Constantes.CONTATO_LISTAR:
            return {
                ...state,
                contatos: action.contatos
            };

        case Constantes.CONTATO_IMAGEM:
            return {
                ...state,
                imagem: action.imagem
            };
        
        case Constantes.CONTATO_NOME:
            return {
                ...state,
                nome: action.nome
            };
        
        case Constantes.CONTATO_TELEFONE:
            return {
                ...state,
                telefone: action.telefone
            };

        
        case Constantes.CONTATO_INCLUIR:
            return {
                ...state
            }

        case Constantes.CONTATO_REMOVER:
            return {
                ...state
            }

        default:
            return state;
    }
}

export default ContatosReducer;