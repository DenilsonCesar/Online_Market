import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { 
        ContainerItens,
        ContainerPrincipal 
} from './Styles_Main'

import { connect } from 'react-redux';

class Cart extends Component {
    render(){
        return (
            <ContainerPrincipal>
                 <View>{this.props.getParam('prodDesc')}
                    </View>    
            </ContainerPrincipal>
        )
    }
}
 
const mapStateToProps = state => ({
    //addvalue: state.productReducers.description
});

const mapDispatchToProps = (dispatch) => ({
    removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);