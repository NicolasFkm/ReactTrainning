export const ContatosService = {
    listar() {
        return fetch("http://localhost:3200/contatos")
            .then(response => response.json())
    },
    remover(id) {
        return fetch(`http://localhost:3200/contatos/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
    },
    adicionar(contato) {
        var headers = new Headers();
        headers.set("Content-Type", "application/json");
        return fetch("http://localhost:3200/contatos/", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(contato)
            })
            .then(response => response.json())
    }
}