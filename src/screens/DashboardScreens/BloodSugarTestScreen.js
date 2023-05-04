import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import CustomTextBold from '../../components/CustomTextBold'
import { status_bar_height, windowWidth } from '../../Dimensions'
import CustomTextRegular from '../../components/CustomTextRegular'
import MyRadioGroup from '../../components/RadioGroupComponent'
import Button from '../../components/Button'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

const BloodSugarTestScreen = () => {

  const [progress, setProgress] = useState(89);

  const testIndicatorsData = [
    {id:1, label:"A1C Test", type:[{label:"Normal", data:"Below 5.7%",color:"#76D4A5"}, {label:"Prediabetes", data:"5.7 - 6.4%", color:"#F6C25D"}, {label:"Diabetes", data:"6.5% or above", color:"#FF6C52"}]},
    {id:2, label:"Fasting Blood Sugar Test", type:[{label:"Normal", data:"99mg/dl or below",color:"#76D4A5"}, {label:"Prediabetes", data:"100 - 125mg/dl", color:"#F6C25D"}, {label:"Diabetes", data:"126mg/dl or above", color:"#FF6C52"}]},
    {id:3, label:"Glucose Tolerance", type:[{label:"Normal", data:"140mg/dl or below",color:"#76D4A5"}, {label:"Prediabetes", data:"140 - 199mg/dl", color:"#F6C25D"}, {label:"Diabetes", data:"200mg/dl or above", color:"#FF6C52"}]}
  ]
  const arraydata = [{id:1,label:"A1c"}, {id:2,label:"Fasting"}, {id:3,label:"Random"}, {id:4,label:"OGTT"}]
  const resultIndicator = [{id:1, color:"#76D4A5", label:"Green is normal"},{id:2, color:"#F6C25D", label:"Orange is prediabetes"},{id:3, color:"#FF6C52", label:"Red is diabetes"},]
  return (
    <ScrollView style={{backgroundColor:"#f5f5f5"}}>
      <View style={{paddingHorizontal:16}}>
        <CustomTextBold style={{color:"#CDCFCE", marginTop:status_bar_height+40, fontSize:24, marginBottom:20}}>Hey Johnson,</CustomTextBold>
        
        {
          testIndicatorsData.map((item, index) => 
          <View style={{borderRadius:20, backgroundColor:"#6295E2", padding:16, marginBottom:20}}>
              {/* test type */}
            <CustomTextBold style={{fontSize:14, textAlign:'center', color:"#fff"}}>{item.label}</CustomTextBold>
            {/* type title */}
            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', width:"100%", padding:10 }}>
              {item.type.map((item2, index2) =>
                <View key={index2} style={{width:100, height:75, borderRadius:50, justifyContent:'center', alignItems:'center'}}>
                  <CustomTextRegular style={{color:"#fff"}}>{item2.label}</CustomTextRegular>
                  <View style={{width:70, height:70, borderRadius:50, backgroundColor:`${item2.color}`, justifyContent:'center', alignItems:'center'}}>
                    <CustomTextRegular style={{position:"absolute", textAlign:"center", color:"#fff", fontSize:10}}>{item2.data}</CustomTextRegular>
                  </View>
                </View>
              )}  
            </View>              
          </View>
        )}

        <MyRadioGroup array={arraydata} field_name={"blood_sugar_test"} sub_field_name={"test_blood_sugar"}/>

        <Button title={"Get Result"} bg_color={"#6295E2"}/>

        <CustomTextBold>Results</CustomTextBold>
        {/* result card */}
        <View style={{borderRadius:20, flexDirection:'row', justifyContent:'space-between', padding:16, backgroundColor:"#6295E2"}}>
          {/* display result */}
          <View>
          <AnimatedCircularProgress
            size={windowWidth/3}
            width={10}
            fill={progress}
            tintColor="#F6C25D"
            backgroundColor="#fff"
            rotation={0}
            lineCap="round"
            arcSweepAngle={360}
          />
          </View>

          <View style={{alignItems:'flex-start', justifyContent:'center'}}>
          {
              resultIndicator.map((item, index) => 
              <View key={index} style={{flexDirection:'row', marginBottom:20}}>
                <View style={{width:20,height:18,backgroundColor:`${item.color}`, marginRight:10}}></View>
                <CustomTextRegular style={{color:"#fff", fontSize:10}}>{item.label}</CustomTextRegular>
              </View>
              )
            }

          </View>
        </View>
       
      </View>
      
    </ScrollView>
  )
}

export default BloodSugarTestScreen