import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, StatusBar, ScrollView, TouchableOpacity, View, Alert, StyleSheet, Text } from 'react-native'
import FormHeader from '../components/FormHeader'
import FormTitle from '../components/FormTitle'
import FormTextField from '../components/FormTextField'
import PasswordFIeld from '../components/PasswordFIeld'
import Button from '../components/Button'
import FormFooter from '../components/FormFooter'
import CustomTextRegular from '../components/CustomTextRegular'
import { GbstContext } from '../GbstContext'

const SignInScreen = ({navigation}) => {

  const {SignInUser, buttonSpinner} = useContext(GbstContext)

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const SignIn = () => {

    if (email.length < 10) {
      setErrorEmail("Enter a valid email address")

    } else if (userPassword.length < 8) {
      setErrorEmail("")
      setErrorPassword("Password length too short")

    } else{
      setErrorPassword("");
      setErrorPassword("")

      // onpress: if successfull, navigate to home nave
      const onpress = () => {
        navigation.navigate('main')
      }

      // onpress: if user-not-found error navigate to sign up
      const onpresSignup = ()=> {
        navigation.navigate("Sign up")
      }
      
      SignInUser(email, userPassword, onpress);
      
    } //ends else
  
  } 

  return (
    <KeyboardAvoidingView style={{flex:1, backgroundColor:"#f5f5f5"}}>
      <ScrollView contentContainerStyle={{flex:1}}>
      <FormHeader screen_title={"Sign In"}/>
      <View style={{flex:1, paddingHorizontal:20, maxWidth:500, alignSelf:'center'}}>   

        {/* email */}
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <FormTitle titleText={'Email'} />
          <CustomTextRegular style={styles.errorText}>{errorEmail}</CustomTextRegular>
        </View>
        <FormTextField border_color={errorEmail ? "#FF6C52" : null} border_width={errorEmail ? 1 : null} place_holder={"Input email"} onChangeText ={(eml) => setEmail(eml.trim())}/>

         {/* password */}
         <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <FormTitle titleText={'Password'} />
          <CustomTextRegular style={styles.errorText}>{errorPassword}</CustomTextRegular>
        </View>
        <PasswordFIeld border_color={errorPassword ? "#FF6C52" : null} border_width={errorPassword ? 1 : null} place_holder={'Input password'} onChangeText ={(pwd) => setUserPassword(pwd.trim())}/>


        {/* forgot password */}
        <View style={{ flexDirection:'row', justifyContent:"space-between" }}>
          <TouchableOpacity onPress={() => navigation.navigate("CodeAuth") }>
            <CustomTextRegular style={{color:"#66CA98", fontSize:14, fontWeight:500}}>Authenicate</CustomTextRegular>
          </TouchableOpacity>
          <TouchableOpacity onpress={() => navigation.navigate("SplashScreen")}>
            <CustomTextRegular style={{color:"#66CA98", fontSize:14, fontWeight:500}}>Forgot your password?</CustomTextRegular>
          </TouchableOpacity>
        </View>
        <FormFooter desc_text_2 = {'Don\'t have an account?'} redirect_text_2 ="Sign Up" btn_on_press_2 ={()=> SignIn()}
          redirect_on_press_2={() => navigation.navigate("Sign up")} btn_text2 ={"Sign In"} loading={buttonSpinner}
      />
      </View>

      {/* <Text className="text-acsOrange">Test </Text> */}


      </ScrollView>
    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({
  errorText:{
    color:"#FF6C52"
  }
})

export default SignInScreen