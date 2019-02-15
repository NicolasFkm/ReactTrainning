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
  }

  async componentDidMount() {
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
    })
      
  }

  render() {

    const {state} = this;

    return (
      <div>
        {/* < CalculoImc />  */}
        {/* <CalculoImposto valorLimite="1500" taxa="20"/> */}
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
			<ContatoCadastro/>
		</div>
      </div>
    );
  }
}

export default App;
