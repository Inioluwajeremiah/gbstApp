import { useFonts } from 'expo-font';
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const FormTextField = ({place_holder, place_holder_text_color, border_width, border_color}) => {

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require('../../assets/fonts/PoppinsRegular.ttf'),
  });

  if (!fontsLoaded) {
      return (
          null
      )
  }
  
  return (
    <TextInput placeholder={place_holder} placeholderTextColor={place_holder_text_color}
        style={[TextFieldStyle.container, {borderWidth:border_width, borderColor: border_color} ]}
    />
  )
}

const TextFieldStyle = StyleSheet.create({
    container: {
        backgroundColor: "#e8eceb",
        borderRadius: 10, 
        height: 44,
        paddingHorizontal:10,
        marginBottom: 20,
        fontFamily: 'PoppinsRegular'
    }
})

export default FormTextField