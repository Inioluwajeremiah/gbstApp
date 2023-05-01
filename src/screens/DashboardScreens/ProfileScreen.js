import { useRoute } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { windowWidth } from '../../Dimensions';
import LongButton from '../../components/LongButton';
import { Circle, ClipPath, Defs, G, Mask, Path, Rect, Svg } from 'react-native-svg';
import CustomTextBold from '../../components/CustomTextBold';
import CustomTextRegular from '../../components/CustomTextRegular';

const ProfileScreen = () => {

  return (
    <ScrollView contentContainerStyle={{backgroundColor:"#f5f5f5", flex:1}}>
      <View style={{width: windowWidth/1.5, height:windowWidth/1.5, maxWidth:500, maxWidth:500, borderdRadius:50, backgroundColor:"red", justifyContent:'center', alignSelf:'center',marginBottom:30}}>
        <Image style={{width: windowWidth/1.5, height:windowWidth/1.5, maxWidth:500, maxWidth:500, backgroundColor:"blue", borderRadius:"50%"}}>
        </Image>
      </View>

      {/* radar */}
      <View>
        {/* inner radar */}
        <View>

        </View>
      </View>
      {/* legend */}
      <View></View>

      <LongButton 
        on_press={null}
        text={"Change Password"}
      />
      <LongButton 
        on_press={null}
        text={"Change Profile Image"}
      />
      <LongButton 
        on_press={null}
        text={"Change Email"}
      />

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

export default ProfileScreen