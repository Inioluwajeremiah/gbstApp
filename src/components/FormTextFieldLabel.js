import { useFonts } from 'expo-font';
import React from 'react'
import { StyleSheet, Text } from 'react-native';

const FormTextFieldLabel = ({text, text_color, border_width, border_color}) => {

    const [fontsLoaded] = useFonts({
        PoppinsRegular: require('../../assets/fonts/PoppinsRegular.ttf'),
      });
    
      if (!fontsLoaded) {
          return (
              null
          )
      }
      
      return (
        <Text style={[TextFieldStyle.container, {color:"#7C7C7C", borderWidth:border_width, borderColor: border_color} ]}>
            {text}
        </Text>
      )
    }
    
    const TextFieldStyle = StyleSheet.create({
        container: {
            backgroundColor: "#e8eceb",
            borderRadius: 10, 
            height: 44,
            paddingHorizontal:10,
            marginBottom: 20,
            fontFamily: 'PoppinsRegular',
            paddingVertical: 10, 
            justifyContent:'center'
        }
    })
    

export default FormTextFieldLabel