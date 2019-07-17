import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Colors from '../../styles/colors'
import Styles from '../../styles/styles'

export default class App extends Component {
    render() {
      return (
        <View style={[Styles.container_full]}>
          <Text>MAIN</Text>
        </View>
      );
    }
  }