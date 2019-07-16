import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Colors from '../styles/colors'
import Styles from '../styles/styles'

export default class App extends Component {
    render() {
      return (
        //<Navigator/>
        <View style={[Styles.container_full]}>
          <Image style={[Styles.icon_dark, {width: 75, height: 75}]} source={require('../src/uao_logo.png')} />
        </View>
      );
    }
  }