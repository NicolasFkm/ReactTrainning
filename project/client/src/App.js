import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/umd/popper.min';
import './App.css';
// import Curso from './curso/curso';
// import Contato from './contato/contato';
import Rotas from './routes';
import Menu from './menu/menu';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Rotas/>
      </div>
    );
  }
}

export default App;
