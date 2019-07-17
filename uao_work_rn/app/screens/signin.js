import React, { Component } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Colors from '../styles/colors'
import Styles from '../styles/styles'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: 'jesus.neira@uao.edu.co',
            password: '12345',
            language: 'Spanish'
        }
    }
    static navigationOptions = {
        header: null
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
                <TextInput onChangeText={(text) => this.setState({mail: text})} textContentType={'password'} value={this.state.password} style={[Styles.icon_input]} placeholder={this.state.language == 'Spanish' ? 'Contraseña' : 'Password'} />
            </View>
            <TouchableOpacity style={[Styles.btn]}>
                <Text style={[Styles.txt, Styles.txt_white]}>INICIAR SESION</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }