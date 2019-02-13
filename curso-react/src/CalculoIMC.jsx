import React, { Component } from 'react'
import './App.css';

export default class CalculoImc extends Component{
    render(){
        return (
            <div className="borda largura">
                <h2 className="centraliza">
                    Cálculo do IMC
                </h2>
                <div>
                    <input type="text" placeholder="Digite sua altura"/>
                    <br/>
                    <input type="number" placeholder="Digite seu peso"/>
                    <br/>
                    <input type="submit" value="Calcular"/>
                </div>
                <br/>
                <div>
                    <strong>Seu Imc é: </strong>
                </div>
            </div>
        );
    }
}