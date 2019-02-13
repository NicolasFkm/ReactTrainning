# React

<small>Obs: Projetos com fins de testes e treino, sem estrutura ou padrão de código profissional bem definido</small>

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

No App, existe um método __``render()``__ que, como o nome já diz, renderiza um componente, lembrando que é apenas 1 elemento. para isso é possível utilizar o método __React.createElement()__:

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