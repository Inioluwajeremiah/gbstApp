import React from 'react'
import { StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native'
import CustomTextRegular from './CustomTextRegular'

const Button = ({title, btn_on_press}) => {
  return (
      <TouchableOpacity style={{padding:10}} onPress={btn_on_press}>
        <CustomTextRegular style={buttonStyles.textStyle} >{title}</CustomTextRegular>
      </TouchableOpacity>
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