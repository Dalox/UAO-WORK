import React, { Component } from 'react';
import {Image} from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Colors from '../styles/colors'
import Styles from '../styles/styles'

// Pantallas de Inicio.
import Splash from '../screens/splash'
import SignIn from '../screens/signin'

// Pantallas principales

import Main from '../screens/main'
import Code from '../screens/main/code'
import QR from '../screens/main/qr'

//Bottom Tab Navigator

const MainBottomTab = createBottomTabNavigator({
    Home: {screen: Main, navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <Image style={[Styles.icon,{tintColor: tintColor}]} source={require('../src/icons/1x/baseline_home_black_48dp.png')}/>
        )
    }},
    Search: {screen: Code, navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <Image style={[Styles.icon,{tintColor: tintColor}]} source={require('../src/icons/1x/baseline_search_black_48dp.png')}/>
        )
    }},
    QR: {screen: QR, navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <Image style={[Styles.icon,{tintColor: tintColor}]} source={require('../src/icons/1x/sharp_camera_black_48dp.png')}/>
        )
    }}
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        //title: 'storex',
        headerStyle: {
            backgroundColor: Colors.primary.default,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
    tabBarOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: Colors.primary.light,
        tabStyle: {
            fontSize: 6,
            //backgroundColor: Colors.secondary.default,
        },
        labelStyle: {
            fontSize: 12,
            padding: 4,
            //backgroundColor: Colors.secondary.default,
        },
        showLabel: false,
        style: {
            backgroundColor: Colors.primary.default,
        },
        indicatorStyle: {
          borderBottomColor: '#fff',
          borderBottomWidth: 2,
        },
        allowFontScaling: true,
    }
})

//Strack principal

const MainStack = createStackNavigator({
    Splash: {screen: Splash},
    Signin: {screen: SignIn},
    Main: {screen: MainBottomTab, navigationOptions: {
        title: 'UAO WORK',
          headerStyle: {
            backgroundColor: Colors.primary.default,
            fontStyle: 'normal',
            /*elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS*/
          },
          headerTintColor: '#FFFFFF',
          headerLeft: null
    }}
},{
    defaultNavigationOptions: {
    }
})

export default createAppContainer(MainStack);