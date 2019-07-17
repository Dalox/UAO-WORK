import React, { Component } from 'react';
import {Alert, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Colors from '../styles/colors'
import Styles from '../styles/styles'
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /**
             * Estado... seteado información por default
             */
            mail: 'jesus.neira@uao.edu.co',
            password: '12345',
            language: 'Spanish',
            user: null, 
        }
    }

    static navigationOptions = {
    }

    _signin = async () => {
        /**
         * Consultar al servidor express
         */
        await fetch('http://192.168.1.72:3000/users/signin',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              password: this.state.password,
              mail: this.state.mail
            }),
        }).then((res) => res.json()).then((resJSON) => {
            //console.warn(resJSON);
            this.setState({user:resJSON})// Almacenar la informacion de usuario en state
        }).catch((err) => console.error(err));
        /**
         * Si hay respuesta guardar la informacion e ir a Main
         * Sino mostar alerta de información incorrecta.
         */
        if(this.state.user != null){
            await AsyncStorage.setItem('UserInfo',JSON.stringify(this.state.user));
            this.props.navigation.navigate('Main')
        }else{
            Alert.alert('Usuario o Contraseña Incorrecto')
        }
    }

    render() {
      return (
        <View style={[Styles.container_full]}>
            <Image style={{width: 150, height: 150}} source={require('../src/logo.png')}/>
            <Text style={[Styles.txt, Styles.subtitle]}>SIGN IN</Text>
            <View style={[Styles.icon_fileds]}>
                <Image style={[Styles.icon_dark]} source={require('../src/icons/1x/baseline_account_circle_black_48dp.png')}/>
                <TextInput onChangeText={(text) => this.setState({mail: text})} value={this.state.mail} style={[Styles.icon_input]} placeholder={this.state.language == 'Spanish'  ? 'Correo' : 'Email'} />
            </View>
            <View style={[Styles.icon_fileds]}>
                <Image style={[Styles.icon_dark]} source={require('../src/icons/1x/baseline_lock_black_48dp.png')}/>
                <TextInput onChangeText={(text) => this.setState({mail: text})} secureTextEntry={true} textContentType={'password'} value={this.state.password} style={[Styles.icon_input]} placeholder={this.state.language == 'Spanish' ? 'Contraseña' : 'Password'} />
            </View>
            <TouchableOpacity style={[Styles.btn]} onPress={this._signin}>
                <Text style={[Styles.txt, Styles.txt_white]}>INICIAR SESION</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }