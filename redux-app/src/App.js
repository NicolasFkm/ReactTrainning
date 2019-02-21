import React, { Component } from 'react';
import './App.css';
import { clickButton, changeTextValue } from './actions/inputAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class App extends Component {

  state = {
    valorTexto: "",
    valorAtual: "",
  };

  // Como é uma propriedade que possui uma arrow function, não é necessário fazer o bind
  // inputChange = event =>{
  //   this.setState({
  //     valorAtual: event.target.value,
  //   })
  // };
  
  // constructor(props){
  //   super(props);
  // }

  render() {
    // clickButton? ação a ser executada na view, essa propriedade vem de inputAction
    const { novoValor, valorAtual, clickButton, changeTextValue } = this.props;

    return (
      <div className="App">
        <input type="text" 
        // onChange={this.inputChange}
        onChange={(e)=>changeTextValue(e.target.value)}/>
        <button  onClick={()=>clickButton(valorAtual)}>Mostrar!</button>
        <h2>Atual {valorAtual}</h2>
        <h1>{novoValor}</h1>
      </div>
    );
  }

}

const mapStateToProps = store =>({
  novoValor: store.inputButton.novoValor,
  valorAtual: store.inputButton.valorAtual
});

const mapDispatchToProps = dispatch =>bindActionCreators({
  clickButton, changeTextValue
}, dispatch);

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
