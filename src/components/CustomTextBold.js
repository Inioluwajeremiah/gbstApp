import React from 'react'
import {Text } from 'react-native';
import { useFonts } from 'expo-font';

const CustomTextBold = (props) => {
    const [fontsLoaded] = useFonts({
        Poppins: require('../../assets/fonts/PoppinsBold.ttf'),
    });

    if (!fontsLoaded) {
        return (
            null
        )
    }
  return (
    <Text 
    {...props} style={[props.style, { fontFamily: 'Poppins' }]}>
    {/* {...props} style={{ fontFamily: 'Poppins' }}>{props.children} */}
    </Text>
  )
}

export default CustomTextBold