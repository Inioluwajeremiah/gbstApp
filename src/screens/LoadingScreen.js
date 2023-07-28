
import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import logo from '../../assets/logo.png';
import { windowHeight, windowWidth } from '../Dimensions';

    
const LoadingScreen = ({navigation}) => {
    
    
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigation.reset({
    //         index: 0,
    //         routes: [{ name: 'HomeNav'}],
    //         });
    //     }, 500); // delay navigation for 3 seconds
    
    //     return () => clearTimeout(timer); // clear timeout on unmount
    //     }, []);

    return (
    
        <View  
            style={{resizeMode:'cover' , flex: 1, height: windowHeight}}>
            <ActivityIndicator size="large" color="#00ff00" style={{width:windowWidth/3, height:windowWidth/3, justifyContent:'center', alignItems:'center'}} />
            
        </View>
    
    )
}

export default LoadingScreen