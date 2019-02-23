import axios from 'axios';

const URL = "http://localhost:4000";
export const ContatosService = {
    listar() {
        return fetch("http://localhost:4000/contatos")
            .then(response => response.json())
    },
    remover(id) {
        return fetch(`http://localhost:4000/contatos/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
    },
    adicionar(contato) {
        return axios.post(`${URL}/contatos`, contato)
    }
}