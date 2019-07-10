import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HomeScreen extends Component {

    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'red' }}>
                    This is Home Screen
                </Text>
                
            </View>
        </View>);
    }
}