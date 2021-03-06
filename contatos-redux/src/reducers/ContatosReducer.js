import * as Constantes from '../actions/inputTypes';

const estadoInicial = {
    novoContato: {},
    contatoRemovido: {},
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
                ...state,
                novoContato: action.novoContato
            }

        case Constantes.CONTATO_REMOVER:
            return {
                ...state,
                contatoRemovidoId: action.contatoRemovidoId
            }

        default:
            return state;
    }
}

export default ContatosReducer;