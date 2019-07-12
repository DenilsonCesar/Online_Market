import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { 
        ContainerItens,
        ContainerPrincipal 
} from './Styles_Main'

import { connect } from 'react-redux';
import formProduct from './formProduct'

class Cart extends Component {
    render(){
        return (
            <ContainerPrincipal>
                 <View>{this.props.items.length < 0 ? 
                    <View formProduct={this.props.items}/>
                    : <ContainerItens>
                    </ContainerItens>
                }</View>    
            </ContainerPrincipal>
        )
    }
}
 
const mapStateToProps = state => ({
    items: state.productReducers
});

const mapDispatchToProps = (dispatch) => ({
    removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);