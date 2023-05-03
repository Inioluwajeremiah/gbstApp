import React from 'react'
import { ImageBackground, ScrollView, View, StatusBar, TouchableOpacity } from 'react-native'
import { windowHeight } from '../../Dimensions'
import clinical from '../../../assets/clinical.jpg'
import { Path, Svg } from 'react-native-svg'
import { DrawerActions } from '@react-navigation/native'
import CustomTextBold from '../../components/CustomTextBold'
import FormTextField from '../../components/FormTextField'
import Button from '../../components/Button'

const ClinicalInformationScreen = ({navigation}) => {

  let status_bar_height = StatusBar.currentHeight
  return (
    <ScrollView  style={{backgroundColor:"#f5f5f5"}}>
    <ImageBackground source={clinical} style={{resizeMode:'cover', marginBottom:30, flex: 1, width:"100%", marginTop: -status_bar_height , height: windowHeight/3}}>
      <View  style={{flex: 1, backgroundColor: 'rgba(102, 202, 152, 0.359)',justifyContent: 'center',alignItems: 'center'}}>
        {/* dashboard menu icon */}
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} 
          style={{width:40, height:40, borderRadius:12, padding:10, marginRight:10, justifyContent:'center',
          alignItems:'center', backgroundColor:'#66CA98', marginTop: -status_bar_height-26, alignSelf:'flex-end' }}>
          <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M0.6875 3.87835H11.1549C11.4704 5.31433 12.7527 6.39237 14.2821 6.39237C15.8114 6.39237 17.0938 5.31437 17.4093 3.87835H21.3125C21.6922 3.87835 22 3.57052 22 3.19085C22 2.81118 21.6922 2.50335 21.3125 2.50335H17.4089C17.0928 1.06811 15.8087 -0.0106201 14.2821 -0.0106201C12.7546 -0.0106201 11.4711 1.06794 11.1552 2.50335H0.6875C0.307828 2.50335 0 2.81118 0 3.19085C0 3.57052 0.307828 3.87835 0.6875 3.87835V3.87835ZM12.4557 3.19266C12.4557 3.19021 12.4557 3.18772 12.4557 3.18527C12.4587 2.18122 13.278 1.36442 14.2821 1.36442C15.2848 1.36442 16.1041 2.1801 16.1084 3.18368L16.1086 3.19377C16.107 4.19954 15.2882 5.01741 14.2821 5.01741C13.2764 5.01741 12.4579 4.20036 12.4556 3.19519L12.4557 3.19266ZM21.3125 18.1217H17.4089C17.0928 16.6865 15.8087 15.6077 14.2821 15.6077C12.7546 15.6077 11.4711 16.6863 11.1552 18.1217H0.6875C0.307828 18.1217 0 18.4295 0 18.8092C0 19.1889 0.307828 19.4967 0.6875 19.4967H11.1549C11.4704 20.9326 12.7527 22.0107 14.2821 22.0107C15.8114 22.0107 17.0938 20.9326 17.4093 19.4967H21.3125C21.6922 19.4967 22 19.1889 22 18.8092C22 18.4295 21.6922 18.1217 21.3125 18.1217V18.1217ZM14.2821 20.6357C13.2764 20.6357 12.4579 19.8186 12.4556 18.8135L12.4557 18.811C12.4557 18.8085 12.4557 18.806 12.4557 18.8036C12.4587 17.7995 13.278 16.9827 14.2821 16.9827C15.2848 16.9827 16.1041 17.7984 16.1084 18.8019L16.1086 18.812C16.1071 19.8179 15.2883 20.6357 14.2821 20.6357V20.6357ZM21.3125 10.3125H10.8451C10.5296 8.87656 9.24726 7.79856 7.71792 7.79856C6.18857 7.79856 4.90621 8.87656 4.59074 10.3125H0.6875C0.307828 10.3125 0 10.6204 0 11C0 11.3798 0.307828 11.6875 0.6875 11.6875H4.59108C4.9072 13.1227 6.19128 14.2015 7.71792 14.2015C9.24537 14.2015 10.5289 13.1229 10.8448 11.6875H21.3125C21.6922 11.6875 22 11.3798 22 11C22 10.6204 21.6922 10.3125 21.3125 10.3125ZM9.54435 10.9982C9.54435 11.0007 9.5443 11.0032 9.5443 11.0056C9.5413 12.0097 8.72201 12.8265 7.71792 12.8265C6.71524 12.8265 5.89591 12.0108 5.89157 11.0073L5.89145 10.9972C5.89295 9.9913 6.71172 9.17356 7.71792 9.17356C8.72364 9.17356 9.54211 9.99057 9.54439 10.9958L9.54435 10.9982Z" fill="#F4F6F5"/>
          </Svg>
        </TouchableOpacity>

        {/* screen title */}
        <CustomTextBold style={{fontSize:28, fontWeight:"800", backgroundColor:"rgba(1, 87, 44, 0.462)", paddingHorizontal:10, paddingVertical:3, color:"#fff", position:"absolute", left:16, bottom:16}}>Clinical History</CustomTextBold>
      </View>
    </ImageBackground>

    <View style={{paddingHorizontal:16}}>
      <FormTextField place_holder ="Body weight (kg)"/>
      <FormTextField place_holder ="Height (meters)"/>
      <FormTextField place_holder ="BMI (Weight/Height)"/>
      <FormTextField place_holder ="Arm circumference (meters)"/>
      <FormTextField place_holder ="Waist circumference (meters)"/>
      <FormTextField place_holder ="Hip circumference (meters)"/>
      <FormTextField place_holder ="Waist/Hip circumference (meters)"/>
      <FormTextField place_holder ="Gestational age at diagnosis of GDM "/>

      <Button title='Submit' onPress={null} bg_color={"#66CA98"} />
    </View>
    
  </ScrollView>
  )
}

export default ClinicalInformationScreen