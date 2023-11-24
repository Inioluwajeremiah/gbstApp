
import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import logo from '../../assets/logo.png';
import { windowHeight, windowWidth } from '../Dimensions';

    
const LoadingScreen = ({navigation, title}) => {

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text style={{color:"#000"}}>{title}</Text>
        </View> 
    
    )
}

export default LoadingScreen