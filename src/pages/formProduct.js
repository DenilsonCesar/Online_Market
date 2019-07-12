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
        CardPrice,
        TextTotal,
        ViewTotal,
} from './Styles_Main'

import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addProduct } from '../actions/productActions'
import { add, remove } from '../actions/qtdProdActions'

class formProduct extends Component {
    render(){
    return(
        <ContainerProduct>
            <Text>aaaaaaaaaaaaaa</Text>
                <ViewPrin>
                    <Image style={{width:250, height:280, marginRight: 5}}
                    source={this.props.navigation.getParam('prodImg')}/>
                    <CardPrice>
                        <CardTop>
                            <TextCard>{this.props.navigation.getParam('prodDesc')}</TextCard>
                        </CardTop>
                                <TextValue>R$ {this.props.navigation.getParam('prodPrice')}</TextValue>
                            <CardQuant>
                                <TouchableOpacity onPress={() => this.props.remove()}>
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
                                            paddingTop: 2,
                                        }}>
                                        {this.props.counter < 0 ? this.props.counter = 0: this.props.counter}
                                    </Text>
                                <TouchableOpacity onPress={() => this.props.add()}>
                                    <Icon name='navigate-next' size={50} color="blue"/>
                                </TouchableOpacity>
                            </CardQuant>
                            <ViewTotal>
                                    <TextTotal>Total</TextTotal>
                                    <Text 
                                        style={{fontSize: 28, paddingLeft: 40}}>
                                            R$ {this.props.counter > 0 ? this.props.navigation.getParam('prodPrice') * this.props.counter : this.props.navigation.getParam('prodPrice')}                             
                                    </Text> 
                            </ViewTotal>
                    </CardPrice>
                </ViewPrin>
            <ViewDesc>
                <TouchableOpacity onPress={(description, price, image) => this.props.addProduct(console.log(this.props.addProduct()), description, price, image)}
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

const mapStateToProps = (state) => ({
    counter: state.qtdReducers.counter,
    addvalue: state.productReducers.payload
});

export default connect(mapStateToProps, {addProduct, add, remove})(formProduct);