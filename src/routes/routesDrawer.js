import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation'; 
//import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../pages/homeScreen'
import Main from './routesMain'
import MenuDrawer from '../components/menuDrawer'

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: ({navigation}) => {
        return (<MenuDrawer navigation={navigation} />)
    }
}

export default createDrawerNavigator (
    { 
      Main:{
      screen:Main
    },
      Home:{
        screen:HomeScreen
      },
    },
        DrawerConfig,   
)
  