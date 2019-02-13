import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextoInfo from "./TextoInfo";
import TextoHeader from "./TextoHeader";
import CalculoImc from './CalculoIMC';

class App extends Component {
  render() {
    return (
      <div>
        {/* < TextoHeader conteudo="REACT"  />
        < TextoInfo conteudo="Framework JavaScript"/> */}
        < CalculoImc />
      </div>
    );
  }
}

export default App;
