import React, { useContext, useState } from 'react'
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
import { StyleSheet } from 'react-native'
import RadioButton from '../../components/RadioGroupComponent'
import { Alert } from 'react-native'
// import { GbstContext } from '../../GbstContext'

const ObstetricInformationScreen = ({navigation}) => {

  // const {localUserId, saveDoc} = useContext(GbstContext);

  const [previousPregnancy, setPreviousPregnancy] = useState('')
  const [noOfPregnancies, setNoOfPregnancies] = useState(0)
  const [gestationPeriod, setGestationPeriod] = useState(0)
  const [noOfMiscarriages, setNoOfMiscarriages] = useState(0)
  const [noOfVoluntaryPregnacyTermination, setNoOfVoluntaryPregnacyTermination] = useState(0)
  const [noOfChildbirthDeliveries, setNoOfChildbirthDeliveries] = useState(0)
  const [fourKgBirthWeight, set4kgBirthWeight] = useState('')
  const [anyStillbirth, setAnySillBirth] = useState('')
  const [childMalformation, setChildMalformation] = useState('')
  const [lastTimeOFMenstralPeriod, setLastTimeOFMenstralPeriod] = useState('')
  const [gestationalAge, setGestationalAge] = useState(0)
  const [unexplainedPrenatalLoss, setUnexplainedPrenatalLoss] = useState('')
  const [systolicBP, setSystolicBP] =  useState('')
  const [dialstolicBP, setDialstolicBP] =  useState('')
  const [loading, setLoading] = useState(false)
  
  const label_data= [{id:1, label:"Yes"},{id:2, label:"No"}]
  let status_bar_height = StatusBar.currentHeight

  const clearForm = ()  => {
    setNoOfPregnancies(0)
    setGestationPeriod(0)
    setNoOfMiscarriages(0)
    setNoOfVoluntaryPregnacyTermination(0)
    setNoOfChildbirthDeliveries(0)
    set4kgBirthWeight(0)
    setAnySillBirth('')
    setChildMalformation('')
    setLastTimeOFMenstralPeriod(0)
    setGestationalAge(0)
    setUnexplainedPrenatalLoss('')
    setSystolicBP('')
    setDialstolicBP('')
  }

  const handleSubmitButton = () => {
    setLoading(true)
    fetch('', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        noOfPregnancies: noOfPregnancies,
        gestationPeriod: gestationPeriod,
        noOfMiscarriages: noOfMiscarriages,
        noOfVoluntaryPregnacyTermination: noOfVoluntaryPregnacyTermination,
        noOfChildbirthDeliveries: noOfChildbirthDeliveries,
        fourKgBirthWeight: fourKgBirthWeight,
        anyStillbirth: anyStillbirth,
        cogenitalMalformation: childMalformation,
        lastTimeOFMenstralPeriod: lastTimeOFMenstralPeriod,
        gestationalAge: gestationalAge,
        unexplainedPrenatalLoss: unexplainedPrenatalLoss,
        systolicBP:systolicBP,
        dialstolicBP:dialstolicBP
      })
    }).then(response => response.json()).then(result => {
      Alert.alert("", result.message)
      setLoading(false)
    }).catch(error => {
      Alert.alert("", error.message)
      setLoading(false)
    })
  }
  
  return (
    <ScrollView  style={{backgroundColor:"#f5f5f5"}}>
      <ImageBackground source={obstetric} style={{resizeMode:'cover', marginBottom:30, flex: 1, width:"100%", marginTop: -status_bar_height , height: windowHeight/3}}>
        <View  style={{flex: 1, backgroundColor: 'rgba(97, 149, 227, 0.459)',justifyContent: 'center',alignItems: 'center'}}>
          {/* dashboard menu icon */}
        
          <CustomHeader background_color='#6295E2' navHome={() => navigation.navigate("Home")} toggleDrawer={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>

          {/* screen title */}
          <CustomTextBold style={{fontSize:28, fontWeight:"800", backgroundColor:"rgba(0, 73, 184, 0.462)", paddingHorizontal:10, paddingVertical:3, color:"#fff", position:"absolute", left:16, bottom:16}}>Obstetric Information</CustomTextBold>
        </View>
      </ImageBackground>

      <View style={{paddingHorizontal:16}}>
        <FormTextField place_holder ="Number of previous pregnancies"
          onChangeText={(e) => setNoOfPregnancies(e)}
        />
        <FormTextField place_holder ="Gestation in previous pregnancy"
          onChangeText={(e) => setGestationPeriod(e)}
        />
        <FormTextField place_holder ="Number of previous miscarriages"
          onChangeText={(e) => setNoOfMiscarriages(e)}
        />
        <FormTextField place_holder ="Number of previous voluntary termination of pregnancies"
          onChangeText={(e) => setNoOfVoluntaryPregnacyTermination(e)}
        />
        <FormTextField place_holder ="How many childbirth deliveries have you had?"
          onChangeText={(e) => setNoOfChildbirthDeliveries(e)}
        />
        {/* birth with 4kg */}
        <FormTextFieldLabel text ="Have you had a baby with a birth weight of 4kg and above?"/>
        <View style={styles.container2}>
          {
            label_data.map((item, index) => 
              <RadioButton key={index}
                label={item.label}
                selected={fourKgBirthWeight === `${item.label}`}
                onPress={() => set4kgBirthWeight(`${item.label}`)}
              />
            )
          }
        </View>
        {/* <MyRadioGroup array={birth_with_4kg} field_name={"Obstetric"} sub_field_name={"birth_with_4kg"}/> */}

         {/* pregnancy with stillbirth */}
         <FormTextFieldLabel text ="Have you had a pregnacy that resulted in a stillbirth?"/>
         <View style={styles.container2}>
          {
            label_data.map((item, index) => 
              <RadioButton key={index}
                label={item.label}
                selected={anyStillbirth === `${item.label}`}
                onPress={() => setAnySillBirth(`${item.label}`)}
              />
            )
          }
        </View>
        {/* <MyRadioGroup array={birth_with_4kg} field_name={"Obstetric"} sub_field_name={"stillbirth"}/> */}

         {/* cogential_malformation */}
         <FormTextFieldLabel text ="Have you had a child born with cogenital malformation?"/>
         <View style={styles.container2}>
          {
            label_data.map((item, index) => 
              <RadioButton key={index}
                label={item.label}
                selected={childMalformation === `${item.label}`}
                onPress={() => setChildMalformation(`${item.label}`)}
              />
            )
          }
        </View>
        {/* cogential_malfomation */}
        <FormTextFieldLabel text ="Unexplained prenatal loss"/>
         <View style={styles.container2}>
          {
            label_data.map((item, index) => 
              <RadioButton key={index}
                label={item.label}
                selected={unexplainedPrenatalLoss === `${item.label}`}
                onPress={() => setUnexplainedPrenatalLoss(`${item.label}`)}
              />
            )
          }
        </View>
        {/* <MyRadioGroup array={birth_with_4kg} field_name={"Obstetric"} sub_field_name={"cogential_malfomation"}/> */}

        {/* menstral period */}
        <FormTextField place_holder ="When last did you have your menstrual period (in months)?"
          onChangeText={(e) => setLastTimeOFMenstralPeriod(e)}
        />

        {/* gestation age */}
        <FormTextField place_holder ="What is your current Gestation age?"
          onChangeText={(e) => setGestationalAge(e)}
        />
         {/* gestation age */}
         <FormTextField place_holder ="Systolic BP"
          onChangeText={(e) => setSystolicBP(e)}
        />
         {/* gestation age */}
         <FormTextField place_holder ="Dialstolic BP"
          onChangeText={(e) => setDialstolicBP(e)}
        />

        <Button title='Submit' onPress={handleSubmitButton} bg_color={"#6295E2"} spinner_color={'#fff'} loading={loading} />
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container2: {
   backgroundColor: 'white',
   borderRadius: 8,
   padding: 16,
   marginBottom: 16,
   marginHorizontal:16,
   shadowColor: '#000',
   shadowOpacity: 0.2,
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowRadius: 2,
   elevation: 2
 }
 })

export default ObstetricInformationScreen