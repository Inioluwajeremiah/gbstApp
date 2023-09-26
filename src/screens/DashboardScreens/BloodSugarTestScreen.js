import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CustomTextBold from '../../components/CustomTextBold'
import { status_bar_height, windowWidth } from '../../Dimensions'
import CustomTextRegular from '../../components/CustomTextRegular'
import MyRadioGroup from '../../components/RadioGroupComponent'
import Button from '../../components/Button'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Circle, G, Mask, Path, Svg } from 'react-native-svg'
import DOMPurify from 'dompurify';
import RadioButton from '../../components/RadioGroupComponent'


const BloodSugarTestScreen = () => {

  // const {userId, SaveDoc, saveDocLoading} = useContext(GbstContext);

  const [progress, setProgress] = useState(89);
  const [age, setAge] = useState('')
  const [educationLevel, setEducationLevel] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [religion, setReligion] = useState('')
  const [ethnicity, setEthnicity] = useState('')
  const [occupation, setOccupation] = useState('')
  const [bloodSugarLevel, setBloodSugarLevel] = useState('')
  const [loading, setLoading] =useState(false)
  

  const SubmitData = ()  => {
    setLoading(true)
    fetch ('http://gbstaiapp.pythonanywhere.com//blood_sugar_test/', {
      method: "POST",
      body: JSON.stringify({
        age:age,
        educationLevel:educationLevel,
        maritalStatus: maritalStatus,
        religion: religion,
        ethnicity: ethnicity,
        occupation:occupation
      }).then(prom => prom.json()).then(result => {
        Alert.alert("", `${result.message}`)
        setLoading(false)
      }).catch(error => {
        Alert.alert("", `${error}`)
        setLoading(false)
      })
    })
  }

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
          // test card
          <View key={index} style={{borderRadius:20, backgroundColor:"#6295E2", padding:16, marginBottom:20}}>
              {/* test type */}
            <CustomTextBold style={{fontSize:14, textAlign:'center', color:"#fff"}}>{item.label}</CustomTextBold>
            {/* subtype card */}
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

             {/* water mark */}
            <View style={{position:'absolute',flex:1, right:0, left:0, zIndex:-1 }}>
              <Svg style={{flex:1}} width="100%" height="100" viewBox="0 0 362 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Mask id="mask0_131_604" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="662" height="100">
                <Path d="M0 14C0 6.26801 6.26801 0 14 0H348C355.732 0 362 6.26801 362 14V86C362 93.732 355.732 100 348 100H14C6.26802 100 0 93.732 0 86V14Z" fill="#F6C25D"/>
                </Mask>
                <G Mask="url(#mask0_131_604)">
                <Path fillRule="evenodd" clipRule="evenodd" d="M305.84 -27C313.333 -27 319.408 -20.9634 319.408 -13.517L319.408 8.9547C319.408 33.7762 299.159 53.8981 274.181 53.8981L251.568 53.8981C244.075 53.8981 238 47.8615 238 40.4151C238 32.9686 244.075 26.932 251.568 26.932L274.181 26.932C284.172 26.932 292.272 18.8833 292.272 8.9547L292.272 -13.517C292.272 -20.9634 298.346 -27 305.84 -27Z" fill="#F4F6F5" fillOpacity="0.15"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M314.431 117.271C306.937 117.271 300.863 111.234 300.863 103.788L300.863 81.3163C300.863 56.4948 321.111 36.3729 346.089 36.3729L368.703 36.3729C376.196 36.3729 382.271 42.4095 382.271 49.8559C382.271 57.3024 376.196 63.339 368.703 63.339L346.089 63.339C336.098 63.3389 327.999 71.3877 327.999 81.3163L327.999 103.788C327.999 111.234 321.924 117.271 314.431 117.271Z" fill="#F4F6F5" fillOpacity="0.15"/>
                <Path d="M301 46.5052C301 54.5104 294.508 61 286.5 61C278.492 61 272 54.5104 272 46.5052C272 38.4999 281.209 28.2887 286.5 23C292.378 28.8763 301 38.4999 301 46.5052Z" fill="#6295E2"/>
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
                     
          </View>
        )}
        <View style={styles.container2}>
          {
            arraydata.map((item, index) => 
              <RadioButton key={index}
                label={item.label}
                selected={bloodSugarLevel === `${item.label}`}
                onPress={() => setBloodSugarLevel(`${item.label}`)}
              />
            )
          }
        </View>
        {/* <MyRadioGroup array={arraydata} field_name={"blood_sugar_test"} sub_field_name={"test_blood_sugar"}/> */}

        <Button title={"Get Result"} bg_color={"#6295E2"} 
          loading={loading} spinner_color={'#fff'}
        />

        <CustomTextBold style={{fontSize:20, color:"#CDCFCE"}}>Results</CustomTextBold>

        {/* result card */}
        <View style={{borderRadius:20, maxWidth:"100%", flexDirection:'row', justifyContent:'space-between', padding:16, backgroundColor:"#6295E2"}}>
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

            {/* display legend and text box */}
          <View style={{paddingHorizontal:10}}>
                {/* display legend */}
            <View >
              {
                  resultIndicator.map((item, index) => 
                  <View key={index} style={{flexDirection:'row', marginBottom:20, alignItems:'center'}}>
                    <View style={{width:20,height:18,backgroundColor:`${item.color}`, marginRight:10}}></View>
                    <CustomTextRegular style={{color:"#fff", fontSize:10, textAlign:"center"}}>{item.label}</CustomTextRegular>
                  </View>
                  )
                }
            </View>

            {/* text box */}
            {/* <Text style={{textAlign:"left"}}></Text> */}
          <CustomTextRegular style={{maxWidth:"80%", backgroundColor:"#9bc0f7f3", color:"#fff", flexWrap:"wrap", textAlign:"left", fontSize:10, padding:10}}>
            AI predicts an increase in the blood sugar level in the coming weeks
          </CustomTextRegular>
          </View>

        </View>

      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container2: {
   backgroundColor: 'white',
   borderRadius: 8,
   padding: 16,
   marginBottom: 16,
   marginHorizontal:16,
   shadowColor: '#000',
   shadowOpacity: 0.2,
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowRadius: 2,
   elevation: 2
 },
 })

export default BloodSugarTestScreen