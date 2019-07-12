import React, { Component } from 'react' 
import { TouchableOpacity, Image, Text, View } from 'react-native'

import TopTitle from '../components/Title'
import Slider from '../components/SliderBanner'
import { 
        Container,
        TextPrice,
        BorderItens,
        RowsProducts, 
        TextItens, 
        ViewItens,
        ContainerCategory,
        TextCartegory
} from './Styles_Main'

import { connect } from 'react-redux'

const Main = (props)=> {
    return(
        <Container> 
            <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
            <TopTitle />
                <Slider />
                    <Container>
                        <TextCartegory>Teste</TextCartegory>
                        <ContainerCategory>
                        <RowsProducts>
                            <TouchableOpacity 
                                onPress={() =>
                                    props.navigation.navigate('FormProduct', {prodDesc: props.prod01.description, prodPrice: props.prod01.price, prodImg: props.prod01.image})  
                                }>
                                <BorderItens>       
                                    <ViewItens>
                                        <TextItens >
                                            {props.prod01.description}
                                        </TextItens>
                                        <Image style={{width: 120, height: 100}} 
                                            source={ props.prod01.image }
                                        />
                                        <TextPrice>
                                            R$ {props.prod01.price}
                                        </TextPrice>

                                    </ViewItens>
                                </BorderItens>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => 
                                    props.navigation.navigate('FormProduct', {prodDesc: props.prod02.description, prodPrice: props.prod02.price, prodImg: props.prod02.image})
                                }>
                                <BorderItens>
                                    <ViewItens>
                                        <TextItens>
                                            {props.prod02.description}
                                        </TextItens>
                                        <Image style={{width: 120, height: 100}} 
                                        source={ props.prod02.image}
                                        />
                                        <TextPrice>
                                            R$ {props.prod02.price}
                                        </TextPrice>

                                    </ViewItens>
                                </BorderItens>
                            </TouchableOpacity>         
                        </RowsProducts>
                        <RowsProducts>
                            <TouchableOpacity 
                                onPress={() => 
                                    props.navigation.navigate('FormProduct', {prodDesc: props.prod03.description, prodPrice: props.prod03.price, prodImg: props.prod03.image})
                                }>
                                <BorderItens>
                                    <ViewItens>
                                        <TextItens>
                                            {props.prod03.description}
                                        </TextItens>
                                        <Image style={{width: 120, height: 100}} 
                                            source={props.prod03.image}
                                        />        
                                        <TextPrice>
                                            R$ {props.prod03.price}
                                        </TextPrice>

                                    </ViewItens>
                                </BorderItens>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => 
                                    props.navigation.navigate('FormProduct', {prodDesc: props.prod04.description, prodPrice: props.prod04.price, prodImg: props.prod04.image})
                                }>
                                <BorderItens>
                                    <ViewItens>
                                        <TextItens> 
                                            {props.prod04.description}
                                        </TextItens>
                                        <Image style={{width: 120, height: 100}} 
                                        source={props.prod04.image}
                                        />
                                        <TextPrice>
                                            R$ {props.prod04.price}
                                        </TextPrice>

                                    </ViewItens>
                                </BorderItens>
                            </TouchableOpacity>
                        </RowsProducts>
                        </ContainerCategory>
                        <TextCartegory>Teste2</TextCartegory>
                        <ContainerCategory>
                        <RowsProducts>
                            <TouchableOpacity 
                                onPress={() => 
                                    props.navigation.navigate('FormProduct', {prodDesc: props.prod05.description, prodPrice: props.prod05.price, prodImg: props.prod05.image})
                                }>
                                <BorderItens>
                                    <ViewItens>
                                        <TextItens> 
                                            {props.prod05.description} 
                                        </TextItens>
                                        <Image style={{width: 120, height: 100}} 
                                        source={props.prod05.image}
                                        />
                                        <TextPrice>
                                            R$ {props.prod05.price}
                                        </TextPrice>

                                    </ViewItens>
                                </BorderItens>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => 
                                    props.navigation.navigate('FormProduct', {prodDesc: props.prod06.description, prodPrice: props.prod06.price, prodImg: props.prod06.image})
                                }>
                                <BorderItens>
                                    <ViewItens>
                                        <TextItens> 
                                            {props.prod06.description} 
                                        </TextItens>
                                        <Image style={{width: 120, height: 100}} 
                                        source={props.prod06.image}
                                        />
                                        <TextPrice> 
                                            R$ {props.prod06.price} 
                                        </TextPrice>

                                    </ViewItens>
                                </BorderItens>
                            </TouchableOpacity>
                        </RowsProducts>
                        <RowsProducts>
                            <TouchableOpacity 
                                onPress={() => 
                                    props.navigation.navigate('FormProduct', {prodDesc: props.prod07.description, prodPrice: props.prod07.price, prodImg: props.prod07.image})
                                }>
                                <BorderItens>
                                    <ViewItens>
                                        <TextItens> 
                                            {props.prod07.description} 
                                        </TextItens>
                                        <Image style={{width: 120, height: 100}} 
                                        source={props.prod07.image}
                                        />
                                        <TextPrice> 
                                            R$ {props.prod07.price} 
                                        </TextPrice>

                                    </ViewItens>
                                </BorderItens>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => 
                                    props.navigation.navigate('FormProduct', {prodDesc: props.prod08.description, prodPrice: props.prod08.price, prodImg: props.prod08.image})
                                }>
                                <BorderItens>
                                    <ViewItens>
                                        <TextItens> 
                                            {props.prod08.description} 
                                        </TextItens>
                                        <Image style={{width: 120, height: 100}} 
                                        source={props.prod08.image}
                                        />
                                    <TextPrice> 
                                        R$ {props.prod08.price} 
                                    </TextPrice>       
                                    </ViewItens>
                                </BorderItens>
                            </TouchableOpacity>
                        </RowsProducts>
                        </ContainerCategory>
                        <TextCartegory>Teste3</TextCartegory>
                        <ContainerCategory>
                        <RowsProducts>
                            <TouchableOpacity 
                                onPress={() => 
                                    props.navigation.navigate('FormProduct', {prodDesc: props.prod09.description, prodPrice: props.prod09.price, prodImg: props.prod09.image})
                                }>
                                <BorderItens>
                                    <ViewItens>
                                        <TextItens> 
                                            {props.prod09.description} 
                                        </TextItens>
                                        <Image style={{width: 120, height: 100}} 
                                        source={props.prod09.image}
                                        />
                                        <TextPrice> 
                                            R$ {props.prod09.price} 
                                        </TextPrice>

                                    </ViewItens>
                                </BorderItens>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => 
                                props.navigation.navigate('FormProduct', {prodDesc: props.prod10.description, prodPrice: props.prod10.price, prodImg: props.prod10.image})
                            }>
                            <BorderItens>
                                <ViewItens>
                                    <TextItens> 
                                        {props.prod10.description} 
                                    </TextItens>
                                    <Image style={{width: 120, height: 100}} 
                                        source={props.prod10.image}
                                    />
                                    <TextPrice> 
                                        R$ {props.prod10.price} 
                                    </TextPrice>
                                </ViewItens>
                            </BorderItens>
                        </TouchableOpacity>
                    </RowsProducts>
                    </ContainerCategory>
                </Container>   
                </View>                
        </Container>
    )
}

const mapStateToProps = state => (
    {
        prod01: state.productReducers.prod01,
        prod02: state.productReducers.prod02,
        prod03: state.productReducers.prod03,
        prod04: state.productReducers.prod04,
        prod05: state.productReducers.prod05,
        prod06: state.productReducers.prod06,
        prod07: state.productReducers.prod07,
        prod08: state.productReducers.prod08,
        prod09: state.productReducers.prod09,
        prod10: state.productReducers.prod10,
    }
);

export default connect(mapStateToProps)(Main);

