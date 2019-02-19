import React, { Component } from 'react';

export default class CursoForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        return (
            <div className="border-right pl-3 r-3">
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="codigo"
                            className="col-sm-3 col-form-label">
                            Código:
                        </label>
                        <div className="col-sm-5 col-6">
                            <input type="number"
                                className="form-control" id="codigo" onChange={this.props.inputHandler} value={props.codigo} name="codigo" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="descrição"
                            className="col-sm-3 col-form-label">
                            Descrição:
                        </label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="descricao" onChange={this.props.inputHandler} value={props.descricao} name="descricao" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cargaHoraria"
                            className="col-sm-3 col-form-label">
                            Carga Horária:</label>
                        <div className="col-sm-5 col-6">
                            <input type="number"
                                className="form-control" id="cargaHoraria" onChange={this.props.inputHandler} value={props.cargaHoraria} name="cargaHoraria" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="preco"
                            className="col-sm-3 col-form-label">
                            Preço:</label>
                        <div className="col-sm-5 col-6">
                            <input type="text"
                                className="form-control" id="preco" onChange={this.props.inputHandler} value={props.preco} name="preco" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="categoria"
                            className="col-sm-3 col-form-label">Categoria:</label>
                        <div className="col-sm-6 col-6">
                            <select className="form-control" id="categoria" onChange={this.props.inputHandler} value={props.categoria} name="categoria" >
                                <option>INFORMATICA</option>
                                <option>ENGENHARIA</option>
                                <option>ADMINISTRACAO</option>
                                <option>REDES</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button onClick={this.props.onAdicionar}
                            className="btn btn-info ml-3 mb-3">
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}