import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import CustomTextBold from '../../components/CustomTextBold'
import { status_bar_height } from '../../Dimensions'

const BloodSugarTestScreen = () => {
  return (
    <ScrollView style={{backgroundColor:"#f5f5f5"}}>
      <View style={{paddingHorizontal:16}}>
        <CustomTextBold style={{color:"#CDCFCE", marginTop:status_bar_height+40, fontSize:24, marginBottom:55}}>Hey Johnson,</CustomTextBold>
      </View>
    </ScrollView>
  )
}

export default BloodSugarTestScreen