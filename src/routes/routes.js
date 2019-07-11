import React from 'react'

import Main from '../pages/main';
import FormProduct from '../pages/formProduct';
//import { View, TouchableOpacity } from 'react-native'
import { createStackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';
import MenuButtom from '../components/menuButton'

const AppNavigator = createStackNavigator({
    Main: {
      screen: Main, navigationOptions:({navigation}) => ({ 
        tabBarIcon: ({tintColor}) => ( 
          <Icon name="home" size={28} color={tintColor} />
          ),headerLeft: <MenuButtom navigation={navigation}/>,
            headerStyle: {
              height: 80
            }
      })
    },
    FormProduct:{
        screen: FormProduct
    }
  }
);
  
  export default AppNavigator;
