import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomTextRegular from './CustomTextRegular'

const AuthRedirectText = ({desc_text, redirect_text, redirect_on_press}) => {
  return (
    <View style={{flexDirection:'row', marginTop:10}}>
      <CustomTextRegular style={{color:"#A7A6A5", fontSize:14, fontWeight:400}}>{desc_text}</CustomTextRegular>
      <TouchableOpacity onPress={redirect_on_press}>
        <CustomTextRegular  style={{marginLeft: 5, color:"#66CA98", fontSize:14, fontWeight:400, textDecorationLine: 'underline'}}>{redirect_text}</CustomTextRegular>
      </TouchableOpacity>
    </View>
  )
}


export default AuthRedirectText