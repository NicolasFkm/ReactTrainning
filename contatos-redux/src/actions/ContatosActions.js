import { CONTATO_LISTAR } from './inputTypes';
import { ContatosService } from '../services/ContatosService';

export const listar = () =>
{
    return async (dispatch) => {
        let contatos = await ContatosService.listar();
        dispatch({
            type: CONTATO_LISTAR,
            contatos
        });
    }
}