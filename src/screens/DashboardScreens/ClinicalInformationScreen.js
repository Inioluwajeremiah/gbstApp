import React, { useContext, useState } from 'react'
import { ImageBackground, ScrollView, View, StatusBar, TouchableOpacity } from 'react-native'
import { windowHeight } from '../../Dimensions'
import clinical from '../../../assets/clinical.jpg'
import { Path, Svg } from 'react-native-svg'
import { DrawerActions } from '@react-navigation/native'
import CustomTextBold from '../../components/CustomTextBold'
import FormTextField from '../../components/FormTextField'
import Button from '../../components/Button'
import CustomHeader from '../../components/CustomHeader'
import { GbstContext } from '../../GbstContext'
import { Alert } from 'react-native'

const ClinicalInformationScreen = ({navigation}) => {

  const {userId, SaveDoc} = useContext(GbstContext);

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0);
  const [armCircumference, setArmCircumference] = useState(0);
  const [waistCircuference, setWaistCircumference] = useState(0);
  const [hipCircumference, setHipCirumference] = useState(0);
  const [gestationalAge, setGestationalAge] = useState(0);

  const bmi = useMemo(() => weight / height, [weight, height]);
  const waistHipCircumference = useMemo(() => waistCircuference / hipCircumference, [
    waistCircuference, hipCircumference, ]);

  let status_bar_height = StatusBar.currentHeight

  const SaveClinicalInformation = () => {
    Alert.alert(userId)
    clinicalObject = {
      'weight': weight,
      'height': height,
      'bmi': bmi,
      'armCircumference': armCircumference,
      'waistCircuference': waistCircuference,
      'hipCircumference': hipCircumference,
      'waistHipCircumference': waistHipCircumference,
      'gestationalAge': gestationalAge
    }
    // set doc to firestore
    SaveDoc('ClinicalInformation', userId, clinicalObject)
  }

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
    {/* place_holder, place_holder_text_color, border_width, border_color,onChangeText,props */}
    <View style={{paddingHorizontal:16}}>
      <FormTextField 
        place_holder ="Body weight (kg)"
        // place_holder_text_color={""}
        onChangeText={(wt) => setWeight(wt.target.value.trim())}
        keyboardType ="numeric"
      />
      <FormTextField 
        place_holder ="Height (meters)"
        keyboardType ="numeric"
        onChangeText={(ht) => setHeight(ht.target.value.trim())}
      />
      <FormTextField 
        place_holder = {`BMI = ${bmi}`}
        keyboardType = "numeric"
      />
      <FormTextField 
        place_holder ="Arm circumference (meters)"
        keyboardType ="numeric"
        onChangeText={(arc) => setArmCircumference(arc.target.value.trim())}
      />
      <FormTextField 
        place_holder ="Waist circumference (meters)"
        keyboardType ="numeric"
        onChangeText={(wsc) => setWaistCircumference(wsc.target.value.trim())}
      />
      <FormTextField 
        place_holder ="Hip circumference (meters)"
        keyboardType ="numeric"
        onChangeText={(hpc) => setHipCirumference(hpc.target.value.trim())}
      />
      <FormTextField 
        place_holder ={`Waist/Hip circumference (meters) = ${waistHipCircumference}`}
        keyboardType ="numeric"

      />
      <FormTextField 
        place_holder ="Gestational age at diagnosis of GDM"
        keyboardType ="numeric"
        onChangeText={(gp) => setGestationalAge(gp.target.value.trim())}
      />

      <Button title='Submit' btn_on_press={SaveClinicalInformation} bg_color={"#66CA98"} />
    </View>
    
  </ScrollView>
  )
}

export default ClinicalInformationScreen