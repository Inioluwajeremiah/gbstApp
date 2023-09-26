import React, { useContext, useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import FormTextField from '../../components/FormTextField'
import FormTextFieldLabel from '../../components/FormTextFieldLabel'
import CustomTextRegular from '../../components/CustomTextRegular'
import MyRadioGroup from '../../components/RadioGroupComponent'
import Button from '../../components/Button'
import { GbstContext } from '../../GbstContext'
import { Alert } from 'react-native'
import RadioButton from '../../components/RadioGroupComponent'

const EnrolMentScreen = () => {

  const {localUserId, saveDoc} = useContext(GbstContext);

  const [loading, setLoading] = useState(false)
  const [age, setAge] = useState('')
  const [education, setEducation] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [religion, setReligion] = useState('')
  const [ethnicity, setEthincity] = useState('')
  const [occupation, setOccupation] = useState('')
  const [sedentary, setSedentary] = useState('');

  const handleEducationOPtion = (option) => {
    setEducation(option)
  }
  const handleMaritalStatusOption = (option) => {
    setMaritalStatus(option)
  }
  const handleReligionOption = (option) => {
    setReligion(option)
  }
  const handleEthnicityOPtion = (option) => {
    setEthincity(option)
  }

  // save enrollMent data to firebase
  const SaveEnrollMentData = () => {
    setLoading(true)
    const dataToSave = {
      'age': age,
      'educationLevel': education,
      'maritalStatus': maritalStatus,
      'religion': religion,
      'ethnicity': ethnicity,
      'occupation': occupation
    }
      fetch('http://gbstaiapp.pythonanywhere.com/enrollment/', {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSave)
      }).then(resp => resp.json()).then(result => {
        Alert.alert("", result.message)
        setLoading(false)
      }).catch(error => {
        // Alert.alert("", error)
        console.log(error);
        setLoading(false)
      })
  }

  const SubfieldLabel =  ({text}) => {
    return (
      <CustomTextRegular style={{color:"#7C7C7C", fontSize:12}}>{text}</CustomTextRegular>
    )
  }
  const educationArray = [{id:1 , label:'Primary'}, {id:2 , label: 'Secondary'}, {id:3 , label: 'Tertiary'},{id:4 , label:'Other'}]
  const maritalArray = [{id:1, label:"Single"},{id:2, label:"Married"},{id:3, label:"Divorced"},{id:4, label:"Others"}]
  const religiousArray = [{id:1, label:"Christian"},{id:2, label:"Islam"},{id:3, label:"Traditional"},{id:4, label:"Others"}]
  const ethnicityArray = [{id:1, label:"Yoruba"},{id:2, label:"Igbo"},{id:3, label:"Hausa/Fulani"},{id:4, label:"Others"}]
  const sedentaryArray = [{id:1, label:"Yes"},{id:2, label:"No"}]
  return (
   <ScrollView style={{paddingHorizontal:16, marginTop:10, backgroundColor:"#f5f5f5"}}>
    <FormTextField 
      place_holder = "How old were you at your last birthday?"
      place_holder_text_color ="#7C7C7C"
      onChangeText={(e) => setAge(e)}
    />

    {/* marital sub field */}
    {/* <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <SubfieldLabel text={"Marital"} />
      <CustomTextRegular style={styles.errorText}>{errorEmail}</CustomTextRegular>
    </View>
    <FormTextField border_color={errorEmail ? "#FF6C52" : null} border_width={errorEmail ? 1 : null} place_holder={"Input email"} onChangeText ={(eml) => setEmail(eml.trim())}/> */}
    <SubfieldLabel text={"Education"} />
    <FormTextFieldLabel text={"What is your level of education?"}/>
    <View style={styles.container2}>
        {
          educationArray.map((item, index) => 
            <RadioButton key={index}
              label={item.label}
              selected={education === `${item.label}`}
              onPress={() => setEducation(`${item.label}`)}
            />
          )
        }
    </View>

    {/* marital status */}
    <SubfieldLabel text={"Marital"} />
    <FormTextFieldLabel text={"What is your marital status?"}/>
    <View style={styles.container2}>
        {
          maritalArray.map((item, index) => 
            <RadioButton key={index}
              label={item.label}
              selected={maritalStatus === `${item.label}`}
              onPress={() => setMaritalStatus(`${item.label}`)}
            />
          )
        }
    </View>

    {/* religion sub field */}
    <SubfieldLabel text={"Religion"} />
    <FormTextFieldLabel text="What is your Religion?"/>
    <View style={styles.container2}>
        {
          religiousArray.map((item, index) => 
            <RadioButton key={index}
              label={item.label}
              selected={religion === `${item.label}`}
              onPress={() => setReligion(`${item.label}`)}
            />
          )
        }
    </View>
    {/* <MyRadioGroup itemsArray = {religiousArray} field_name={"EnrollMent"} sub_field_name={"religion"}
      handleOptionPress = {handleReligionOption} selectedOption={religion}
    /> */}

     {/* ethnicity sub field */}
    <SubfieldLabel text={"Ethnicity"} />
    <FormTextFieldLabel text="What is your Etnicity?"/>
    <View style={styles.container2}>
        {
          ethnicityArray.map((item, index) => 
            <RadioButton key={index}
              label={item.label}
              selected={ethnicity === `${item.label}`}
              onPress={() => setEthincity(`${item.label}`)}
            />
          )
        }
    </View>

    <FormTextField 
      place_holder = "Occupation"
      place_holder_text_color ="#7C7C7C"
      onChangeText={(e) => setOccupation(e)}
    />
    <SubfieldLabel text={"Sedentary Lifestyle"} />
    <FormTextFieldLabel text="Sedentary Lifestyle"/>
    <View style={styles.container2}>
        {
          sedentaryArray.map((item, index) => 
            <RadioButton key={index}
              label={item.label}
              selected={sedentary === `${item.label}`}
              onPress={() => setSedentary(`${item.label}`)}
            />
          )
        }
    </View>

    <Button 
      title='Submit' 
      bg_color={"#66CA98"} 
      btn_on_press = {SaveEnrollMentData}
      loading ={loading}
    />



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

export default EnrolMentScreen