import React from 'react'
import { StyleSheet, View } from 'react-native'
import AuthRedirectText from './AuthRedirectText'
import Button from './Button'

const FormFooter = ({desc_text_2, redirect_text_2, redirect_on_press_2, btn_text2, btn_on_press_2}) => {
  return (
   <View style={styles.container}>
    <Button title={btn_text2} btn_on_press={btn_on_press_2} bg_color={"#66CA98"} />
    <AuthRedirectText
        desc_text={desc_text_2 } redirect_text={redirect_text_2} redirect_on_press={redirect_on_press_2}
    />
   </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width:"100%",   
        // justifyContent:'center',
        // bottom: 20,
        // position: 'absolute',
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        padding:20,
    }
  })

export default FormFooter