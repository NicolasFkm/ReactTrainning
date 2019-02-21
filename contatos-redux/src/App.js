import React, {
  Component
} from 'react';
import './App.css';
import ListaContato from './components/ListaContato';
import NovoContato from './components/NovoContato';
import { ContatosService } from './services/ContatosService';

class App extends Component {

  static defaultProps = {
    contatos: []
  }

  constructor(props){
    super(props);
    this.state = {
      contatos: []
    }
    this.adicionar = this.adicionar.bind(this);
    this.listar = this.listar.bind(this);
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

  render() {
    const { state }= this;

    return ( 
      <div className="app">
        <NovoContato onAdicionar={this.adicionar}/>
        <ListaContato contatos={state.contatos}/>
      </div>
    );

  }
}

export default App;