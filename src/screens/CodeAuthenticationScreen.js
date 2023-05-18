import React, { useContext, useState } from 'react'
import FormHeader from '../components/FormHeader'
import { KeyboardAvoidingView, Text, StyleSheet, TextInput, Alert, TouchableOpacity, View } from 'react-native'
import CustomTextRegular from '../components/CustomTextRegular'
import { windowWidth } from '../Dimensions'
import { useFonts } from 'expo-font'
import FormFooter from '../components/FormFooter'
import { ScrollView } from 'react-native'
import { GbstContext } from '../GbstContext'

const CodeAuthenticationScreen = ({navigation}) => {

  const {AuthenticateUser, buttonSpinner, localUserId} = useContext(GbstContext)

  const codeBox = [1,2,3,4]

  const [code0, setCode0] = useState('')
  const [code1, setCode1] = useState('')
  const [code2, setCode2] = useState('')
  const [code3, setCode3] = useState('')

  // load custom fonts
  const [fontsLoaded] = useFonts({
    PoppinsBlack: require('../../assets/fonts/PoppinsBlack.ttf'),
  });

  if (!fontsLoaded) {
      return (
          null
      )
  }

  // load authentication code
  const authenticateUser = () => {

    // Alert.alert("Code box cannot be empty")
    const onpress =() => {
      navigation.navigate("Sign in")
    }

    if (code0.length > 0 && code1.length > 0 && code2.length > 0 && code3.length > 0) {
      AuthenticateUser(code0, code1, code2, code3, onpress)
    } else {
      Alert.alert("Authentication Error", "Code box cannot be empty")
    }
  }

  return (
    <KeyboardAvoidingView style={{ flex:1, backgroundColor:"#f5f5f5"}}>
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
          {/* {
          codeBox.map((item, index) => 
            <View key={index} style={{justifyContent:'center', alignItems:'center', width: windowWidth/5, height: windowWidth/5, backgroundColor:"#e8eceb", borderRadius:12, marginRight:7}}>
              <TextInput style={{textAlign:'center', justifyContent:'center',  fontSize:28, fontFamily:"PoppinsBlack", marginBottom:-10, lineHeight:38, color: "#1C1F1E"}}/>
            </View>
          )
        } */}
          </View> 
        
          <View style={{width:"100%", display:'flex', flexDirection:'row', paddingLeft:"2%", marginTop:"4%", justifyContent:'center'}}>
            <CustomTextRegular style={{color:"#A7A6A5", marginLeft:6, fontSize:14, fontWeight:"400"}}>Resend code?</CustomTextRegular>
            <TouchableOpacity>
              <CustomTextRegular style={{color:"#66CA98", marginLeft:3, fontSize:14, fontWeight:500,  textDecorationLine: 'underline'}}>Click here</CustomTextRegular>
            </TouchableOpacity>
          </View>
          {/* <Text>{localUserId}</Text> */}
         
          <FormFooter btn_text2 ={"Verify"} btn_on_press_2 ={() => authenticateUser()} loading={buttonSpinner}/>
        </View> 
      </ScrollView>
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