import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'

import {Container} from './Styles_Components'

const  WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


export default class menuDrawer extends Component {
    navLink(nav, text) {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={{fontFamily: 'Arial' ,fontSize: 25, color: '#000'}}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <Container>
                <View style={{flex: 1, backgroundColor: 'red', height: 180}}>
                    <Text></Text>
                </View>
                    <View style={{paddingLeft: 10}}>
                        {this.navLink('Main', 'Inicio')}
                        {this.navLink('Home', 'HomeScreen')}
                        {this.navLink('info', 'Perfil')}
                    </View>
            </Container>
        )
    }
}
