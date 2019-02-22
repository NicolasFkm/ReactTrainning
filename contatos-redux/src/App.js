import React, {
  Component
} from 'react';
import './App.css';
import ListaContato from './components/ListaContato';
import NovoContato from './components/NovoContato';
import { ContatosService } from './services/ContatosService';
import * as ContatosActions from './actions/ContatosActions';
import { connect } from 'react-redux';

class App extends Component {

  // static defaultProps = {
  //   contatos: []
  // }

  constructor(props){
    super(props);
    this.state = {
      contatos: []
    }
    this.adicionar = this.adicionar.bind(this);
    // this.listar = this.listar.bind(this);
  }

  adicionar(contato) {
    if (contato.imagem !== '' && contato.nome !== '' && contato.telefone !== '') {
        ContatosService.adicionar(contato)
          // .then(()=>{
          //   this.listar();
          // });
        
    }
  }

  // componentDidMount() {
  //   this.listar();
  // }

  // async listar(){
  //   const contatos = await ContatosService.listar();
	//   this.setState({
	// 	  contatos
	//   });
  // }

  componentDidMount() {
    this.props.dispatch(ContatosActions.listar())
  }

  render() {
    // const { state }= this;
    const { props } = this,
          { dispatch } = props;

    return ( 
      <div className="App">
        <NovoContato onAdicionar={this.adicionar}/>
        <ListaContato contatos={props.contatos}/>
      </div>
    );

  }
}

// O estado retornado no caso é a própria lista de contatos
const mapStateToProps = state => ({
  contatos: state.ContatosReducer
});


// export default App;
export default connect(mapStateToProps)(App)