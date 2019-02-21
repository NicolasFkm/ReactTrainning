import { CLICK_BUTTON, TEXT_CHANGE } from '../actions/actionTypes';

const estadoInicial = {
    novoValor: '',
    valorAtual: '',
};

export const inputReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case CLICK_BUTTON:
            return{
                ...state,
                novoValor: 'Após clique ' + action.novoValor
            };
        case TEXT_CHANGE:
            return{
                ...state,
                valorAtual: action.valorAtual
            };
        default:
            return state
    }
};