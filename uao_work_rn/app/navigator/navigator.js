import React, { Component } from 'react';
import {Image} from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Colors from '../styles/colors'
import Styles from '../styles/styles'

// Pantallas principales.
import Splash from '../screens/splash'
import Main from '../screens/main'
import SignIn from '../screens/signin'

const MainStack = createStackNavigator({
    Splash: {screen: Splash},
    Signin: {screen: SignIn},
    Main: {screen: Main}
})

export default createAppContainer(MainStack);