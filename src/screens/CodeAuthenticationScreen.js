import React from 'react'
import FormHeader from '../components/FormHeader'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CustomTextRegular from '../components/CustomTextRegular'
import { windowWidth } from '../Dimensions'
import { useFonts } from 'expo-font'
import FormFooter from '../components/FormFooter'
import { ScrollView } from 'react-native'

const CodeAuthenticationScreen = ({navigation}) => {

  const codeBox = [1,2,3,4]
  const [fontsLoaded] = useFonts({
    PoppinsBlack: require('../../assets/fonts/PoppinsBlack.ttf'),
  });

  if (!fontsLoaded) {
      return (
          null
      )
  }

  return (
    <KeyboardAvoidingView style={{ flex:1, backgroundColor:"#f5f5f5"}}>
      <ScrollView contentContainerStyle={{flex:1}}>
        <FormHeader screen_title={"Your Code"}/>
        <View style={{flex:1}}>
          <CustomTextRegular style={{fontSize:14,lineHeight: 17, fontWeight:500, color:"#A7A6A5", textAlign:"center", marginTop:-20}}>Code sent to your email</CustomTextRegular>
          <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent:"center", paddingLeft:"2%", marginTop:40, marginBottom:20}}>
            {
              codeBox.map((item, index) => 
                <View key={index} style={{justifyContent:'center', alignItems:'center', width: windowWidth/5, height: windowWidth/5, backgroundColor:"#e8eceb", borderRadius:12}}>
                  <TextInput style={{textAlign:'center', justifyContent:'center',  fontSize:28, fontFamily:"PoppinsBlack", marginBottom:-10, lineHeight:38, color: "#1C1F1E"}}/>
                </View>
              )
            }
          </View> 
        
          <View style={{width:"100%", display:'flex', flexDirection:'row', paddingLeft:"2%", marginTop:"4%", justifyContent:'center'}}>
            <CustomTextRegular style={{color:"#A7A6A5", marginLeft:6, fontSize:14, fontWeight:"400"}}>Resend code?</CustomTextRegular>
            <TouchableOpacity>
              <CustomTextRegular style={{color:"#66CA98", marginLeft:3, fontSize:14, fontWeight:500,  textDecorationLine: 'underline'}}>Click here</CustomTextRegular>
            </TouchableOpacity>
          </View>
         
          <FormFooter btn_text2 ={"Verify"} btn_on_press_2 ={() => navigation.navigate("Sign in")}/>
        </View> 
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CodeAuthenticationScreen