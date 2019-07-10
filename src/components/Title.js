import React from 'react'
import { Text, View, Image } from 'react-native'
import { Container } from '../pages/Styles_Main'


export default index = () =>  {
    return (
        <Container>
            <Image 
                style={{width: 410, height: 120, borderRadius: 60, justifyContent: 'center', alignItems: 'center'}} 
                source={ require('../images/title.jpg')}
            />
        </Container>
    )
}
