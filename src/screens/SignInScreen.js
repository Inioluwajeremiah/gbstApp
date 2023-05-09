import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, StatusBar, ScrollView, TouchableOpacity, View, Alert, StyleSheet } from 'react-native'
import FormHeader from '../components/FormHeader'
import FormTitle from '../components/FormTitle'
import FormTextField from '../components/FormTextField'
import PasswordFIeld from '../components/PasswordFIeld'
import Button from '../components/Button'
import FormFooter from '../components/FormFooter'
import CustomTextRegular from '../components/CustomTextRegular'
import { GbstContext } from '../../GbstContext'

const SignInScreen = ({navigation}) => {

  const {auth,  signInWithEmailAndPassword} = useContext(GbstContext)

  const [userEmail, setUserEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const SignIn =() => {

    if (userEmail.length < 0) {
      setErrorEmail("Email field cannot be empty")

    } else if (userPassword.length < 0) {
      setErrorEmail("")
      setErrorPassword("Password field cannot be empty")

    } else{
      setErrorPassword("")
      signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        setShowSpinner(false)
        Alert.alert("User Login!", "Your login is successfull",
          [
            {
              text: "Cancel",
              onPress: () => navigation.navigate('HomeNav')
            },
            {
              text: "Ok",
              onPress: () => navigation.navigate('HomeNav')
            }
          ]
        )
        
      })
      .catch((error) => {
        setShowSpinner(false)
        const errorCode = error.code;
        const errorMessage = error.message;
  
        if (errorCode == 'auth/user-not-found') {
  
          Alert.alert("Login Error!", `User does not exist. Register to continue`)
  
        } else {
  
          Alert.alert("User Login!", `${errorCode} \n${errorMessage}`)
        }
      });
      
    } //ends else
  
  } 

  return (
    <KeyboardAvoidingView style={{flex:1, backgroundColor:"#f5f5f5"}}>
      <ScrollView contentContainerStyle={{flex:1}}>
      <FormHeader screen_title={"Sign In"}/>
      <View style={{flex:1, paddingHorizontal:20}}>

         
        {/* email */}
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <FormTitle titleText={'Email'} />
          <CustomTextRegular style={styles.errorText}>{errorEmail}</CustomTextRegular>
        </View>
        <FormTextField border_color={errorEmail ? "#FF6C52" : null} border_width={errorEmail ? 1 : null} place_holder={"Input email"} onChangeText ={(eml) => setUserEmail(eml.trim())}/>

         {/* password */}
         <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <FormTitle titleText={'Password'} />
          <CustomTextRegular style={styles.errorText}>{errorPassword}</CustomTextRegular>
        </View>
        <PasswordFIeld border_color={errorPassword ? "#FF6C52" : null} border_width={errorPassword ? 1 : null} place_holder={'Input password'} onChangeText ={(pwd) => setUserPassword(pwd.trim())}/>


        {/* forgot password */}
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

const styles = StyleSheet.create({
  errorText:{
    color:"#FF6C52"
  }
})

export default SignInScreen