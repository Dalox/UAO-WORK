import React, { Component } from 'react';
import {Image,Text, View} from 'react-native';
import Colors from '../styles/colors'
import Styles from '../styles/styles'
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {
    
    static navigationOptions = {
    }

    componentDidMount() {
        setTimeout( async () => {
            //console.warn('TimeOut')
            var user = await AsyncStorage.getItem('UserInfo') // Verificar si hay información de inicio previo
            //console.warn(user)
            /**
             * Si ya se ha iniciado secion saltar al Main.
             * Si no ir a Signin
             */
            if(user != null){
              this.props.navigation.navigate('Main')
            }else {
              this.props.navigation.navigate('Signin')
            }
        },1500)
    }

    render() {
      return (
        //<Navigator/>
        <View style={[Styles.container_full]}>
          <Image style={[Styles.icon_dark, {width: 75, height: 75}]} source={require('../src/uao_logo.png')} />
        </View>
      );
    }
  }