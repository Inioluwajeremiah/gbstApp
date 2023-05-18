import React from 'react'
import { ImageBackground, ScrollView, View, StatusBar, TouchableOpacity } from 'react-native'
import { windowHeight } from '../../Dimensions'
import clinical from '../../../assets/clinical.jpg'
import { Path, Svg } from 'react-native-svg'
import { DrawerActions } from '@react-navigation/native'
import CustomTextBold from '../../components/CustomTextBold'
import FormTextField from '../../components/FormTextField'
import Button from '../../components/Button'
import CustomHeader from '../../components/CustomHeader'

const ClinicalInformationScreen = ({navigation}) => {

  let status_bar_height = StatusBar.currentHeight
  return (
    <ScrollView  style={{backgroundColor:"#f5f5f5"}}>
    <ImageBackground source={clinical} style={{resizeMode:'cover', marginBottom:30, flex: 1, width:"100%", marginTop: -status_bar_height , height: windowHeight/3}}>
      <View  style={{flex: 1, backgroundColor: 'rgba(102, 202, 152, 0.359)',justifyContent: 'center',alignItems: 'center'}}>
        {/* dashboard menu icon */}
        <CustomHeader background_color='#66CA98' navHome={() => navigation.navigate("Home")} toggleDrawer={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>

        {/* screen title */}
        <CustomTextBold style={{fontSize:28, fontWeight:"800", backgroundColor:"rgba(1, 87, 44, 0.462)", paddingHorizontal:10, paddingVertical:3, color:"#fff", position:"absolute", left:16, bottom:16}}>Clinical History</CustomTextBold>
      </View>
    </ImageBackground>

    <View style={{paddingHorizontal:16}}>
      <FormTextField place_holder ="Body weight (kg)"/>
      <FormTextField place_holder ="Height (meters)"/>
      <FormTextField place_holder ="BMI (Weight/Height)"/>
      <FormTextField place_holder ="Arm circumference (meters)"/>
      <FormTextField place_holder ="Waist circumference (meters)"/>
      <FormTextField place_holder ="Hip circumference (meters)"/>
      <FormTextField place_holder ="Waist/Hip circumference (meters)"/>
      <FormTextField place_holder ="Gestational age at diagnosis of GDM "/>

      <Button title='Submit' onPress={null} bg_color={"#66CA98"} />
    </View>
    
  </ScrollView>
  )
}

export default ClinicalInformationScreen