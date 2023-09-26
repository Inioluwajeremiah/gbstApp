import React, { useContext, useEffect, useState } from 'react'
import FormHeader from '../components/FormHeader'
import { KeyboardAvoidingView, Text, StyleSheet, TextInput, Alert, TouchableOpacity, View,  ActivityIndicator } from 'react-native'
import CustomTextRegular from '../components/CustomTextRegular'
import { windowWidth } from '../Dimensions'
import { useFonts } from 'expo-font'
import FormFooter from '../components/FormFooter'
import { ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { GbstContext } from '../GbstContext'

const CodeAuthenticationScreen = ({navigation}) => {

  // const {AuthenticateUser, buttonSpinner, localUserId, getData} = useContext(GbstContext);

  const codeBox = [1,2,3,4]

  const [code0, setCode0] = useState('')
  const [code1, setCode1] = useState('')
  const [code2, setCode2] = useState('')
  const [code3, setCode3] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)

  // load custom fonts
  const [fontsLoaded] = useFonts({
    PoppinsBlack: require('../../assets/fonts/PoppinsBlack.ttf'),
  });

  if (!fontsLoaded) {
      return (
          null
      )
  }


  
  // Alert.alert("", data.message,  [
  //   {
  //     text: "Cancel",
  //     onPress: null
  //   },
  //   {
  //     text: "Resend Code",
  //     onPress: () => ResendCode()
  //   }
  // ],  {
  //   // You can customize the style of the message here
  //   messageStyle: { color: 'red', fontSize: 16 }, // Change color to red
  // })

    // retrieve email
    
    const getData = async () => {    
      try {
          const value = await AsyncStorage.getItem('gbstaiapp_email')
          if (!value || value == null) {
              setEmail('')
          } 
          if (value) {
              setEmail(value)
          }
    
      } catch(e) {
      Alert.alert("Error", `${e.message}`)
      }
    }

    // handle user verification
    const authenticateUser = async () => {

     getData();

      const onpress =() => {
        navigation.navigate("main")
      }

      if (code0.length == 1 && code1.length == 1 && code2.length == 1 && code3.length == 1) {

        const code = code0 + code1 + code2 + code3

        // call auhtenticate user from context
        // AuthenticateUser(code0, code1, code2, code3, onpress)
        setLoading(true)

        fetch('http://gbstaiapp.pythonanywhere.com/verify/code', {
          method: "POST",
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            code: code
          })
        }).then(response => response.json()).then(data => {
          if (data.message == "Verification successful!") {
            Alert.alert("", data.message)
            navigation.navigate("Sign in")
            setLoading(false)
          } else {
            Alert.alert("",  data.message)
            setLoading(false)
          }
        }).catch(error => {
          console.log(error)
          setLoading(false)
        })

      } 
      else {
        Alert.alert("Authentication Error", "Invalid code")
      }
    }

      // handle resend code
      const ResendCode = () => {
        getData()
        setResendLoading(true)
        fetch('http://gbstaiapp.pythonanywhere.com/signup/resend_code', {
            method: "POST",
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email:email
            })
          }).then(response => response.json()).then(data => {
            if (data.message == `Authentication code sent to ${email}`) {
              // navigation.navigate("CodeAuth")
              Alert.alert("", data.message)
              setResendLoading(false)
              
            } else {
              Alert.alert("", data.message)
              setResendLoading(false)
            }
          }).catch(error => {
            console.log(error)
            Alert.alert("", error.message)
            setResendLoading(false)
          })
      }

  return (
    <KeyboardAvoidingView style={{ flex:1, backgroundColor:"#f5f5f5"}}>
      { resendLoading ?  
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View> :
        <ScrollView contentContainerStyle={{flex:1}}>
          <FormHeader screen_title={"Your Code"}/>
          <View style={{flex:1}}>
            <CustomTextRegular style={{fontSize:14,lineHeight: 17, fontWeight:500, color:"#A7A6A5", textAlign:"center", marginTop:-20}}>Code sent to your email</CustomTextRegular>
            <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent:"center", paddingLeft:"2%", marginTop:40, marginBottom:20}}>
            
              <View style={styles.container}>
                <TextInput keyboardType="numeric" onChangeText={(c0) => setCode0(c0.trim())}style={styles.textbox}
                />
              </View>
              <View style={styles.container}>
                <TextInput keyboardType="numeric" onChangeText={(c1) => setCode1(c1.trim())} style={styles.textbox}/>
              </View>
              <View style={styles.container}>
                <TextInput keyboardType="numeric"  onChangeText={(c2) => setCode2(c2.trim())} style={styles.textbox}
                />
              </View>
              <View style={styles.container}>
                <TextInput keyboardType="numeric" onChangeText={(c3) => setCode3(c3.trim())} style={styles.textbox}/>
              </View> 
          
            </View> 
          
            <View style={{width:"100%", display:'flex', flexDirection:'row', paddingLeft:"2%", marginTop:"4%", justifyContent:'center'}}>
              <CustomTextRegular style={{color:"#A7A6A5", marginLeft:6, fontSize:14, fontWeight:"400"}}>Resend code?</CustomTextRegular>
              <TouchableOpacity onPress={ResendCode}>
                <CustomTextRegular style={{color:"#66CA98", marginLeft:3, fontSize:14, fontWeight:500,  textDecorationLine: 'underline'}}>Click here</CustomTextRegular>
              </TouchableOpacity>
            </View>
          
            <FormFooter btn_text2 ={"Verify"} btn_on_press_2 ={() => authenticateUser()} loading={loading}/>
          </View> 
        </ScrollView>
      }
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center', 
    alignItems:'center', 
    width: windowWidth/5, 
    height: windowWidth/5, 
    backgroundColor:"#e8eceb", 
    borderRadius:12,
    marginRight:7
  },
  textbox: {
    textAlign:'center', 
    justifyContent:'center',  
    fontSize:28, 
    fontFamily:"PoppinsBlack", 
    marginBottom:-10, 
    lineHeight:38, 
    color: "#1C1F1E",
    width:'100%',
    height:"100%",
  }
})
export default CodeAuthenticationScreen