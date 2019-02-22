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
            if(action.contatos != undefined){
                var contatos = action.contatos.push(action.novoContato)
            }
            return {
                ...state,
                contatos
            }

        case Constantes.CONTATO_REMOVER:
            
            var index = state.contatos.indexOf(action.contatoRemovido);    
            state.contatos.splice(index, 1);
            return {
                ...state,
                contatos: state.contatos
            }

        default:
            return state;
    }
}

export default ContatosReducer;