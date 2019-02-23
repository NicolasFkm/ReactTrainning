import { CONTATO_LISTAR, CONTATO_IMAGEM, CONTATO_INCLUIR, CONTATO_NOME, CONTATO_TELEFONE, CONTATO_REMOVER } from './inputTypes';
import { ContatosService } from '../services/ContatosService';

export const listar = () => {
    return async (dispatch) => {
        let contatos = await ContatosService.listar();
        dispatch({
            type: CONTATO_LISTAR,
            contatos
        });
    }
}

export const mudaTextoImagem = e => ({
    type: CONTATO_IMAGEM,
    imagem: e.target.value
});

export const mudaTextoNome = e => ({
    type: CONTATO_NOME,
    nome: e.target.value
});

export const mudaTextoTelefone = e => ({
    type: CONTATO_TELEFONE,
    telefone: e.target.value
});

export const clickButton = item => {
    return async (dispatch) => {
        let contato = await ContatosService.adicionar(item);
        dispatch({
            type: CONTATO_INCLUIR,
            novoContato: contato
        });
    }
}

export const removeContato = id => {
    return async (dispatch) => {
        let contato = await ContatosService.remover(id);
        dispatch({
            type: CONTATO_REMOVER,
            contatoRemovidoId: id
        });
    }
}