import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import CustomTextBold from '../../components/CustomTextBold'
import { Defs, G, LinearGradient, Path, Rect, Stop, Svg } from 'react-native-svg'
import { status_bar_height, windowHeight, windowWidth } from '../../Dimensions'
import { CircularProgress } from 'react-native-circular-progress'

const DietScreen = () => {

  const DietDButtonData = [{id:1, label:"Breakfast"}, {id:2, label:"Lunch"}, {id:3, label:"Dinner"}]

  const [progress, setProgress] = useState(60);

  const DietButton = ({text}) => {
    return (
      <TouchableOpacity 
        style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center', paddingHorizontal:16, borderRadius:8, paddingVertical:10, backgroundColor:"#F6C25D", marginBottom:10}}>
        <CustomTextBold style={{fontSize:25, color:"#fff"}}>{text}</CustomTextBold>
        <Svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M25 5.46875V19.5312C25 20.8252 23.9502 21.875 22.6562 21.875H2.34375C1.0498 21.875 0 20.8252 0 19.5312V5.46875C0 4.1748 1.0498 3.125 2.34375 3.125H6.64062L7.24121 1.51855C7.58301 0.605469 8.45703 0 9.43359 0H15.5615C16.5381 0 17.4121 0.605469 17.7539 1.51855L18.3594 3.125H22.6562C23.9502 3.125 25 4.1748 25 5.46875ZM18.3594 12.5C18.3594 9.26758 15.7324 6.64062 12.5 6.64062C9.26758 6.64062 6.64062 9.26758 6.64062 12.5C6.64062 15.7324 9.26758 18.3594 12.5 18.3594C15.7324 18.3594 18.3594 15.7324 18.3594 12.5ZM16.7969 12.5C16.7969 14.8682 14.8682 16.7969 12.5 16.7969C10.1318 16.7969 8.20312 14.8682 8.20312 12.5C8.20312 10.1318 10.1318 8.20312 12.5 8.20312C14.8682 8.20312 16.7969 10.1318 16.7969 12.5Z" fill="black"/>
        </Svg>


      </TouchableOpacity>
    )
  }
  
  return (

    <ScrollView style={{backgroundColor:"#f5f5f5"}}>
      <View style={{paddingHorizontal:16}}>
        <CustomTextBold style={{color:"#CDCFCE", marginTop:status_bar_height+40, fontSize:24, marginBottom:55}}>Hey Johnson,</CustomTextBold>

      {
        DietDButtonData.map((item, index) => 
          <DietButton key={index} text={item.label} />
        )
      }      
          {/* timer green card */}
          <View 
            style={{maxWidth:500, marginTop:30, width:"100%", height:310, borderRadius:20, backgroundColor:"#6295E2", alignItems:'center', justifyContent:'center'}}>

            {/* timer countdown */}
            <CircularProgress
              size={windowWidth/2}
              width={10}
              fill={progress}
              tintColor="#F6C25D"
              backgroundColor="#fff"
              rotation={0}
              lineCap="round"
              arcSweepAngle={360}
            />
          <CustomTextBold style={{fontSize:25, marginTop:15, color:"#fff"}}>Calorie Estimation</CustomTextBold>
        </View>
      </View>
    </ScrollView>
    
  )
}

export default DietScreen