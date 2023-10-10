import React, { useContext } from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import CustomTextRegular from '../../components/CustomTextRegular'
import CustomTextBold from '../../components/CustomTextBold'
import girl_exercise from '../../../assets/tennis.png'
import { status_bar_height, windowHeight } from '../../Dimensions'
import about from '../../../assets/about.jpg'
import { GbstContext } from '../../GbstContext'

const AboutScreen = () => {

  const {fullName} = useContext(GbstContext)

  const new_height = windowHeight/4

  const teamData = [{id:1, image:girl_exercise}, {id:1, image:girl_exercise},{id:1, image:girl_exercise}, {id:1, image:girl_exercise}]
  return (
    <ScrollView style={{backgroundColor:"#f5f5f5"}}>
      <View style={{paddingHorizontal:16, marginBottom:20}}>
        <CustomTextBold style={{color:"#CDCFCE", marginTop:status_bar_height+40, fontSize:24, marginBottom:20}}>Hey {fullName.split(' ')[0]},</CustomTextBold>
        {/* image background */}
          <ImageBackground source={about} resizeMode='cover' style={{width:"100%", flex:1, alignItems:'center', justifyContent:"center", height:new_height,  overflow:'hidden', borderRadius:18, marginBottom:30}}>
            {/* text */}
            <CustomTextBold style={{fontSize:28, color:"#fff", textAlign:"center", padding:10}}>Gestational Blood Sugar Tracker</CustomTextBold>
          </ImageBackground>

        {/* about text description */}
        <CustomTextRegular style={styles.textStyle}>
          GBST uses artificial intelligence to track Diabetes Mellitus in pregnant women. It allows diet, and 
          excercise to be captured easily for amnagement and treatment purposes. Visit <CustomTextRegular style={{color:"#66CA98", textDecorationLine: 'underline'}}>gbst.ng </CustomTextRegular>
          for more details
        </CustomTextRegular>

        {/* team */}
        <CustomTextBold style={{fontSize:28, color:"#66CA98", textAlign:'center', marginTop:30}}>Team</CustomTextBold>
        {/* team grid */}
        <View style={{flexWrap: "wrap", width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          {
            teamData.map((item, index) => 
            <View key={index} style={{width:140, height:140, borderRadius:100, backgroundColor:"#D9D9D9", marginRight:7, marginBottom:7, justifyContent:'center', alignItems:'center'}}>
              <Image source={item.image} />
            </View>
            )
          }
        </View>

        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textStyle: {
   fontSize:17, 
   color:"#CDCFCE",
   textAlign:"left"
  }
})
export default AboutScreen