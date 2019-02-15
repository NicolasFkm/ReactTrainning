import React, { Component } from 'react'
import './App.css';

export default class CalculoImc extends Component{
    static defaultProps= {
        limite:100,
    }

    constructor(props){
        super(props);
        this.state = {
            valorIMC:    0,
            valorPeso:   0,
            valorAltura: 0,
        }
        /*
        * É necessário vincular o "this" no construtor(que se refere ao componente) à função usada como evento. 
        * Isso porque, no interior da função, o "this" se refere a window e não ao componente propriamente dito.
        */ 
        this.changeData=this.changeData.bind(this);
        this.calcular = this.calcular.bind(this);
    }

    changeData(event){
        console.log(event);
        
        const {target} = event;// equivalente à const target = event.target;
        const {name,value} = target;// equivalente à const name = target.name
        this.setState({
            [name]:value,//pega o "name"(valorPeso ou valorAltura e seta o value passado)
        });
    }
    calcular(){
        console.log(this.state);
        const dados = this.state;
        let peso = dados.valorPeso;
        let altura = dados.valorAltura;
        let imc= peso / Math.pow(altura,2);

        if(imc>this.props.limite){
            imc = this.props.limite;
        }
        this.setState({
            valorIMC:imc,
        });
    }
    render() {
        // const state = this.state;
        const {state} = this; //padrão ES6
        return (
            <div className='borda largura'>
                <h2>Calculo do IMC</h2>
                <div>
                    <input type='text' name='valorAltura' value={state.valorAltura} placeholder='Sua altura' onChange={this.changeData} />{state.valorAltura}
                    <br />
                    <input type='text' name='valorPeso' value={state.valorPeso} placeholder='seu peso' onChange={this.changeData} />{state.valorPeso}
                    <br />
                    <button type='button' onClick={this.calcular}>Calcular</button>
                    <br />
                    <div>
                        <strong>Seu IMC:{state.valorIMC}</strong>
                    </div>
                    <div>
                        Limite:{this.props.limite}
                    </div>
                </div>
            </div>
        );
    }
}