import React, {Component} from 'react';
import { View } from 'react-native';
import ExibeImagem from './ExibeImagem';

export default class AppExibeImagem extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <ExibeImagem imagem="http://lorempixel.com/300/200"/>
            </View>
        )
    }
}