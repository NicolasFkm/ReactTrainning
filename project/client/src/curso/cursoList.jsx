import React, { Component } from 'react';

export default class CursoList extends Component {
    constructor(props) {
        super(props);
        this.exibirLinhas = this.exibirLinhas.bind(this);
    }

    exibirLinhas() {
        const cursos = this.props.cursos || [];
        return cursos.map(curso => (
            <tr key={curso.id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>
                <td>{curso.preco}</td>
                <td>
                    <button className="btn btn-success"
                        onClick={() => this.props.consultarCurso(curso)}>
                        <i className="fa fa-check"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.removerCurso(curso)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <div>
                <h3>Lista de Cursos</h3>
                <table className="table table-striped">
                    <thead>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {this.exibirLinhas()}
                    </tbody>
                </table>
            </div>
        );
    }
}