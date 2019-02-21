import * as Constantes from "./actionTypes";

export const clickButton = valor => ({
    type: Constantes.CLICK_BUTTON,
    novoValor: valor
})

export const changeTextValue = valor => ({
    type: Constantes.TEXT_CHANGE,
    valorAtual: valor
})