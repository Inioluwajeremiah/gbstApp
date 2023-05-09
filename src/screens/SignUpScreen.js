import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity, View, ScrollView, StyleSheet } from 'react-native'
import FormHeader from '../components/FormHeader'
import FormTitle from '../components/FormTitle'
import FormTextField from '../components/FormTextField'
import PasswordFIeld from '../components/PasswordFIeld'
import Checkbox from 'expo-checkbox';
import FormFooter from '../components/FormFooter'
import CustomTextRegular from '../components/CustomTextRegular'
import { GbstContext } from '../../GbstContext'

const SignUpScreen = ({navigation}) => {

  const {auth, sendEmailVerification, createUserWithEmailAndPassword, firestoreDB, setDoc, doc} = useContext(GbstContext)

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
  // function to save auth code in firestore
  const CreateUser = async() => {
    // generate 4 random numbers

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

      // clean email
      const clean_email = email.replace(/[.@]/g, "");

      // generate code
      const auth_code = [];
      for (let i = 0; i < 4; i++) {
        const random_digit = Math.floor(Math.random() * 100) + 1;
        auth_code.push(random_digit);
      }
      
      // save code in firestore database using clean email as key
      const docRef = await setDoc(doc(firestoreDB, userId + "/authCodes" ), {
        clean_email: auth_code
      });

      // create user with email and password and redirect user to auth screen
      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        // user.sendEmailVerification();

        // sendVerLink(auth.currentUser)
       
        // sendEmailVerification(auth.currentUser, actionCodeSettings).then(() => {
        //   Alert.alert(
        //     "User Registration!", 
        //     `Verification link has been to sent to your email \n Verify your email to continue`,
        //     [
        //       {
        //         text: "Cancel",
        //         onPress: () => auth.signOut()
        //       },
        //       {
        //         text: "Ok",
        //         onPress: () =>  auth.signOut()
        //       }
        //     ],
        //     {cancelable: false}
        //   ) // ends ALert dialog box
        
        // });  // ends sendEmailVerification

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/email-already-exists" || errorCode == "auth/email-already-in-use") {
          Alert.alert("User Already Exists!", `Resend verification link to ${userEmail}`,
          // {errorCode}\n${errorMessage}`
          [
            {
              text: "Cancel",
              onPress: () =>null
            },
            {
              text: "Resend",
              onPress:  () => openModal()
            }
          ],
          {cancelable: false}
        ) // ends ALert dialog box
        } 
        else {
          Alert.alert("User Registration Error!",`${errorCode}\n${errorMessage}`)

        }
        // .slice(9, errorMessage.length)
        // ..
      });
    } //ends else
  }

  return (
    // <KeyboardAvoidingView style={{flex:1}}>
      <ScrollView contentContainerStyle={{}}> 
      <FormHeader screen_title={"Sign Up"}/>
      <View style={{flex:1, paddingHorizontal:20}}>
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
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <CustomTextRegular style={{color:"#A7A6A5", marginLeft:6, fontSize:14, fontWeight:"400"}}>I agree with Terms and</CustomTextRegular>
          <TouchableOpacity>
            <CustomTextRegular style={{color:"#66CA98", marginLeft:3, fontSize:14, fontWeight:500,  textDecorationLine: 'underline'}}>Privacy Policy</CustomTextRegular>
          </TouchableOpacity>
        </View>
        <CustomTextRegular style={styles.errorText}>{checkError}</CustomTextRegular>

        <FormFooter desc_text_2 = {'Already have an account?'} redirect_text_2 ="Sign In"
          redirect_on_press_2={()=> navigation.navigate("Sign in")} btn_text2 ={"Sign Up"}
          btn_on_press_2 ={() => CreateUser()} 
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