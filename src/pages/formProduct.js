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
import { addProductCart } from '../actions/productActions'
import { add, remove } from '../actions/qtdProdActions'

class formProduct extends Component {
    constructor(props){
        super(props);
            this.state = {
                counter: 1
            }
    }

    _addProductCart(){
        const { description, price, image } = this.props;
        this.props.addProductCart({ description, price, image })
    }

    render(){
        if(this.state.counter < 1){
            this.state.counter = 1;
        }
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
                                <TouchableOpacity onPress={() => this.setState({ counter: this.state.counter -1 })}>
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
                                        {this.state.counter}
                                    </Text>
                                <TouchableOpacity onPress={() => this.setState({ counter: this.state.counter +1 })}>
                                    <Icon name='navigate-next' size={50} color="blue"/>
                                </TouchableOpacity>
                            </CardQuant>
                            <ViewTotal>
                                    <TextTotal>Total</TextTotal>
                                    <Text 
                                        style={{fontSize: 28, paddingLeft: 40}}>
                                            R$ {this.state.counter > 0 ? this.props.navigation.getParam('prodPrice') * this.state.counter : this.props.navigation.getParam('prodPrice')}                             
                                    </Text> 
                            </ViewTotal>
                    </CardPrice>
                </ViewPrin>
            <ViewDesc>
                <TouchableOpacity onPress={() => this._addProductCart(console.log(this._addProductCart()))}
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
    addvalue: state.productReducers.payload
});

export default connect(mapStateToProps, {addProductCart, add, remove})(formProduct);