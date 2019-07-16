import React, { Component } from 'react';
import {Image, View} from 'react-native';
import {Colors} from '../styles/colors'
import {Styles} from '../styles/styles'



export default class Splash extends Component(){
    render() {
        return (
            <View style={[Styles.container_full]}>
              <Image style={[Styles.icon_dark, {width: 75, height: 75}]} source={require('../app/src/uao_logo.png')} />
            </View>
        );
    }
}