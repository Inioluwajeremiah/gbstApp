import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import CustomTextRegular from './CustomTextRegular'

const LongButton = ({text, on_press,loading, spinner_color}) => {
  return (
    <TouchableOpacity onPress={() => on_press()}
        style={{width:"90%", backgroundColor:"#66CA98", flexDirection:"row", justifyContent:'space-between', alignSelf:'center', paddingHorizontal:20, borderRadius:18, marginBottom:18, paddingVertical:10}}>
        <CustomTextRegular style={{fontSize:18, fontWeight:"500", lineHeight:22, color:"#F4F6F5", paddingVertical:5}}>{text}</CustomTextRegular>
        {
          loading ?
          <ActivityIndicator size="small" color={spinner_color ? `${spinner_color}` : "#fff"} />
          :
          <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.25 15H23.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M15 6.25L23.75 15L15 23.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
        
      }
        
    </TouchableOpacity>
  )
}

export default LongButton