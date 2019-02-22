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
        var headers = new Headers();
        headers.set("Content-Type", "application/json");
        return fetch("http://localhost:4000/contatos/", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(contato)
        })
        .then(response => response.json());
    }
}