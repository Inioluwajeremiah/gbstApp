import React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import FormTextField from '../../components/FormTextField'
import FormTextFieldLabel from '../../components/FormTextFieldLabel'
import CustomTextRegular from '../../components/CustomTextRegular'
import MyRadioGroup from '../../components/RadioGroupComponent'
import Button from '../../components/Button'

const EnrolMentScreen = () => {

  const SubfieldLabel =  ({text}) => {
    return (
      <CustomTextRegular style={{color:"#7C7C7C", fontSize:12}}>{text}</CustomTextRegular>
    )
  }

  const maritalArray = [{id:1, label:"Single"},{id:2, label:"Married"},{id:3, label:"Divorced"},{id:4, label:"Others"}]
  const religiousArray = [{id:1, label:"Christian"},{id:2, label:"Islam"},{id:3, label:"Traditional"},{id:4, label:"Others"}]
  const ethnicityArray = [{id:1, label:"Yoruba"},{id:2, label:"Igbo"},{id:3, label:"THausa\Fulani"},{id:4, label:"Others"}]
  
  return (
   <ScrollView style={{paddingHorizontal:16, marginTop:10, backgroundColor:"#f5f5f5"}}>
    <FormTextField 
      place_holder = "How old were you at your last birthday?"
      place_holder_text_color ="#7C7C7C"
    />

    {/* marital sub field */}
    <SubfieldLabel text={"Marital"} />
    <FormTextFieldLabel text={"What is your level of education?"}/>
    <MyRadioGroup array={maritalArray} field_name={"EnrollMent"} sub_field_name={"marital"}/>

    {/* religion sub field */}
    <SubfieldLabel text={"Religion"} />
    <FormTextFieldLabel text="What is your Religion?"/>
    <MyRadioGroup array={religiousArray} field_name={"EnrollMent"} sub_field_name={"religion"}/>

     {/* rthnicity sub field */}
     <SubfieldLabel text={"Ethnicity"} />
    <FormTextFieldLabel text="What is your Etnicity?"/>
    <MyRadioGroup array={ethnicityArray} field_name={"EnrollMent"} sub_field_name={"ethnicity"}/>

    <FormTextField 
      place_holder = "Occupation"
      place_holder_text_color ="#7C7C7C"
    />

    <Button title='Submit' onPress={null} bg_color={"#66CA98"} />



   </ScrollView>
  )
}

export default EnrolMentScreen