/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @author Jesus Daniel Neira Lara
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Colors from './app/styles/colors'
import Styles from './app/styles/styles'
import Navigator from './app/navigator/navigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {}

export default class App extends Component {
  render() {
    return (
      <Navigator/>
      /*<View style={[Styles.container_full]}>
        <Image style={[Styles.icon_dark, {width: 75, height: 75}]} source={require('./app/src/uao_logo.png')} />
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
