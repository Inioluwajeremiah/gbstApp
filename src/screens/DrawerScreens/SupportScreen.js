import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import CustomTextRegular from '../../components/CustomTextRegular'
import CustomTextBold from '../../components/CustomTextBold'
import { Circle, Path, Svg } from 'react-native-svg'
import { status_bar_height } from '../../Dimensions'

const SupportScreen = () => {
  return (
    <ScrollView style={{backgroundColor:"#f5f5f5"}}>
      <View style={{paddingHorizontal:16}}>
        <CustomTextBold style={{color:"#CDCFCE", marginTop:status_bar_height+40, fontSize:24, marginBottom:30}}>Hey Johnson,</CustomTextBold>
        
        <CustomTextRegular style={{color:"#717171", fontSize:14, textAlign:"center"}}>
          Do you have any question or remarks? Just write us or message!
        </CustomTextRegular>

        {/* blue card */}
        <View style={{width:"100%", maxWidth:500, padding:16, backgroundColor:"#6295E2", borderTopEndRadius:5, borderTopStartRadius:5, marginTop:16, justifyContent:'center', alignItems:'center'}}>
          <CustomTextBold style={{color:"#fff", textAlign:"center", fontSize:20, marginBottom:16}}>
            Dr Seyi Osunade
          </CustomTextBold>
          {/* phone icon */}
          <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M9.99979 4.99999C12.1028 4.99999 12.9998 5.89699 12.9998 7.99999H14.9998C14.9998 4.77499 13.2248 2.99999 9.99979 2.99999V4.99999ZM13.4218 10.443C13.2296 10.2683 12.9771 10.1752 12.7176 10.1832C12.4581 10.1912 12.2118 10.2998 12.0308 10.486L9.63779 12.947C9.06179 12.837 7.90379 12.476 6.71179 11.287C5.51979 10.094 5.15879 8.93299 5.05179 8.361L7.51079 5.96699C7.69721 5.78612 7.80593 5.53982 7.81396 5.2802C7.82198 5.02059 7.72868 4.76804 7.55379 4.57599L3.85879 0.512995C3.68384 0.320352 3.44067 0.203499 3.18095 0.187255C2.92122 0.17101 2.66539 0.256653 2.46779 0.425995L0.297794 2.28699C0.124905 2.46051 0.0217132 2.69145 0.00779368 2.93599C-0.00720632 3.18599 -0.293206 9.108 4.29879 13.702C8.30479 17.707 13.3228 18 14.7048 18C14.9068 18 15.0308 17.994 15.0638 17.992C15.3083 17.9783 15.5391 17.8747 15.7118 17.701L17.5718 15.53C17.7413 15.3325 17.8271 15.0768 17.811 14.817C17.795 14.5573 17.6783 14.3141 17.4858 14.139L13.4218 10.443Z" fill="white"/>
          </Svg>
          {/* phone no */}
          <CustomTextRegular style={{color:"#fff", textAlign:"center", fontSize:12, marginBottom:16, marginTop:7}}>
            +(234) 8033264855
          </CustomTextRegular>

          {/* curved orange pattern */}
          <View style={{position:'absolute', right:0, bottom:0}}>
            <Svg width="98" height="92" viewBox="0 0 98 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Circle cx="92" cy="92" r="92" fill="#F7C25D"/>
            </Svg>
          </View>

          {/* email icon */}
          <Svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M20 0H0V16H20V0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="white"/>
          </Svg>
          {/* email */}
          <CustomTextRegular style={{color:"#fff", textAlign:"center", fontSize:12, marginBottom:16, marginTop:7}}>
            gbst.fpi@gmail.com
          </CustomTextRegular>




        </View>
      </View>
    </ScrollView>
  )
}

export default SupportScreen