import React from 'react'
import { Text, View, ScrollView, StyleSheet, StatusBar } from 'react-native'
import CustomTextBold from '../../components/CustomTextBold'
import CustomTextRegular from '../../components/CustomTextRegular'
import { Circle, ClipPath, Defs, G, Mask, Path, Pattern, Rect, Svg, SvgFromXml, SvgXml, Use } from 'react-native-svg'
import { windowWidth } from '../../Dimensions'
import HeartSvgComponent from '../../../assets/HeartIcon'
import PregIconComponent from '../../../assets/PregIcon'
import ChildSvgComponent from '../../../assets/ChildIcon'
import DietComponent from '../../../assets/DietIcon'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DashboardScreen = ({navigation}) => {

  const DashboardItems = [
    {
      title: "Profile",
      colorPrimary: "#FF6C52",
      colorAccent: "#FFE2DC",
      screen: "Profile",
      icon: <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M12.5 14.0625C16.3818 14.0625 19.5312 10.9131 19.5312 7.03125C19.5312 3.14941 16.3818 0 12.5 0C8.61816 0 5.46875 3.14941 5.46875 7.03125C5.46875 10.9131 8.61816 14.0625 12.5 14.0625ZM18.75 15.625H16.0596C14.9756 16.123 13.7695 16.4062 12.5 16.4062C11.2305 16.4062 10.0293 16.123 8.94043 15.625H6.25C2.79785 15.625 0 18.4229 0 21.875V22.6562C0 23.9502 1.0498 25 2.34375 25H22.6562C23.9502 25 25 23.9502 25 22.6562V21.875C25 18.4229 22.2021 15.625 18.75 15.625Z" fill="#FF6C52"/>
            </Svg>      
    },
    {
      title: "Medical History",
      screen: "Medical",
      colorAccent: "#e0eaf9",
      icon: <Svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M18.6536 5.12695L13.8096 0.341797C13.587 0.12207 13.2852 0 12.9685 0H12.6667V6.25H19V5.95215C19 5.64453 18.8763 5.34668 18.6536 5.12695ZM11.0833 6.64062V0H1.1875C0.529427 0 0 0.522461 0 1.17188V23.8281C0 24.4775 0.529427 25 1.1875 25H17.8125C18.4706 25 19 24.4775 19 23.8281V7.8125H12.2708C11.6177 7.8125 11.0833 7.28516 11.0833 6.64062ZM14.25 14.4531V16.7969C14.25 17.0117 14.0719 17.1875 13.8542 17.1875H11.0833V19.9219C11.0833 20.1367 10.9052 20.3125 10.6875 20.3125H8.3125C8.09479 20.3125 7.91667 20.1367 7.91667 19.9219V17.1875H5.14583C4.92813 17.1875 4.75 17.0117 4.75 16.7969V14.4531C4.75 14.2383 4.92813 14.0625 5.14583 14.0625H7.91667V11.3281C7.91667 11.1133 8.09479 10.9375 8.3125 10.9375H10.6875C10.9052 10.9375 11.0833 11.1133 11.0833 11.3281V14.0625H13.8542C14.0719 14.0625 14.25 14.2383 14.25 14.4531Z" fill="#6295E2"/>
            </Svg>
      
    },
    {
      title: "Clinical Information",
      screen: "Clinical",
      colorAccent: "#FFF7DC",
      icon: <Svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M21.875 17.5V1.25C21.875 0.46875 21.4062 0 20.625 0H4.6875C2.03125 0 0 2.03125 0 4.6875V20.3125C0 22.9688 2.03125 25 4.6875 25H20.625C21.25 25 21.875 24.5312 21.875 23.75V22.9688C21.875 22.6562 21.7188 22.3438 21.4062 22.0312C21.25 21.25 21.25 19.0625 21.4062 18.4375C21.7188 18.2812 21.875 17.9688 21.875 17.5ZM7.03125 8.20312C7.03125 8.09952 7.0724 8.00017 7.14566 7.92691C7.21892 7.85365 7.31827 7.8125 7.42188 7.8125H10.1562V5.07812C10.1562 4.97452 10.1974 4.87517 10.2707 4.80191C10.3439 4.72865 10.4433 4.6875 10.5469 4.6875H12.8906C12.9942 4.6875 13.0936 4.72865 13.1668 4.80191C13.2401 4.87517 13.2812 4.97452 13.2812 5.07812V7.8125H16.0156C16.1192 7.8125 16.2186 7.85365 16.2918 7.92691C16.3651 8.00017 16.4062 8.09952 16.4062 8.20312V10.5469C16.4062 10.6505 16.3651 10.7498 16.2918 10.8231C16.2186 10.8963 16.1192 10.9375 16.0156 10.9375H13.2812V13.6719C13.2812 13.7755 13.2401 13.8748 13.1668 13.9481C13.0936 14.0213 12.9942 14.0625 12.8906 14.0625H10.5469C10.4433 14.0625 10.3439 14.0213 10.2707 13.9481C10.1974 13.8748 10.1562 13.7755 10.1562 13.6719V10.9375H7.42188C7.31827 10.9375 7.21892 10.8963 7.14566 10.8231C7.0724 10.7498 7.03125 10.6505 7.03125 10.5469V8.20312ZM18.5938 21.875H4.6875C3.75 21.875 3.125 21.25 3.125 20.3125C3.125 19.375 3.90625 18.75 4.6875 18.75H18.5938V21.875Z" fill="#F7C25D"/>
            </Svg>
      
    },
    {
      title: "Obstetric Information",
      screen: "Obstetric",
      colorAccent: "#FFE2DC",
      icon: <PregIconComponent/>
    
    },
    {
      title: "Outcome of Childbirth",
      colorAccent: "#e0eaf9",
      screen: "Childbirth",
      icon: <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M7.07031 0.830797C6.51855 -0.0383432 5.25391 -0.282484 4.43359 0.371813C1.72363 2.5349 0 5.76244 0 9.37572H12.5L7.07031 0.830797ZM24.2188 4.68822H21.875C20.1514 4.68822 18.75 6.08959 18.75 7.81322V10.9382H0C0 13.4089 1.12305 15.6453 2.94434 17.3201C1.25488 17.7546 0 19.2732 0 21.0945C0 23.2527 1.74805 25.0007 3.90625 25.0007C6.06445 25.0007 7.8125 23.2527 7.8125 21.0945C7.8125 20.6599 7.72461 20.2546 7.59766 19.864C8.65234 20.1521 9.77539 20.3132 10.9375 20.3132C12.0996 20.3132 13.2275 20.1521 14.2773 19.864C14.1455 20.2546 14.0625 20.6599 14.0625 21.0945C14.0625 23.2527 15.8105 25.0007 17.9688 25.0007C20.127 25.0007 21.875 23.2527 21.875 21.0945C21.875 19.2732 20.6201 17.7546 18.9307 17.3201C20.752 15.6453 21.875 13.4089 21.875 10.9382V7.81322H24.2188C24.6484 7.81322 25 7.46166 25 7.03197V5.46947C25 5.03978 24.6484 4.68822 24.2188 4.68822ZM3.90625 22.657C3.04688 22.657 2.34375 21.9538 2.34375 21.0945C2.34375 20.2351 3.04688 19.532 3.90625 19.532C4.76562 19.532 5.46875 20.2351 5.46875 21.0945C5.46875 21.9538 4.76562 22.657 3.90625 22.657ZM19.5312 21.0945C19.5312 21.9538 18.8281 22.657 17.9688 22.657C17.1094 22.657 16.4062 21.9538 16.4062 21.0945C16.4062 20.2351 17.1094 19.532 17.9688 19.532C18.8281 19.532 19.5312 20.2351 19.5312 21.0945Z" fill="#6295E2"/>
            </Svg>
    },
    {
      title: "Diet",
      screen: "Diet",
      colorAccent: "#FFF7DC",
      icon:  <DietComponent/>
    },
    {
      title: "Exercise",
      screen: "Exercise",
      colorAccent: "#FFE2DC",
      icon:<HeartSvgComponent/>
    
    },
    {
      title: "Blood Sugar Test",
      screen: "BloodSugarTest",
      colorAccent: "#e0eaf9",
      icon: <Svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M10.0205 1.07863C9.63281 -0.326643 7.60645 -0.392072 7.16699 1.07863C4.8833 8.78176 0 10.875 0 16.3042C0 21.1109 3.84375 25 8.59375 25C13.3438 25 17.1875 21.1109 17.1875 16.3042C17.1875 10.8477 12.3149 8.81691 10.0205 1.07863ZM8.59375 21.875C5.57861 21.875 3.125 19.4214 3.125 16.4063C3.125 15.9746 3.47461 15.625 3.90625 15.625C4.33789 15.625 4.6875 15.9746 4.6875 16.4063C4.6875 18.5601 6.43994 20.3125 8.59375 20.3125C9.02539 20.3125 9.375 20.6621 9.375 21.0938C9.375 21.5254 9.02539 21.875 8.59375 21.875Z" fill="#6295E2"/>
            </Svg>
      
    },
    {
      title: "Fetal Kick Count",
      screen: "FKC",
      colorAccent: "#FFF7DC",
      icon: <ChildSvgComponent/>
    }
  ]

  return (
    <ScrollView style={{backgroundColor:"#f5f5f5"}}>
      <CustomTextBold style={{fontSize:28, lineHeight:38, textAlign:'center', paddingHorizontal:10, marginTop:StatusBar.currentHeight+80}}>Welcome, SEYI!</CustomTextBold>
      <View style={{flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
        <Svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.00002 7.00004C6.36669 7.00004 6.68069 6.86937 6.94202 6.60804C7.20291 6.34715 7.33335 6.03337 7.33335 5.66671C7.33335 5.30004 7.20291 4.98604 6.94202 4.72471C6.68069 4.46382 6.36669 4.33337 6.00002 4.33337C5.63335 4.33337 5.31958 4.46382 5.05869 4.72471C4.79735 4.98604 4.66669 5.30004 4.66669 5.66671C4.66669 6.03337 4.79735 6.34715 5.05869 6.60804C5.31958 6.86937 5.63335 7.00004 6.00002 7.00004ZM6.00002 11.9C7.35558 10.6556 8.36113 9.52493 9.01669 8.50804C9.67224 7.4916 10 6.58893 10 5.80004C10 4.58893 9.6138 3.59715 8.84135 2.82471C8.06935 2.05271 7.12224 1.66671 6.00002 1.66671C4.8778 1.66671 3.93046 2.05271 3.15802 2.82471C2.38602 3.59715 2.00002 4.58893 2.00002 5.80004C2.00002 6.58893 2.3278 7.4916 2.98335 8.50804C3.63891 9.52493 4.64446 10.6556 6.00002 11.9ZM6.00002 13.4167C5.91113 13.4167 5.82224 13.4 5.73335 13.3667C5.64446 13.3334 5.56669 13.2889 5.50002 13.2334C3.8778 11.8 2.66669 10.4696 1.86669 9.24204C1.06669 8.01404 0.666687 6.86671 0.666687 5.80004C0.666687 4.13337 1.20291 2.8056 2.27535 1.81671C3.34735 0.827818 4.58891 0.333374 6.00002 0.333374C7.41113 0.333374 8.65269 0.827818 9.72469 1.81671C10.7971 2.8056 11.3334 4.13337 11.3334 5.80004C11.3334 6.86671 10.9334 8.01404 10.1334 9.24204C9.33335 10.4696 8.12224 11.8 6.50002 13.2334C6.43335 13.2889 6.35558 13.3334 6.26669 13.3667C6.1778 13.4 6.08891 13.4167 6.00002 13.4167Z" fill="#A7A6A5"/>
          </Svg>
        <CustomTextRegular style={{textAlign:'center', color: "#A7A6A5", marginLeft:5}}>
          
          {'Oyo,'}{' Nigeria'}
        </CustomTextRegular>

      </View>

      {/* Navigation grid */}
      <View style={{maxWidth:500, flexDirection:'row', flexWrap:'wrap', justifyContent:"center", paddingLeft:"2%"}}>
      {
        DashboardItems.map((item, index) => 
        
        <View style={[ windowWidth > 500 ?  styles.above500 : styles.below500, styles.container]} key={index}>  
          <TouchableOpacity onPress={() => navigation.navigate(`${item.screen}`)}>
            <View style={{width: windowWidth/5, height:windowWidth/5,justifyContent:'center', alignItems:'center', backgroundColor:item.colorAccent, borderRadius:12}}>
              {item.icon}
            </View>
            <CustomTextBold style={{textAlign:'center', fontSize:12, lineHeight:15, marginTop:10 }}>{item.title}</CustomTextBold>
          </TouchableOpacity>
        </View>)
      }
      </View>

      {/* blood card */}
      <View style={{backgroundColor:'#6295E2', marginHorizontal:16, borderRadius:14, marginVertical:50}}>
        <View style={{padding:10, position:'absolute'}}>
        <CustomTextBold style={{color:"#fff", fontSize:18, marginBottom:10}}>Blood test</CustomTextBold>
        <CustomTextRegular style={{color:"#fff", fontSize:12}}>Your last schedule date</CustomTextRegular>
        <View style={{flexDirection:'row', alignItems:'flex-start'}}>
          <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_9_740)">
            <Path d="M11.375 3.1875H2.625C1.90013 3.1875 1.3125 3.77513 1.3125 4.5V12.375C1.3125 13.0999 1.90013 13.6875 2.625 13.6875H11.375C12.0999 13.6875 12.6875 13.0999 12.6875 12.375V4.5C12.6875 3.77513 12.0999 3.1875 11.375 3.1875Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>
            <Path d="M3.5 1.5V3.1875M10.5 1.5V3.1875M12.6875 6.65H1.3125" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </G>
            <Defs>
            <ClipPath id="clip0_9_740">
            <Rect width="14" height="15" fill="white"/>
            </ClipPath>
            </Defs>
          </Svg>
          <CustomTextRegular style={{marginLeft:5, color:"#fff"}}>23 Mar</CustomTextRegular>

        </View>
        <CustomTextRegular></CustomTextRegular>
        </View>
       
        <Svg width="100%" height="100" viewBox="0 0 362 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Mask id="mask0_131_604" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="662" height="100">
          <Path d="M0 14C0 6.26801 6.26801 0 14 0H348C355.732 0 362 6.26801 362 14V86C362 93.732 355.732 100 348 100H14C6.26802 100 0 93.732 0 86V14Z" fill="#F6C25D"/>
          </Mask>
          <G Mask="url(#mask0_131_604)">
          <Path fillRule="evenodd" clipRule="evenodd" d="M305.84 -27C313.333 -27 319.408 -20.9634 319.408 -13.517L319.408 8.9547C319.408 33.7762 299.159 53.8981 274.181 53.8981L251.568 53.8981C244.075 53.8981 238 47.8615 238 40.4151C238 32.9686 244.075 26.932 251.568 26.932L274.181 26.932C284.172 26.932 292.272 18.8833 292.272 8.9547L292.272 -13.517C292.272 -20.9634 298.346 -27 305.84 -27Z" fill="#F4F6F5" fillOpacity="0.15"/>
          <Path fillRule="evenodd" clipRule="evenodd" d="M314.431 117.271C306.937 117.271 300.863 111.234 300.863 103.788L300.863 81.3163C300.863 56.4948 321.111 36.3729 346.089 36.3729L368.703 36.3729C376.196 36.3729 382.271 42.4095 382.271 49.8559C382.271 57.3024 376.196 63.339 368.703 63.339L346.089 63.339C336.098 63.3389 327.999 71.3877 327.999 81.3163L327.999 103.788C327.999 111.234 321.924 117.271 314.431 117.271Z" fill="#F4F6F5" fillOpacity="0.15"/>
          <Path d="M301 46.5052C301 54.5104 294.508 61 286.5 61C278.492 61 272 54.5104 272 46.5052C272 38.4999 281.209 28.2887 286.5 23C292.378 28.8763 301 38.4999 301 46.5052Z" fill="#F4F6F5"/>
          <Path d="M289.027 36.8847C288.594 36.1349 288.851 35.1762 289.601 34.7433C290.35 34.3104 291.309 34.5673 291.742 35.3171L296.445 43.4624C296.878 44.2122 296.621 45.1709 295.871 45.6037C295.121 46.0366 294.163 45.7797 293.73 45.03L289.027 36.8847Z" fill="#6295E2"/>
          <Circle cx="287.5" cy="31.5" r="1.5" fill="#6295E2"/>
          <Path d="M265 68.7789C265 73.4716 261.194 77.2759 256.5 77.2759C251.806 77.2759 248 73.4716 248 68.7789C248 64.0861 253.399 58.1002 256.5 55C259.946 58.4447 265 64.0861 265 68.7789Z" fill="#F4F6F5"/>
          <Path d="M257.981 63.1394C257.728 62.6999 257.878 62.1379 258.318 61.8841C258.757 61.6304 259.319 61.7809 259.573 62.2205L262.33 66.9953C262.583 67.4348 262.433 67.9968 261.993 68.2506C261.554 68.5043 260.992 68.3537 260.738 67.9142L257.981 63.1394Z" fill="#6295E2"/>
          <Circle cx="257.086" cy="59.9828" r="0.87931" fill="#6295E2"/>
          <Path d="M325 68.7789C325 73.4716 321.194 77.2759 316.5 77.2759C311.806 77.2759 308 73.4716 308 68.7789C308 64.0861 313.399 58.1002 316.5 55C319.946 58.4447 325 64.0861 325 68.7789Z" fill="#F4F6F5"/>
          <Path d="M317.981 63.1394C317.728 62.6999 317.878 62.1379 318.318 61.8841C318.757 61.6304 319.319 61.7809 319.573 62.2205L322.33 66.9953C322.583 67.4348 322.433 67.9968 321.993 68.2506C321.554 68.5043 320.992 68.3537 320.738 67.9142L317.981 63.1394Z" fill="#6295E2"/>
          <Circle cx="317.086" cy="59.9828" r="0.87931" fill="#6295E2"/>
          </G>
        </Svg>

      </View>
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  above500: {
    height: 500/3,
    width: 500/3
  },
  below500: {
    width: windowWidth/4,
    height: windowWidth/4
  },
  container: {
    justifyContent:'flex-start', 
    alignItems:'center',
    marginRight:"2%", 
    // marginTop:"15%",
    marginVertical:"10%"
  }
})

export default DashboardScreen