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
                 <View>
                    </View>    
            </ContainerPrincipal>
        )
    }
}
 
const mapStateToProps = state => ({
    //addvalue: state.productReducers.description
});

export default connect(mapStateToProps)(Cart);