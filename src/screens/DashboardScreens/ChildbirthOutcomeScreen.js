import React from 'react'
import { ImageBackground, ScrollView, View, StatusBar, TouchableOpacity } from 'react-native'
import { windowHeight } from '../../Dimensions'
import childbirth from '../../../assets/childbirth.jpg'
import { Path, Svg } from 'react-native-svg'
import { DrawerActions } from '@react-navigation/native'
import CustomTextBold from '../../components/CustomTextBold'
import FormTextField from '../../components/FormTextField'
import FormTextFieldLabel from '../../components/FormTextFieldLabel'
import MyRadioGroup from '../../components/RadioGroupComponent'
import Button from '../../components/Button'
import CustomHeader from '../../components/CustomHeader'

const ChildbirthOutcomeScreen = ({navigation}) => {

  const childbirth_data = [{id:1, label:"Yes"},{id:2, label:"No"}]
  const outcome_data = [{id:1, label:"Alive"},{id:2, label:"Stillbirth"}, {id:3, label:"Abort"}, {id:1, label:"Matertnal Mortality"}]

  let status_bar_height = StatusBar.currentHeight

  return (
    <ScrollView  style={{backgroundColor:"#f5f5f5"}}>
    <ImageBackground source={childbirth} style={{resizeMode:'cover', marginBottom:30, flex: 1, width:"100%", marginTop: -status_bar_height , height: windowHeight/3}}>
      <View  style={{flex: 1, backgroundColor: 'rgba(246, 195, 93, 0.459)',justifyContent: 'center',alignItems: 'center'}}>
        {/* dashboard menu icon */}
        
        <CustomHeader background_color='#F6C25D' navHome={() => navigation.navigate("Home")} toggleDrawer={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>
        {/* screen title */}
        <CustomTextBold style={{fontSize:28, fontWeight:"800", backgroundColor:"rgba(176, 118, 3, 0.589)", paddingHorizontal:10, paddingVertical:3, color:"#fff", position:"absolute", left:16, bottom:16}}>Obstetric History</CustomTextBold>
      </View>
    </ImageBackground>

    <View style={{paddingHorizontal:16}}>
     
      {/* mode of delivery */}
      <FormTextFieldLabel text ="Mod of delivery?"/>
      <MyRadioGroup array={childbirth_data} field_name={"childbirth"} sub_field_name={"mode_of_delivery"}/>

       {/* birth weight */}
       <FormTextField place_holder ="Birth weight (kg)"/>

       {/* outcome of childbirth */}
       <FormTextFieldLabel text ="Outcome of childbirth?"/>
      <MyRadioGroup array={outcome_data} field_name={"childbirth"} sub_field_name={"childbirth_outcome"}/>

      {/* blood sugar after period */}
      <FormTextField place_holder ="Blood sugar result after"/>

      {/* gestation age */}
      <FormTextField place_holder ="Blood sugar result six weeks after childbirth"/>

      <Button title='Submit' onPress={null} bg_color={"#F6C25D"} />
    </View>
    
  </ScrollView>
  )
}

export default ChildbirthOutcomeScreen