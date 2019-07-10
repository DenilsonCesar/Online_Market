import React from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Inicio from './routes'
import Carinho from '../pages/Cart'

const Routes = createBottomTabNavigator({
    Inicio: { screen: Inicio, navigationOptions : {
      tabBarIcon: ({tintColor}) => ( 
        <Icon name="home" size={28} color={tintColor} />
      ),
    }
  },
    Carinho: { screen: Carinho, 
      navigationOptions : {
      tabBarIcon: ({tintColor}) => (
        <Icon name="shopping-cart" size={28} color={tintColor} />
      )}
    },
  },  
   {
    initialRouteName: 'Inicio',
    tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'black',
    style: { backgroundColor: '#c8d6e5' },
  }
});


export default Routes;



    

