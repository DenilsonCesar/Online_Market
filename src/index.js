import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import RouterMain from './routes/routesDrawer'
//import RouterMain from './pages/formProduct'

export default class App extends Component {
    render(){
        return(
            <Provider store = { createStore(reducers) }>
                <RouterMain />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('App', () => App)
