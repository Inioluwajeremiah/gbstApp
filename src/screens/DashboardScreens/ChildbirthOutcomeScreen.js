import React, { useContext, useState } from 'react'
import { ImageBackground, ScrollView, View, StatusBar, TouchableOpacity, Alert, Text } from 'react-native'
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
import { GbstContext } from '../../GbstContext'
import { StyleSheet } from 'react-native'
import RadioButton from '../../components/RadioGroupComponent'

const ChildbirthOutcomeScreen = ({navigation}) => {

  const {userId, SaveDoc, saveDocLoading} = useContext(GbstContext);

  const [loading, setLoading] = useState(false);
  const [weight, setWeight] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [gestation, setGestation] = useState('');
  const [deliverymode, setDeliveryMode] = useState('');
  const [childbirthOutcome, setChildbirthOutcome] = useState('');
  const [bloodSugarAfterSixweeks, setBloodSugarAfterSixweeks] = useState('');

  const SaveChildBirth = () => {
    if (!deliverymode) {
      Alert.alert("", "Select delivery mode")
    }
    else if (!weight) {
      Alert.alert("", "Input weight")
    } 
    else if (!childbirthOutcome) {
      Alert.alert("", "Select outcome of childebirth")
    }
    else if (!bloodSugar) {
      Alert.alert("", "Input bloodSugar result after childbirth")
    } else if (!bloodSugarAfterSixweeks) {
      Alert.alert("", "Input bloodSugar result six weeks after childbirth")
    } else {
      const chilbirthDoc = {
        'deliverymode': deliverymode,
        'weight': weight,
        'childbirthOutcome': childbirthOutcome,
        'bloodSugar': bloodSugar,
       ' bloodSugarAfterSixweeks': bloodSugarAfterSixweeks
      }
      SaveDoc("ChildbirthOutComeScren", userId, chilbirthDoc)
    }
  }

  const childbirth_mode_data = [{id:1, label:"Yes"},{id:2, label:"No"}]
  const childbirth_outcome_data = [{id:1, label:"Alive"},{id:2, label:"Stillbirth"}, {id:3, label:"Abort"}, {id:1, label:"Matertnal Mortality"}]

  let status_bar_height = StatusBar.currentHeight;

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
     
     <Text>userId = {userId}</Text>
      {/* mode of delivery */}
      <FormTextFieldLabel text ="Mode of delivery?"/>
      <View style={styles.container2}>
        {
          childbirth_mode_data.map((item, index) => 
            <RadioButton key={index}
              label={item.label}
              selected={deliverymode === `${item.label}`}
              onPress={() => setDeliveryMode(`${item.label}`)}
            />
          )
        }
      </View>

      {/* <MyRadioGroup 
        array={childbirth_data} field_name={"childbirth"} sub_field_name={"mode_of_delivery"}
        onPress={selectDeliveryMode}
        selected={selectedOption === `${item.label}`}
        onPress={() => handleOptionPress(`${item.label}`)}
      /> */}

       {/* birth weight */}
       <FormTextField 
          place_holder ="Birth weight (kg)"
          keyboardType ="numeric"
          onChangeText={(wt) => setWeight(wt.trim())}
        />

       {/* outcome of childbirth */}
       <FormTextFieldLabel text ="Outcome of childbirth?"/>
       <View style={styles.container2}>
        {
          childbirth_outcome_data.map((item, index) => 
            <RadioButton key={index}
              label={item.label}
              selected={childbirthOutcome === `${item.label}`}
              onPress={() => setChildbirthOutcome(`${item.label}`)}
            />
          )
        }
      </View>
      {/* <MyRadioGroup array={outcome_data} field_name={"childbirth"} sub_field_name={"childbirth_outcome"}/> */}

      {/* blood sugar after period */}
      <FormTextField 
        place_holder ="Blood sugar result after"
        onChangeText={(sug) => setBloodSugar(sug.trim())}
      />

      {/* gestation age */}
      <FormTextField 
        place_holder ="Blood sugar result six weeks after childbirth"
        onChangeText={(age) => setBloodSugarAfterSixweeks(age.trim())}

      />

      <Button 
        title='Submit' 
        btn_on_press={SaveChildBirth} 
        bg_color={"#F6C25D"} 
        loading={saveDocLoading}
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

export default ChildbirthOutcomeScreen