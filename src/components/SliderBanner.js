import React, { Component } from 'react'
import { 
  Image,
  View,
} from 'react-native'

import Swiper from 'react-native-swiper-flatlist'

const Slider = props => (
    <Image style ={styles.image}
      source={props.uri}
    />      
)

const styles ={
  image: {
    width: 435,
    height: 170,
    borderRadius: 8,
  },
  views:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 435,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginRight: 15,
    marginLeft: 8,
  }
}

export default class extends Component{
  constructor(props){
    super(props);
    this.state = {
      imagesSlider: [
        require('../images/slider/000.jpg'),
        require('../images/slider/001.jpg'),
        require('../images/slider/002.jpg'),
      ]
    }
  }
  render(){
    return(
      <View style={styles.views}>
        <Swiper style={styles.image}
          autoplay
          autoplayDelay={3}
          autoplayLoop
          showPagination
          paginationDefaultColor={'white'}
          paginationActiveColor={'red'}
          paginationStyleItem={{width: 8, height: 8}}
        >
          {this.state.imagesSlider.map((item, i) =>
            <Slider
              uri={item}
              key={i}
            />)
          }
        </Swiper>
      </View>
    )
  }
}


