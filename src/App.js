import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import CalculoImc from './CalculoIMC';
// import CalculoImposto from './CalculoImposto';
import Contato from './Contato';
import { ContatosService } from './ContatoService';
import ContatoCadastro from './ContatoCadastro';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contatos: []
    };

    this.remover = this.remover.bind(this);
    this.listar = this.listar.bind(this);
    this.adicionar = this.adicionar.bind(this);
  }

  adicionar(contato) {
    if (contato.imagem !== '' && contato.nome !== '' && contato.telefone !== '') {
        ContatosService.adicionar(contato)
          .then(()=>{
            this.listar();
          });
        
    }
  }

  componentDidMount() {
    this.listar();
  }

  async listar(){
    const contatos = await ContatosService.listar();
	  this.setState({
		  contatos
	  });
  }

  remover(contatoId) {
    const { contatos } = this.state,
      index = contatos.findIndex(contato => contato.id === contatoId);
    
    contatos.splice(index, 1);

    ContatosService.remover(contatoId);

    this.setState({
      contatos
    });
      
  }

  render() {

    const {state} = this;

    return (
      <div>
        <div className="menu">
          <ul>
            <li>
              {state.contatos.map(contato=>
                <Contato key={contato.id} contato = {contato} onRemover = {this.remover}/>
              )}
            </li>
          </ul>
        </div>
		<div>
			<ContatoCadastro onAdicionar={this.adicionar}/>
		</div>
      </div>
    );
  }
}

export default App;
