import React from 'react'
import ScreenTItle from './ScreenTItle'
import { Image, View } from 'react-native'
import logo2 from '../../assets/logo2.png'

const FormHeader = ({screen_title}) => {
  return (
    <View style={{width:"100%", display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', marginBottom:35}}>
        <Image source={logo2} style={{marginTop: 60}}/>
        <View style={{marginTop:44}}>
            <ScreenTItle title={screen_title}/>
        </View>
    </View>
  )
}

export default FormHeader