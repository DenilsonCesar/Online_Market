import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

import { connect } from 'react-redux'

const cart = ({cart, total, add, remove}) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Carrinho</Text>
        <Text>Itens:</Text><Text>{cart.items.length}</Text>
        <Text>Frete:</Text><Text>{cart.length}</Text>
        <Text>Total:</Text><Text>{total}</Text>
        <Button title='Adcionar' onPress={add}/>
        <Button title='Remover' onPress={remove}/>
    </View>
)        

const mapStateToProps = state => ({
    cart: state,
    total: state.items.reduce((subtotal, item) => subtotal + item.prince, 0)
});


const mapDispatchToProps = dispatch =>({
    add: () => dispatch({ type: 'INCREMENT' }),
    remove: () => dispatch({ type: 'DECREMENT' }),
    addProduct: () => dispatch({ type: 'ADD' }),
  })

export default connect(mapStateToProps, mapDispatchToProps)(cart);
 