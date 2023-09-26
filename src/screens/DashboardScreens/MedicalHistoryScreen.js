import React, { useState } from 'react'
import { ImageBackground, ScrollView, View, StatusBar, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { windowHeight } from '../../Dimensions'
import medical from '../../../assets/medical.jpg'
import { DrawerActions } from '@react-navigation/native'
import CustomTextBold from '../../components/CustomTextBold'
import FormTextField from '../../components/FormTextField'
import FormTextFieldLabel from '../../components/FormTextFieldLabel'
import Button from '../../components/Button'
import CustomHeader from '../../components/CustomHeader'
import RadioButton from '../../components/RadioGroupComponent'

const MedicalHistoryScreen = ({navigation}) => {

  const [hypertension, setHypertension] = useState('')
  const [diabetes, setDiabetes] = useState('')
  const [asthma, setAsthma] = useState('')
  const [chronicLungDisease, setChronicLungDisease] = useState('')
  const [sickleCellDisease, setSickleCellDisease] = useState('')
  const [pcos, setPcos] = useState('')
  const [diabetesDuration, setDiabestesDuration] = useState('')
  const [GDM, setGDM] = useState(false)
  const [history, setHistory] = useState('')
  const [loading, setLoading] = useState(false)

  const arraydata = [{id:1, label:"Yes"},{id:2, label:"No"}, {id:3, label:"Not sure"}]

  let status_bar_height = StatusBar.currentHeight

  const clearForm = () => {
    setHypertension('')
    setDiabetes('')
    setAsthma('')
    setChronicLungDisease('')
    setSickleCellDisease('')
    setPcos('')
    setDiabestesDuration('')
    setGDM('')
    setHistory('')
  }

  const handleSubmitButton = () => {

    if (!hypertension) {
      Alert.alert("", "Hypertension response required")
    } else if (!diabetes) {
      Alert.alert("", "Diabetes response required")
    } else if (!asthma) {
      Alert.alert("", "Asthma response required")
    } else if (!chronicLungDisease) {
      Alert.alert("", "Chronic Lung Disease response required")
    } else if (!sickleCellDisease) {
      Alert.alert("", "Sickle Cell Disease response required")
    } else if (!pcos) {
      Alert.alert("", "Polycytist Ovary Syndrome response required")
    } else if (!diabetesDuration) {
      Alert.alert("", "Duration of diabetes response required")
    } else if (!GDM) {
      Alert.alert("", "Gestaional Diabetes response required")
    } else {
      setLoading(true)
      fetch ("http://gbstaiapp.pythonanywhere.com/medical_history/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hypertension: hypertension,
          diabetes: diabetes,
          asthma: asthma,
          chronicLungDisease : chronicLungDisease,
          sickleCellDisease: sickleCellDisease,
          pcos: pcos,
          diabetesDuration: parseInt(diabetesDuration),
          gdm: GDM,
          history: history
        })
      }).then(response => response.json()).then(result => {
        if (result.message == "Medical History saved successfully!") {
          Alert.alert("", result.message)
          clearForm()
          setLoading(false)
        } else {
          Alert.alert("", result.message)
          setLoading(false)
        }
      }).catch(error => {
        Alert.alert("", error.message)
        // + hypertension + diabetes +asthma + chronicLungDisease+sickleCellDisease+pcos+diabetesDuration + GDM
        setLoading(false)
      })
    }
  }


  return (
    <ScrollView  style={{backgroundColor:"#f5f5f5"}}>
      <ImageBackground source={medical} style={{resizeMode:'cover', marginBottom:30, flex: 1, width:"100%", marginTop: -status_bar_height , height: windowHeight/3}}>
        <View  style={{flex: 1, backgroundColor: 'rgba(255, 108, 82, 0.459)',justifyContent: 'center',alignItems: 'center'}}>
          {/* dashboard menu icon and home icon */}
          <CustomHeader background_color='#FF6C52' navHome={() => navigation.navigate("Home")} toggleDrawer={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>
          {/* screen title */}
          <CustomTextBold style={{fontSize:28, fontWeight:"800", backgroundColor:"rgba(175, 29, 3, 0.462)", paddingHorizontal:10, paddingVertical:3, color:"#fff", position:"absolute", left:16, bottom:16}}>Medical History</CustomTextBold>
        </View>
      </ImageBackground>

      <View style={{paddingHorizontal:16}}>
        
        {/*hypertension */}
        <FormTextFieldLabel text ="Hypertension"/>
        <View style={styles.container2}>
          {
            arraydata.map((item, index) => 
              <RadioButton key={index}
                label={item.label}
                selected={hypertension === `${item.label}`}
                onPress={() => setHypertension(`${item.label}`)}
              />
            )
          }
        </View>
         {/* diabetes mellitus */}
         <FormTextFieldLabel text ="Diabetes Mellitus"/>
         <View style={styles.container2}>
            {
              arraydata.map((item, index) => 
                <RadioButton key={index}
                  label={item.label}
                  selected={diabetes === `${item.label}`}
                  onPress={() => setDiabetes(`${item.label}`)}
                />
              )
            }
          </View>

         {/* asthma */}
         <FormTextFieldLabel text ="Asthma"/>
         <View style={styles.container2}>
            {
              arraydata.map((item, index) => 
                <RadioButton key={index}
                  label={item.label}
                  selected={asthma === `${item.label}`}
                  onPress={() => setAsthma(`${item.label}`)}
                />
              )
            }
        </View>

         {/* chronic lungs disease */}
         <FormTextFieldLabel text ="Chronic Lung Diseases"/>
         <View style={styles.container2}>
          {
            arraydata.map((item, index) => 
              <RadioButton key={index}
                label={item.label}
                selected={chronicLungDisease === `${item.label}`}
                onPress={() => setChronicLungDisease(`${item.label}`)}
              />
            )
          }
        </View>

         {/* Sickel Cell Disease */}
        <FormTextFieldLabel text ="Sickle Cell Disease"/>
        <View style={styles.container2}>
          {
            arraydata.map((item, index) => 
              <RadioButton key={index}
                label={item.label}
                selected={sickleCellDisease === `${item.label}`}
                onPress={() => setSickleCellDisease(`${item.label}`)}
              />
            )
          }
        </View>

         {/* pcos */}
        <FormTextFieldLabel text ="Polycystic Ovary Syndrome (PCOS)"/>
        <View style={styles.container2}>
          {
            arraydata.map((item, index) => 
              <RadioButton key={index}
                label={item.label}
                selected={pcos === `${item.label}`}
                onPress={() => setPcos(`${item.label}`)}
              />
            )
          }
        </View>

        {/* if yes to above */}
        <FormTextField place_holder ="If YES to Diabetes mellitus, how long were you on treatment?"
          place_holder_text_color ="#7C7C7C"
          onChangeText={(e) => setDiabestesDuration(e)}
        />

        {/* gestation diabetes mellitus */}
        <FormTextFieldLabel text ="Have you ever had Gestational Diabetes Mellitus?"/>
        <View style={styles.container2}>
          {
            arraydata.map((item, index) => 
              <RadioButton key={index}
                label={item.label}
                selected={GDM === `${item.label}`}
                onPress={() => setGDM(`${item.label}`)}
              />
            )
          }
        </View>

        <FormTextFieldLabel text ="Is there a history of Gestational Diabetes Mellitus in your family?"/>
        <View style={styles.container2}>
          {
            arraydata.map((item, index) => 
              <RadioButton key={index}
                label={item.label}
                selected={history === `${item.label}`}
                onPress={() => setHistory(`${item.label}`)}
              />
            )
          }
        </View>

        <Button title='Submit' 
          bg_color={"#FF6C52"} 
          btn_on_press = {handleSubmitButton}
          loading ={loading}
          spinner_color={'#fff'}
        />
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
 },
 })

export default MedicalHistoryScreen