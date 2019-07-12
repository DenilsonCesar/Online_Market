import { combineReducers } from 'redux'
import productReducers from './productReducers'
import qtdReducers from './quantityProductsReducers'
import addItemsReducers from './addItemsReducers'

export default combineReducers({
    productReducers: productReducers,
    qtdReducers: qtdReducers,
    addItemsReducers: addItemsReducers
    
})