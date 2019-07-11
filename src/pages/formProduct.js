import React, {Component} from 'react'
import { 
    Image, 
    Text, 
    TextInput,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';

import { 
        CardQuant,
        TextCard,
        ViewDesc,
        ContainerProduct,
        ViewPrin,
        TextValue,
        CardTop,
        CardPrince,
        TextTotal,
        ViewTotal,
} from './Styles_Main'


import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';

class formProduct extends Component {
    render(){
    return(
        <ContainerProduct>
            <Text>aaaaaaaaaaaaaa</Text>
                <ViewPrin>
                    <Image style={{width:250, height:280, marginRight: 5}}
                    source={this.props.navigation.getParam('prodImg')}/>
                    <CardPrince>
                        <CardTop>
                            <TextCard>{this.props.navigation.getParam('prodDesc')}</TextCard>
                        </CardTop>
                                <TextValue>R$ {this.props.navigation.getParam('prodPrince')}</TextValue>
                            <CardQuant>
                                <TouchableOpacity onPress={() => this.props.remove(console.log(this.props.counter))}>
                                    <Icon name='navigate-before' size={50} color="blue"/>
                                </TouchableOpacity>
                                    <Text 
                                        style={{
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            width: 80,
                                            fontSize: 30, 
                                            borderWidth: 1, 
                                            borderRadius: 8,
                                            paddingTop: 2
                                        }}>
                                        {this.props.counter < 0 ? this.props.counter = 0: this.props.counter}
                                    </Text>
                                <TouchableOpacity onPress={() => this.props.add(console.log(this.props.counter))}>
                                    <Icon name='navigate-next' size={50} color="blue"/>
                                </TouchableOpacity>
                            </CardQuant>
                            <ViewTotal>
                                    <TextTotal>Total</TextTotal>
                                    <Text 
                                        style={{fontSize: 28, paddingLeft: 40}}>
                                            R$ {this.props.prod01.prince}{ this.props.counter}                             
                                    </Text> 
                            </ViewTotal>
                    </CardPrince>
                </ViewPrin>
            <ViewDesc>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('prodPrince')}
                    style={{
                        backgroundColor: 'red',
                        borderRadius: 10,
                        height: 70,
                        width: 400,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 50
                    }}
                >
                    <Text 
                        style={{
                            fontSize: 30, 
                            color: '#fff', 
                            fontWeight: 'bold',  
                        }}>
                        Adicionar <Icon name='shopping-cart' size={30} color="#fff"/>
                    </Text>
                </TouchableOpacity>
            </ViewDesc>
        </ContainerProduct>
    )
}}

//export default formProduct;

const mapStateToProps = (state) => ({
        counter: state.cartReducers.counter,
        prod01: state.productReducers.prod01
        //total: state.cartReducers.reduce((subtotal, item) => subtotal + item.this.props.prince, 0)
});

const mapDispatchToProps = (dispatch) =>({
    add: () => dispatch({ type: 'INCREMENT'}),
    remove: () => dispatch({ type: 'DECREMENT'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(formProduct);