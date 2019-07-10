import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Text } from 'react-native'

import store from './store/index'
import Cart from './cart'

const App = () => (
    <Provider store={store}>
        <Cart/>
    </Provider>
)

export default App;
 