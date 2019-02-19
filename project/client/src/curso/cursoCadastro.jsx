import React, { Component } from 'react';
import CursoForm from './cursoForm';
import CursoList from './cursoList';
import axios from 'axios';

export default class CursoCadastro extends Component {
    URL = "http://localhost:3200/api/cursos";

    constructor(props) {
        super(props);
        this.state = {
            curso: {
                codigo: '',
                descricao: '',
                cargaHoraria: '',
                preco: '',
                categoria: 'ENGENHARIA',
            },
            cursos: []
        }

        this.inputHandler = this.inputHandler.bind(this);
        this.adicionarCurso = this.adicionarCurso.bind(this);
        this.removerCurso = this.removerCurso.bind(this);
        this.consultarCurso = this.consultarCurso.bind(this);

        this.listar();
    }

    consultarCurso(curso) {
        axios.get(`${this.URL}/${curso._id}`)
            .then(response => {
                this.setState(
                    {
                        ...this.state,
                        curso:{
                            codigo: response.data.codigo,
                            descricao: response.data.descricao,
                            cargaHoraria: response.data.cargaHoraria,
                            preco: response.data.preco,
                            categoria: response.data.categoria
                        }
                    });
            });
    }

    inputHandler(event) {
        const { curso } = this.state;
        const { target } = event;
        const { name, value } = target;
        curso[name] = value;
        this.setState({
            ...this.state,
            curso
        });
    }

    render() {
        const { curso } = this.state;
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm
                        codigo={curso.codigo}
                        descricao={curso.descricao}
                        cargaHoraria={curso.cargaHoraria}
                        preco={curso.preco}
                        categoria={curso.categoria}
                        inputHandler={this.inputHandler}
                        onAdicionar={this.adicionarCurso}
                    />
                </div>
                <div className="col-md-6">
                    <CursoList
                        cursos={this.state.cursos}
                        removerCurso={this.removerCurso}
                        consultarCurso={this.consultarCurso}
                    />
                </div>
            </div>
        );
    }

    adicionarCurso(e) {
        e.preventDefault();
        const { curso } = this.state;
        // const codigo = curso.codigo;
        // const descricao = curso.descricao;
        // const cargaHoraria = curso.cargaHoraria;
        // const preco = curso.preco;
        // const categoria = curso.categoria;

        axios.post(this.URL, curso)
            .then(response => {
                this.listar();
            }
            );

    }

    removerCurso(curso) {
        if (window.confirm("Tem certeza que deseja remover este curso?")) {
            axios.delete(`${this.URL}/${curso._id}`)
                .then(response => this.listar());
        }

    }

    listar() {
        axios.get(this.URL).then(response => this.setState({
            cursos:
                response.data
        }))
    }

}