import React from 'react';

// imposto 15% se for >100
export default class CalculoImposto extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            salarioBruto: 0,
            salarioLiquido: 0,
            imposto: 0,
        }
        this.changeSalarioBruto = this.changeSalarioBruto.bind(this);
        this.calcularSalarioFinal = this.calcularSalarioFinal.bind(this);
    }
    render() {
        const state = this.state;
        return (
            <div className='borda largura'>
                <div>
                    <label>Seu Salario</label>
                    <input type='text' placeholder='Digite salario Bruto' onChange={this.changeSalarioBruto} />
                </div>
                <button type='button'onClick={this.calcularSalarioFinal}>Calcular</button>
                <div>
                    <strong>Salario Bruto:{state.salarioBruto}</strong>
                </div>
                <div>
                    <strong>Imposto:{state.imposto}</strong>
                </div>
                <div>
                    <strong>Salário liquído:{this.state.salarioLiquido}</strong>
                </div>
            </div>
        );
    }
    changeSalarioBruto(event) {
        let salarioBruto = event.target.value;
         this.setState({
             salarioBruto:salarioBruto
         });
        ;
    }
    calcularSalarioFinal(){
        let dados = this.state;
        let imposto= dados.salarioBruto<=1000?0:dados.salarioBruto*15/100;
        let salarioLiquido=dados.salarioBruto-imposto;
        this.setState({
            salarioLiquido,
            imposto,
        });
    }
}