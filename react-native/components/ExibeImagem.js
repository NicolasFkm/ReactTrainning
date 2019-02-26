import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ExibeImagem extends Component {
    render(){
        return(
            <View style={styles.conteudo}>
                <Image 
                source={{uri: this.props.imagem}} 
                style={styles.imagem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem:{
        width: 300,
        height: 200
    }
})