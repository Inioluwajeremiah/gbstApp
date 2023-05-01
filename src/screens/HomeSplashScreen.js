import React, { useContext, useEffect } from 'react'
import { Image, View, Text } from 'react-native'
import logo from '../../assets/logo.png';
import { useFonts } from 'expo-font';
import { windowHeight } from '../Dimensions';
import CustomTextRegular from '../components/CustomTextRegular';
import CustomTextBold from '../components/CustomTextBold';


const HomeSplashScreen = ({navigation}) => {

  useFonts

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'HomeNav'}],
          });
        }, 3000); // delay navigation for 3 seconds
    
        return () => clearTimeout(timer); // clear timeout on unmount
      }, []);

  return (
   
        <View  
            style={{resizeMode:'cover' , flex: 1, height: windowHeight}}>
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                  <Image source={logo} />
                </View> 
                <CustomTextBold style={{color:"#66CA98", fontSize:24, fontWeight:"600", lineHeight:48, marginTop:20 }}>GBST</CustomTextBold>
                <CustomTextRegular 
                    style={{color:"#66CA98", fontSize:15, fontWeight:"600", lineHeight:18, textAlign:'center', position:'absolute', bottom:20, marginTop:10, padding:10}}>
                    AI based Gestational Blood Sugar Tracker
                </CustomTextRegular>
            </View>
           
        </View>
    
  )
}

export default HomeSplashScreen