import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, Dimensions, TouchableOpacity, View, Image, Alert, ImageBackground, StatusBar } from 'react-native';

export default class FormContato extends Component{
    
    constructor(props){
        super(props);
        
        this.enviarContato = this.enviarContato.bind(this);

        var { height, width } = Dimensions.get("window");

        this.state = {
            nome: '',
            telefone: '',
            imagem: '',
            baseUrl: 'http://172.16.20.23:4000/contatos/',
            screenHeight: height,
            screenWidth: width
        }

    }

    enviarContato(){
        var url = this.state.baseUrl;

        fetch(url, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imagem: this.state.imagem,
                nome: this.state.nome,
                telefone: this.state.telefone,
                
            })
        })
        .then( res => res.json() )
        .then( res => {
            if(!res.error){
                Alert.alert("Contato incluído com sucesso")
            }
            else{
                Alert.alert(res.message)
            }
        })
        .catch( error =>{
            Alert.alert("Erro " + error.message)
        })
    }

    onClickListener = () => {
        if(!this.state.imagem || this.state.imagem == ''){
            Alert.alert("Forneça a imagem!");
            return;
        }
        if( !this.state.nome ) {
            Alert.alert("Forneça a imagem!");
            return;
        }
        if( !this.state.telefone ) {
            Alert.alert("Forneça a imagem!");
            return;
        }
        this.enviarContato();
    }

    render(){
        return(
            <ImageBackground 
                source={require('../imagens/bg_contato.jpg')}
                imageStyle= {{resizeMode: 'stretch'}}
                style= {{width: '100%', height: '100%'}}
            > 
                <StatusBar 
                    backgroundColor="#0B7600"
                    barStyle='light-content'
                />
                <View style={styles.container}>
                    <Text style={styles.input}>
                        <View style={styles.inputContainer}>
                            <TextInput 
                                style={styles.input} 
                                placeholder="Digite seu nome" 
                                underlineColorAndroid="transparent"
                                onChange={imagem => this.setState({
                                    nome
                                })}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput 
                                style={styles.input} 
                                placeholder="Digite seu telefone" 
                                underlineColorAndroid="transparent"
                                onChange={imagem => this.setState({
                                    telefone
                                })}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput 
                                style={styles.input} 
                                placeholder="Digite o caminho da imagem" 
                                underlineColorAndroid="transparent"
                                onChange={imagem => this.setState({
                                    imagem
                                })}
                            />
                        </View>
                    </Text>

                    <TouchableOpacity 
                        style={styles.submitButtonText} 
                        onPress={()=>{this.onClickListener()}}
                    >
                        <Text style={styles.sendText}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        margin: 15,
        fontSize: 40,
        marginBottom: 40,
        color: 'blue'
    },
    submitButton:{
        backgroundColor: '#7a44a7',
        padding: 10,
        margin: 15,
        height: 60
    }, 
    submitButtonText: {
        color: "#FFFFFF",
        backgroundColor: '3462FD',
        width: 350,
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendText: {
        color: '#ffffff',
        alignItems: 'center'
    },
    inputContainer: {
        borderBottomColor: '#05C203',
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        borderBottomWeight: 1,
        width: 150,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1
    }
})