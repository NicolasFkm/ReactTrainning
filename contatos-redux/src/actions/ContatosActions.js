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
    ContatosService.adicionar(item)
    return {
        type: CONTATO_INCLUIR,
        novoContato: item
    };

}

export const removeContato = id => {
    let contato = ContatosService.remover(id);
    return {
        type: CONTATO_REMOVER,
        contatoRemovido: contato
    }
}