import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConteudoTexto from './components/ConteudoTexto';
import AppExibeImagem from './components/AppExibeImagem';
import Relogio from './components/Relogio';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        {/* <ConteudoTexto/> */}
        {/* <AppExibeImagem/> */}
        <Relogio/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00caa8',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
