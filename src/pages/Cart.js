import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { 
        ContainerItens,
        ContainerPrincipal 
} from './Styles_Main'


const Cart = (props) => {
        return (
            <ContainerPrincipal>
                <ContainerItens>
                    <Text>{props.navigation.getParam('prodDesc')}</Text>
                </ContainerItens>
                <ContainerItens>
                    <Text>aaaaaa</Text>
                </ContainerItens>
                <ContainerItens>
                    <Text>aaaaaa</Text>
                </ContainerItens>
                <ContainerItens>
                    <Text>aaaaaa</Text>
                </ContainerItens>
                <ContainerItens>
                    <Text>aaaaaa</Text>
                </ContainerItens>

            </ContainerPrincipal>
        )
}
    

export default Cart;