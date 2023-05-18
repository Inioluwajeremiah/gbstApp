import React, { useContext, useState } from 'react'
import { Alert, TouchableOpacity, View, ScrollView, StyleSheet } from 'react-native'
import FormHeader from '../components/FormHeader'
import FormTitle from '../components/FormTitle'
import FormTextField from '../components/FormTextField'
import PasswordFIeld from '../components/PasswordFIeld'
import Checkbox from 'expo-checkbox';
import FormFooter from '../components/FormFooter'
import CustomTextRegular from '../components/CustomTextRegular'
import { WebView } from 'react-native-webview';
import { Email } from '../../smtp'
import { GbstContext } from '../GbstContext'

// import firebase modules
// import { app } from '../../firebaseConfig';
// import {getAuth, createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'

// const auth = getAuth(app);


const SignUpScreen = ({navigation}) => {

  const {CreateUser, buttonSpinner} = useContext(GbstContext)

  const [isChecked, setChecked] = useState(false);
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPasword, setConfirmPassword] = useState('')
  // handle error
  const [errorFullName, setErrorFullName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassWord, setErrorPassword] = useState('')
  const [checkError, setCheckError] = useState('')

   // validate email
   const isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // create email body
  const emailBody =(code)=> {
    // const [a,b,c,d] = code
    return (
      <div>
        <p>GBST</p>
        <p>gbstaiapp@gmail.com</p>
        <p>{code.join('')}</p>
      </div>
    )
  }
  const SignUpUser = () => {
    if (fullName.length < 3) {
      setErrorFullName("Too short")
    } else if(isValidEmail(email) == false) {
      setErrorFullName('')
      setErrorEmail("Invalid email address")
    } else if (password.length < 8) {
      setErrorEmail('');
      setErrorPassword("Password too short")
    } else if (password !== confirmPasword) {
      setErrorPassword("Password does not match")
    } else if (!isChecked) {
      setErrorPassword("")
      setCheckError("Check box to proceed")
    }
    else {

      setCheckError("")

      // create user in firebase
      CreateUser(email, password, isChecked, fullName)
      // send email
    
    }
  }

  return (
    // <KeyboardAvoidingView style={{flex:1}}>
      <ScrollView contentContainerStyle={{}}> 
      <FormHeader screen_title={"Sign Up"}/>
      <View style={{flex:1, paddingHorizontal:20, maxWidth:500, alignSelf:'center'}}>
        {/* full name */}
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <FormTitle titleText={"Full Name"} />
          <CustomTextRegular style={styles.errorText}>{errorFullName}</CustomTextRegular>
        </View>
        <FormTextField border_color={errorFullName ? "#FF6C52" : null} border_width={errorFullName ? 1 : null} place_holder={"Full name"} onChangeText ={(inp) => setFullName(inp.trim())}/>
        
        {/* email */}
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <FormTitle titleText={'Email'} />
          <CustomTextRegular style={styles.errorText}>{errorEmail}</CustomTextRegular>
        </View>
        <FormTextField border_color={errorEmail ? "#FF6C52" : null} border_width={errorEmail ? 1 : null} place_holder={"Input email"} onChangeText ={(eml) => setEmail(eml.trim())}/>

        {/* password */}
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <FormTitle titleText={'Password'} />
          <CustomTextRegular style={styles.errorText}>{errorPassWord}</CustomTextRegular>
        </View>
        <PasswordFIeld border_color={errorPassWord ? "#FF6C52" : null} border_width={errorPassWord ? 1 : null} place_holder={'Input password'} onChangeText ={(pwd) => setPassword(pwd.trim())}/>

        {/* confirm password */}
        <FormTitle titleText={'Confirm Password'} />
        <PasswordFIeld place_holder={'Input password again'} onChangeText ={(cpwd) => setConfirmPassword(cpwd.trim())}/>

        <View style={{width:"100%", display:'flex', flexDirection:'row'}}>
          <Checkbox value={isChecked} onValueChange={setChecked} style={{padding:10}} />
          <CustomTextRegular style={{color:"#A7A6A5", marginLeft:6, fontSize:14, fontWeight:"400"}}>I agree with Terms and</CustomTextRegular>
          <TouchableOpacity>
            <CustomTextRegular style={{color:"#66CA98", marginLeft:3, fontSize:14, fontWeight:500,  textDecorationLine: 'underline'}}>Privacy Policy</CustomTextRegular>
          </TouchableOpacity>
        </View>
        <CustomTextRegular style={styles.errorText}>{checkError}</CustomTextRegular>

        <FormFooter desc_text_2 = {'Already have an account?'} redirect_text_2 ="Sign In"
          redirect_on_press_2={()=> navigation.navigate("Sign in")} btn_text2 ={"Sign Up"}
          btn_on_press_2 ={() => SignUpUser()}  loading={buttonSpinner}
        />
      </View>
      </ScrollView> 
  // </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  errorText:{
    color:"#FF6C52"
  }
})

export default SignUpScreen