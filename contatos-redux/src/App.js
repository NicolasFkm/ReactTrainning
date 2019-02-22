import React, {
  Component
} from 'react';
import './App.css';
import ListaContato from './components/ListaContato';
import NovoContato from './components/NovoContato';
import * as ContatosActions from './actions/ContatosActions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(ContatosActions.listar())
  }

  render() {
    const { props } = this;

    return ( 
      <div className="App">
        <NovoContato/>
        <ListaContato contatos={props.contatos}/>
      </div>
    );

  }
}

const mapStateToProps = state => ({
  contatos: state.ContatosReducer.contatos
});

export default connect(mapStateToProps)(App)