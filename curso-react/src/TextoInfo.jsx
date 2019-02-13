import React from "react";
import './App.css';

var TextoInfo = function (props) {
    return (
        <div className="borda">
            <h1 className="centraliza">{props.conteudo}</h1>
        </div>
    )
};

export default TextoInfo;