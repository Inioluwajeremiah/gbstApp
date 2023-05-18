import React from 'react'
import { ImageBackground, ScrollView, View, StatusBar, TouchableOpacity } from 'react-native'
import { windowHeight } from '../../Dimensions'
import medical from '../../../assets/medical.jpg'
import { Path, Svg } from 'react-native-svg'
import { DrawerActions } from '@react-navigation/native'
import CustomTextBold from '../../components/CustomTextBold'
import FormTextField from '../../components/FormTextField'
import FormTextFieldLabel from '../../components/FormTextFieldLabel'
import MyRadioGroup from '../../components/RadioGroupComponent'
import Button from '../../components/Button'
import CustomHeader from '../../components/CustomHeader'

const MedicalHistoryScreen = ({navigation}) => {

  const arraydata = [{id:1, label:"Yes"},{id:2, label:"No"}, {id:3, label:"Not sure"}]

  let status_bar_height = StatusBar.currentHeight


  return (
    <ScrollView  style={{backgroundColor:"#f5f5f5"}}>
      <ImageBackground source={medical} style={{resizeMode:'cover', marginBottom:30, flex: 1, width:"100%", marginTop: -status_bar_height , height: windowHeight/3}}>
        <View  style={{flex: 1, backgroundColor: 'rgba(255, 108, 82, 0.459)',justifyContent: 'center',alignItems: 'center'}}>
          {/* dashboard menu icon and home icon */}
          <CustomHeader background_color='#FF6C52' navHome={() => navigation.navigate("Home")} toggleDrawer={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>
          {/* screen title */}
          <CustomTextBold style={{fontSize:28, fontWeight:"800", backgroundColor:"rgba(175, 29, 3, 0.462)", paddingHorizontal:10, paddingVertical:3, color:"#fff", position:"absolute", left:16, bottom:16}}>Obstetric History</CustomTextBold>
        </View>
      </ImageBackground>

      <View style={{paddingHorizontal:16}}>
        
        {/*hypertension */}
        <FormTextFieldLabel text ="Hypertension"/>
        <MyRadioGroup array={arraydata} field_name={"Medical"} sub_field_name={"hypertension"}/>

         {/* diabetes mellitus */}
         <FormTextFieldLabel text ="Diabetes Mellitus"/>
        <MyRadioGroup array={arraydata} field_name={"Medical"} sub_field_name={"diabetes"}/>

         {/* asthma */}
         <FormTextFieldLabel text ="Asthma"/>
        <MyRadioGroup array={arraydata} field_name={"Medical"} sub_field_name={"asthma"}/>

         {/* chronic lungs disease */}
         <FormTextFieldLabel text ="Chronic Lung Diseases"/>
        <MyRadioGroup array={arraydata} field_name={"Medical"} sub_field_name={"lungs"}/>

         {/* Sickel Cell Disease */}
         <FormTextFieldLabel text ="Sickle Cell Disease"/>
        <MyRadioGroup array={arraydata} field_name={"Medical"} sub_field_name={"sickle_cell"}/>

         {/* pcos */}
         <FormTextFieldLabel text ="Polycystic Ovary Syndrome (PCOS)"/>
        <MyRadioGroup array={arraydata} field_name={"Medical"} sub_field_name={"pcos"}/>

        {/* if yes to above */}
        <FormTextField place_holder ="If YES to Diabetes mellitus, how long were you on treatment?"/>

        {/* gestation diabetes mellitus */}
        <FormTextFieldLabel text ="Have you ever had Gestational Diabetes Mellitus?"/>
        <MyRadioGroup array={arraydata} field_name={"Medical"} sub_field_name={"gdm"}/>

        <Button title='Submit' onPress={null} bg_color={"#FF6C52"} />
      </View>
      
    </ScrollView>
  )
}

export default MedicalHistoryScreen