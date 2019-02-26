import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ConteudoTexto extends Component {
    render(){
        return(
            <View 
            style={styles.conteudo}
            // style={{flex: 1}}
            >
                <Text>Componente ConteudoTexto JS</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})