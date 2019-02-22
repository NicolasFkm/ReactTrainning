# ReactJS

Esse repositório é dividido em duas partes principais: Concepts, na qual são diversos componentes e testes para absorver o conceito do framework; e a Project no qual é um projeto mais estruturado.

## Indrodução

Framework mantido pelo Facebook, um dos principais frameworks front-end JavaScript, ao lado do Angular. 

### NPX
Instala temporariamente o módulo, executa e ainda instala as dependencias no projeto.

### Módulos

O node utiliza módulos, são em geral trechos javascript que possuem uma funcionalidade específica, que podem ser reaproveitados.

```typescript
    import React, { Component } from 'react';
    import './App.css';
```

O "React" é o módulo default do módulo "react", então deve ser importado fora das chaves. Já o component é apenas uma das classes desse módulos. É possível também importar um arquivo inteiro, nesse caso ele é o próprio componente que está sendo importado.

Para exportar um módulo é possível utilizar duas abordagens, retornando apenas um elemento geral no arquivo ou diversos:

```typescript
    exports.module = "";
```

```typescript
    exports.elemento1 = "";
    exports.elemento2 = "";
```
O elemento que será exportado pode ser uma função, uma classe, uma variável...

## Estrutura do Projeto

Os principais arquivos são o ``src/App.js``, que é onde o componente principal por padrão está definido, que é chamado pelo arquivo ``src/index.js``, que injeta o componente dentro da __div#root__ do arquivo ``public/index.html``.

## Componentes

No App, existe um método __``render()``__ que é chamado quando a aplicação é executada e sempre que o `state` é atualizado, como o nome já diz, renderiza um componente, lembrando que é apenas 1 elemento. para isso é possível utilizar o método __React.createElement()__:

```TYPESCRIPT
render() {
    return (
        React.createElement("div", 
            {class: "borda"}, 
            React.createElement("h1", 
                {class: "centraliza"}, 
                "Reactzada"
            )
        )
    );
}
```

Mas o mais comum e utilizar a sintaxe __``JSX``__, que é bem parecida com o HTML, mas tem suas diferenças pontuais, principalmente nos nomes dos atributos do elemento.

```TYPESCRIPT
render() {
    return (
        <div className="borda">
            <h1 className="centraliza">
                Reactzada - JSX
            </h1>
        </div>
    );
}
```

O mais comum é que esse conteúdo JSX esteja separado, em um arquivo JSX que o exporta, para utilizá-lo é simples:

```TYPESCRIPT
import TextoInfo from "./TextoInfo";
.
.
.
render() {
    return (
        < TextoInfo />
    );
}
```

## Props e States

Como o componente é customizado, os atributos também são, dessa forma é possível trabalhar o componente com base nos atributos dele, tudo isso é definido no momento em que ele é definido. Esses atributos ou _inputs_ são conhecidos como __`Props`__.

```TypeScript
import React from "react";

var TextoInfo = function (props) {
    return (
        <div className="borda">
            <h1 className="centraliza">
                {props.conteudo}
            </h1>
        </div>
    )
};

export default TextoInfo;
```

```TYPESCRIPT
import TextoInfo from "./TextoInfo";
.
.
.
render() {
    return (
        < TextoInfo conteudo="Texto do H1" />
    );
}
```

Ainda assim, o mais comum é que o componente seja definido dentro de uma classe, nesse caso os Props são reutilizados da classe pai ``Components``:

```TypeScript
import React, { Component } from "react";
import './App.css';

export default class TextoHeader extends Component {
    render() {
        return (
            <div className="borda">
                <h1 className="centraliza">
                    {this.props.conteudo}
                </h1>
            </div>
        )
    }
}
```

Os props são __IMUTÁVEIS__, ou seja, _read-only_.

Para que o elemento possa ser manipulado, é necessário o uso de __``States``__, eles não podem ser manipulados diretamente, é necessário utilizar o this.setState() para atualizá-lo, lembrando que é necessário passar apenas o que mudou, o que não for enviado será mantido:

```typescript
    this.state = {
      contatos: [
        {
          id: 1,
          imagem: './imagens/imagem1.jpg',
          nome: "Choquito",
          telefone: "(11) 96587-5684"
        },
        {
          id: 2,
          imagem: './imagens/imagem2.jpg',
          nome: "Micalatéia",
          telefone: "(11) 96587-5684"
        }
      ],
      pagamentos: [
          {
              id: 1,
              data: "2019-02-14 19:48:21"
          }
      ]
    };

    this.setState({
        contatos
    })
```

Os states e props são herdados da classe Components, classe que nosso componente extende. Uma boa prática é definir props default na classe do componente, para caso alguma prop não seja enviada, o componente tenha um valor padrão para ser utilizado. O atributo estático `defaultProps` é o objeto que armazena os valores padrão.

```ts
static defaultProps = {
    contato: {
        imagem: './imagens/img1.jpg',
        nome: '[Não informado]',
        telefone: '[Não informado]',
    },
    onRemover: ()=>{}
}
```

Todo método criado dentro de um componente é necessário dar um bind dentro do construtor para que ele não esteja atrelado à window:

```typescript
   constructor(props){
        super(props);
        this.remover = this.remover.bind(this);
    }

    remover() {
        ...
    }
```

No caso de um json cuja chave e valor tiverem mesmo nome, é possível definí-los dessa forma:

```ts
    this.setState({
        contatos
    })
```

Para agilizar o desenvolvimento, pode-se utilizar a segunte abordagem para definir os elementos, equivalente a props = this.props e contato = props.contato:

```typescript
render(){
    const   {props} = this,
            {contato} = props;
    return(
        
        <div className='linha borda'>
            <div className='centraliza'>
                <img src={contato.imagem} width='150px'/>
            </div>
            <div>
                <span>
                    <strong>Nome: </strong>
                    {contato.nome}
                </span>
            </div>
            <div>
                <span>
                    <strong>Telefone: </strong>
                        {contato.telefone}
                    </span>
            </div>
        
        </div>
    )
}
```

No caso de um loop, é necessário usar o map no elemento, que é equivalente a um forEach que retorna elementos, sempre que tiver um loop de elementos, deve-se colocar um atributo key normalmente atrelado ao id do elemento ou equivalente:

```jsx
    <ul>
        <li>
            {state.contatos.map(contato=>
            <Contato key = {contato.id} contato = {contato}/>
            )}
        </li>
    </ul>
```

Da mesma forma que é possível passar um valor, é possível passar uma função dentro de uma prop, dessa forma a classe do componente pode redirecionar a função para aquela definida na prop, no caso de passar um método da própria classe como prop de um componente, a classe do componente pode chamar a função externa.

Os componentes compartilham funcionalidades e dados com as props, no caso de um componente realiza uma função e em seguida um outro componente precisa realizar outra função, utiliza-se listeners que recebem funções do componente que são chamadas em resposta:

```jsx
<div>
    <!-- A Prop "onAdicionar" tem o valor de um método chamado adicionar -->
    <ContatoCadastro onAdicionar={this.adicionar}/>
</div>
```

```jsx
<div className="btn btn-send">
    <!-- Relaciona o evento de click ao método enviado via prop -->
    <button onClick={this.onAdicionar}>Cadastrar</button>
</div>
```
```ts
// chama a função passada via prop
 onAdicionar() {
    const { contato } = this.state;
    contato.imagem =  `${contato.imagem}${contato.imagem}`;
    this.setState({
        contato
    });
    // A função que 
    this.props.onAdicionar(contato);
}
```

## Métodos do Ciclo de Vida

- componentWillMount: Executa imediatamente antes de renderizar o componente;
- componentDidMount: Executa assim que a primeira renderização é finalizada no lado do cliente;
- componentWillReceiveProps: Chamado assim que executa as props, antes de renderizar o component;
- shouldComponentUpdate: Determina se o componente será renderizado;
- componentWillUpdate: Chamado imediatamente antes da renderização;
- componentDidUpdate: Chamado após a renderização;
- componentWillUnmount: Chamado imediatamente antes do componente ser removido do DOM.

## Requisições e Respostas

O recomendado quando necessário informações que serão apresentadas, é realizar requisições no  método componentDidMount e de forma asssíncrona utilizando `async`, utilizando `await` na execução da requisição. 

```ts
componentDidMount() {
this.listar();
}

async listar(){
const contatos = await ContatosService.listar();
    this.setState({
        contatos
    });
}
```

As requisições são feitas através da função `fetch`, que funciona baseada em Promise:

```ts
adicionar(contato) {
    var headers = new Headers();
    headers.set("Content-Type", "application/json");
    return fetch("http://localhost:3200/contatos/", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(contato)
        })
        .then(response => response.json())
}
```

## Redux

Vem de dois conceitos, o Reducer e o Flux. Uma aplicação tem dois elementos centrais: as `Props` e o `State`. Um estado é enviado para outro componente via prop, depois passado para o state para ser manipulado. Com o Redux, todos os dados são centralizados no __`STORE`__, ele é único e pode ser acessado por qualquer componente, dessa forma o compartilhamento é mais simples.

A interação com a View chama um `action`, que é um objeto que representa a ação que ocorreu na View, nada mais do que um objeto que identifica a ação realizada e possui um valor que será utilizado para atualizar a store, o action é enviado para o reducer através de um `"dispatching"`. O Reducer que é responsável por especificar como o state será alterado, envia o estado atualizado para a store. 

É comum criar um reducer para cada componente ou grupo de componente definido e depois combiná-los atravès do "combineReducer".


```ts
export const inputReducer = (state, action) => {
    switch (action.type) {
        case '':
            
            break;
    
        default:
            break;
    }
};
```

```ts
import { inputReducer } from './inputReducer'
import { combineReducers } from "redux";

export const Reducers = combineReducers({
    inputButton: inputReducer
})
```

O store é único e precisa ser definido na aplicação, para mapear os reducers existentes. 

```ts
import { createStore } from "redux";
import { Reducers } from '../reducers/reducers';

export const store = createStore(Reducers);
```

Na criação do action, como já comentado anteriormente, o tipo é obrigatório, mas para definí-lo é recomendado criar um arquivo com os possíveis tipos como constantes que podem ser importados para o arquivo no qual os actions são definidos.

```ts
export const CLICK_BUTTON = 'CLICK_BUTTON';
```

```ts
import * as ActionTypes from "./actionTypes";

export const clickButton = valor => ({
    type: ActionTypes.CLICK_BUTTON,
    novoValor: valor
})
```

Quando a action é disparada, o objeto executado é passado como parametro para o reducer, enquanto o parâmetro "state"(ou o nome desejado no primeiro parâmtro) é o state atual, caso não exista é necessário que tenha um estado inicial. Dessa forma são necessárias algumas alterações na definição do reducer, além de implementar como vai lidar com o action que no caso utiliza o operador spread que permite a evolução do estado, mantendo do jeito que está e modificando apenas o necessário, é necessário definir um estado inicial caso o "state" não esteja definido:

```ts
import CLICK_BUTTON from '../actions/actionTypes';

const estadoInicial = {
    novoValor: ''
}

export const inputReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case CLICK_BUTTON:
            return{
                ...state,
                novoValor: action.novoValor
            }
            break;
    
        default:
            break;
    }
};
```

Por último é necessário atrelar toda essa estrutura do redux na aplicação em si, para isso é necessário um componente do "react-redux" chamado Provider, como nesse caso será utilizado na aplicação toda, é necessário implementá-lo no index.js:

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { Store } from "./store/store";

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();

```

O `Redux-Thunk` lida com ações assíncronas no Redux, para que espere antes de enviar os dados. Ele funciona como um middleware entre o Action e o Reducer, recupera o que o Action contém e se responsabiliza pelo envio para o reducer. Ele é configurado na definição da store.

```ts
import { CONTATO_LISTAR } from './inputTypes';
import { ContatosService } from '../services/ContatosService';

export const listar = () =>
{
    return async (dispatch) => {
        let contatos = await ContatosService.listar();
        dispatch({
            type: CONTATO_LISTAR,
            contatos
        });
    }
}
```

```ts
import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { Reducers } from '../reducers/RootReducers';

export const Store = createStore(Reducers, applyMiddleware(ThunkMiddleware));
```

No final do componente é necessário mapear o estado para as props, para isso é necessário utilizar o connect do pacote react-redux e exportá-lo.

```ts
// O estado retornado no caso é a própria lista de contatos
const mapStateToProps = state => ({
  contatos: state.ContatosReducer
});


// export default App;
export default connect(mapStateToProps)(App)
```

Caso tenha além de propriedades, métodos que serão utilizados no componentes vindos da store:

```ts
const mapStateToProps = state => ({
    nome: state.ContatosReducer.nome,
    telefone: state.ContatosReducer.telefone,
    imagem: state.ContatosReducer.imagem
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(
        {
            clickButton, 
            mudaTextoImagem,
            mudaTextoNome,
            mudaTextoTelefone
        }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NovoContato);
```