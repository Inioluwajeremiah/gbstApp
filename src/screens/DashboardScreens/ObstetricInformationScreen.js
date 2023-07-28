import React, { useState } from 'react'
import { ImageBackground, ScrollView, View, StatusBar, TouchableOpacity } from 'react-native'
import { windowHeight } from '../../Dimensions'
import obstetric from '../../../assets/obstetric.jpg'
import { Path, Svg } from 'react-native-svg'
import { DrawerActions } from '@react-navigation/native'
import CustomTextBold from '../../components/CustomTextBold'
import FormTextField from '../../components/FormTextField'
import FormTextFieldLabel from '../../components/FormTextFieldLabel'
import MyRadioGroup from '../../components/RadioGroupComponent'
import Button from '../../components/Button'
import CustomHeader from '../../components/CustomHeader'

const ObstetricInformationScreen = ({navigation}) => {

  const {localUserId, saveDoc} = useContext(GbstContext);

  const [previousPregnancy, setPreviousPregnancy] = useState('')
  

  const birth_with_4kg = [{id:1, label:"Yes"},{id:2, label:"No"}]

  let status_bar_height = StatusBar.currentHeight
  
  return (
    <ScrollView  style={{backgroundColor:"#f5f5f5"}}>
      <ImageBackground source={obstetric} style={{resizeMode:'cover', marginBottom:30, flex: 1, width:"100%", marginTop: -status_bar_height , height: windowHeight/3}}>
        <View  style={{flex: 1, backgroundColor: 'rgba(97, 149, 227, 0.459)',justifyContent: 'center',alignItems: 'center'}}>
          {/* dashboard menu icon */}
        
          <CustomHeader background_color='#6295E2' navHome={() => navigation.navigate("Home")} toggleDrawer={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>

          {/* screen title */}
          <CustomTextBold style={{fontSize:28, fontWeight:"800", backgroundColor:"rgba(0, 73, 184, 0.462)", paddingHorizontal:10, paddingVertical:3, color:"#fff", position:"absolute", left:16, bottom:16}}>Obstetric History</CustomTextBold>
        </View>
      </ImageBackground>

      <View style={{paddingHorizontal:16}}>
        <FormTextField place_holder ="Number of previous pregnancies"/>
        <FormTextField place_holder ="Number of previous miscarriages"/>
        <FormTextField place_holder ="Number of previous voluntary termination of pregnancies"/>
        <FormTextField place_holder ="How many childbirth deliveries have you had?"/>
        {/* birth with 4kg */}
        <FormTextFieldLabel text ="Have you had a baby with a birth weight of 4kg and above?"/>
        <MyRadioGroup array={birth_with_4kg} field_name={"Obstetric"} sub_field_name={"birth_with_4kg"}/>

         {/* pregnancy with stillbirth */}
         <FormTextFieldLabel text ="Have you had a pregnacy that resulted in a stillbirth?"/>
        <MyRadioGroup array={birth_with_4kg} field_name={"Obstetric"} sub_field_name={"stillbirth"}/>

         {/* cogential_malfomation */}
         <FormTextFieldLabel text ="Have you had a child born with cogenital malformation?"/>
        <MyRadioGroup array={birth_with_4kg} field_name={"Obstetric"} sub_field_name={"cogential_malfomation"}/>

        {/* menstral period */}
        <FormTextField place_holder ="When last did you have your menstrual period?"/>

        {/* gestation age */}
        <FormTextField place_holder ="What is your current Gestation age?"/>

        <Button title='Submit' onPress={null} bg_color={"#6295E2"} />
      </View>
      
    </ScrollView>
  )
}

export default ObstetricInformationScreen