import React, { Component } from 'react';
import {Image,Text, View} from 'react-native';
import Colors from '../styles/colors'
import Styles from '../styles/styles'

export default class App extends Component {
    
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        setTimeout(() => {
            //console.warn('TimeOut')
            this.props.navigation.navigate('Signin')
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