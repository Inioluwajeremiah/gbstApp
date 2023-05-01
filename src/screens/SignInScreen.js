import React from 'react'
import { KeyboardAvoidingView, StatusBar, ScrollView, TouchableOpacity, View } from 'react-native'
import FormHeader from '../components/FormHeader'
import FormTitle from '../components/FormTitle'
import FormTextField from '../components/FormTextField'
import PasswordFIeld from '../components/PasswordFIeld'
import Button from '../components/Button'
import FormFooter from '../components/FormFooter'
import CustomTextRegular from '../components/CustomTextRegular'

const SignInScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={{flex:1, backgroundColor:"#f5f5f5"}}>
      <ScrollView contentContainerStyle={{flex:1}}>
      <FormHeader screen_title={"Sign In"}/>
      <View style={{flex:1, paddingHorizontal:20}}>
        <FormTitle titleText={'Email'}/>
        <FormTextField place_holder={"Input email"}/>
        <FormTitle titleText={'Password'}/>
        <PasswordFIeld place_holder={'Input password'}/>
        <View style={{width:"100%", alignItems:'flex-end'}}>
          <TouchableOpacity>
            <CustomTextRegular style={{color:"#66CA98", fontSize:14, fontWeight:500}}>Forgot your password?</CustomTextRegular>
          </TouchableOpacity>
        </View>

        <FormFooter desc_text_2 = {'Don\'t have an account?'} redirect_text_2 ="Sign Up" btn_on_press_2 ={() => navigation.navigate("Sign up")}
          redirect_on_press_2={()=> navigation.navigate("Sign up")} btn_text2 ={"Sign In"}  
      />
      </View>

      </ScrollView>
    </KeyboardAvoidingView>
    
  )
}

export default SignInScreen