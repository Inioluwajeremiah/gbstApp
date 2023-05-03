import React from 'react'
import { StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native'
import CustomTextRegular from './CustomTextRegular'
import { View } from 'react-native'
import { color } from 'react-native-reanimated'

const Button = ({title, bg_color, btn_on_press}) => {
  return (
      <View style={{with:"100%", justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity style={{padding:10, }} onPress={btn_on_press}>
        <CustomTextRegular style={ [buttonStyles.textStyle, {backgroundColor:bg_color}]} >{title}</CustomTextRegular>
      </TouchableOpacity>
      </View>
  )
}

const buttonStyles = StyleSheet.create({
  textStyle: {
    height: 50,
    width: 250,
    borderRadius: 18,
    padding:10, 
    backgroundColor: '#66CA98',
    color:"#FFF",
    fontSize: 16,
    textAlign: 'center',
  }
})

export default Button