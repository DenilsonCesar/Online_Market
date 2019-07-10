import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class menuButton extends Component {
    render(){
        return(
            <View style={{
                height: 60,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#c8d6e5',
                padding: 15,
                width: 455,
                margin: 12,
                borderRadius: 8,
            }}>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.toggleDrawer()}>
                    <Icon name='menu' size={35} color={'red'}/>
                </TouchableOpacity>
            </View>
       )
    }
}
