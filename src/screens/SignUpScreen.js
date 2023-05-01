import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import FormHeader from '../components/FormHeader'
import FormTitle from '../components/FormTitle'
import FormTextField from '../components/FormTextField'
import PasswordFIeld from '../components/PasswordFIeld'
import Checkbox from 'expo-checkbox';
import FormFooter from '../components/FormFooter'
import CustomTextRegular from '../components/CustomTextRegular'

const SignUpScreen = ({navigation}) => {

  const [isChecked, setChecked] = useState(false);

  return (
    <KeyboardAvoidingView style={{flex:1}}>
      <ScrollView contentContainerStyle={{flex:1}}> 
      <FormHeader screen_title={"Sign Up"}/>
      <View style={{flex:1, paddingHorizontal:20}}>
        <FormTitle titleText={"Full Name"} />
        <FormTextField place_holder={"Full name"}/>
        <FormTitle titleText={'Email'}/>
        <FormTextField place_holder={"Input email"}/>
        <FormTitle titleText={'Password'}/>
        <PasswordFIeld place_holder={'Input password'}/>
        <View style={{width:"100%", display:'flex', flexDirection:'row'}}>
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <CustomTextRegular style={{color:"#A7A6A5", marginLeft:6, fontSize:14, fontWeight:"400"}}>I agree with Terms and</CustomTextRegular>
          <TouchableOpacity>
            <CustomTextRegular style={{color:"#66CA98", marginLeft:3, fontSize:14, fontWeight:500,  textDecorationLine: 'underline'}}>Privacy Policy</CustomTextRegular>
          </TouchableOpacity>
        </View>

        <FormFooter desc_text_2 = {'Already have an account?'} redirect_text_2 ="Sign In"
          redirect_on_press_2={()=> navigation.navigate("Sign in")} btn_text2 ={"Sign Up"} btn_on_press_2 ={() => navigation.navigate("Sign in")} 
        />
      </View>
      </ScrollView> 
  </KeyboardAvoidingView>
  )
}

export default SignUpScreen