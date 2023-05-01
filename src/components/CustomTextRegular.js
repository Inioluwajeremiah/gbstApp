import { useFonts } from 'expo-font';
import React from 'react'
import { Text } from 'react-native';

const CustomTextRegular = (props) => {
    const [fontsLoaded] = useFonts({
        PoppinsRegular: require('../../assets/fonts/PoppinsRegular.ttf'),
    });

    if (!fontsLoaded) {
        return (
            null
        )
    }
  return (
    <Text 
    {...props} style={[props.style, { fontFamily: 'PoppinsRegular' }]}>
         {/* {...props} style={{ fontFamily: 'PoppinsRegular' }}>{props.children} */}
    </Text>
  )
}

export default CustomTextRegular