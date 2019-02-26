import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Moment from 'moment';

export default class Relogio extends Component{

    constructor(props){
        super(props);
        this.state = {
            horaAtual: this.mostrarHora()
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                horaAtual: this.mostrarHora()
            })
        }, 1000)
    }

    mostrarHora(){
        return Moment().format("hh:mm:ss");
    }

    render(){
        return(
            <Text style={styles.relogio}>
                {this.state.horaAtual}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    relogio: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        fontSize: 70
    }
})