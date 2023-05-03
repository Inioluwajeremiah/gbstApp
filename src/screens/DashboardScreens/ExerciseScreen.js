import React, { useState, useEffect, useRef } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Accelerometer } from 'expo-sensors';
import CustomTextBold from '../../components/CustomTextBold'
import { status_bar_height, windowHeight, windowWidth } from '../../Dimensions'
import ShortButtons from '../../components/ShortButtons'
import {CircularProgress} from 'react-native-circular-progress';
import CustomTextRegular from '../../components/CustomTextRegular';
import girl_exercise from '../../../assets/girl_exercise.png'
import tennis from '../../../assets/tennis.png'
import sleep from '../../../assets/sleep.png'
import mediate from '../../../assets/mediate.png'
import bread from '../../../assets/bread.png'


const ExerciseScreen = ({navigation}) => {
  
  const [start, setStart] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  const week1_data = [{id:1, label:"Daily"},{id:2,label:"Weekly"},{id:3,label:"Monthly"}]
  const other_data = [
    {id:1, title:"1hr 30",unit:"m", title2: "500 steps taken", image:tennis}, 
    {id:2, title: "618", unit:"kcal", title2:"consumed", image:bread},
    {id:3, title: "70", unit:"bpm", title2:"Avg heart rate", image:sleep},
  ]

  const toggleStart = () => {
    setStart(!start);
    setPaused(false);
    setCount(0);
    setProgress(0);
  };

  const togglePause = () => {
    setPaused(!paused);
  };

  useEffect(() => {
    let subscription;

    if (start && !paused) {
      subscription = Accelerometer.addListener((accelerometerData) => {
        const x = accelerometerData.x.toFixed(2);
        const y = accelerometerData.y.toFixed(2);
        const z = accelerometerData.z.toFixed(2);

        const acceleration = Math.sqrt(x * x + y * y + z * z);
        if (acceleration >= 1.2) {
          setCount(count + 1);
        }

        const newProgress = (count / 100) * 100;
        setProgress(newProgress);
      });
    }

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [start, paused, count]);


  return (
    <ScrollView style={{backgroundColor:"#f5f5f5"}}>
      <View style={{paddingHorizontal:16}}>
        <CustomTextBold style={{color:"#CDCFCE", marginTop:status_bar_height+40, fontSize:24, marginBottom:55}}>Hey Johnson,</CustomTextBold>
        <View  style={{display:'flex', flexDirection:'row', alignItems:'center', maxWidth:500, justifyContent:'space-between'}}>
          {
            week1_data.map((item, index) =>
                <ShortButtons key={index} bg_color={"#76D4A5"} active_color={"#66CA98"} onpress={null} text={item.label}/>
            )
          }
        </View >

          {/* timer green card */}
        <View style={{maxWidth:500, marginTop:30, width:"100%", height:windowHeight/2, borderRadius:20, backgroundColor:"#66CA98", alignItems:'center'}}>
          <CustomTextBold style={{fontSize:25, marginTop:15, color:"#fff"}}>Exercise Timer</CustomTextBold>

          {/* timer n date */}
          <View style={{width:"90%", marginTop:20, flexDirection:'row', alignItems:'flex-end', justifyContent:'flex-end'}}>
            {/* <CircularProgress
              ref={timerRef}
              duration={remainingTime}
              rotation={0}
              lineCap="round"
              size={200}
              width={20}
              fill="#007aff"
              tintColor="#f00"
              backgroundColor="#fff"
              onAnimationComplete={OnCompleteTask}
            >
              {({ remainingTime }) => (
                <Text style={{ fontSize: 50 }}>{remainingTime}</Text>
              )}
            </CircularProgress>   */}

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
            {/* date */}
            <CustomTextRegular style={{color:"#fff", alignSelf:"flex-start"}}>7th July,2023</CustomTextRegular>
          </View>

          {/* girl_exercise.png */}
          <View style={{position:'absolute', bottom:0, right:0, }}>
            <Image source={girl_exercise} resizeMode='contain' />
          </View>
            {/* control buttons */}
          <View style={{flexDirection:'row', marginTop:30, width:"80%", justifyContent:'space-around', alignSelf:'flex-start', alignItems:'center', padding:10, maxWidth:500}}>
              <TouchableOpacity style={styles.button}  onPress={toggleStart} >
                <CustomTextRegular style={styles.text}>{start ? 'Stop' : 'Start'}</CustomTextRegular>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.button} onPress={togglePause} >
                <CustomTextRegular style={styles.text}>{paused ? 'Resume' : 'Pause'}</CustomTextRegular>
              </TouchableOpacity>             
          </View>

        
        

        </View>

        {/* cards */}
        <View style={{maxWidth:500, marginTop:30, flexDirection:'row', flexWrap:'wrap',  justifyContent:"center", paddingLeft:"2%"}}>
          { 
          other_data.map((item, index) => 
            <TouchableOpacity key={index} style={{borderRadius:20, backgroundColor:"#76D4A5", width:windowWidth/1.8, height: windowWidth/2.5, flexDirection:'row', justifyContent:'space-between', paddingTop:20, paddingBottom:10, marginBottom:16 }}>
              <View style={{paddingLeft:10}}>
                {/* title text */}
                <View style={{flexDirection:'row', alignItems:'center', }}>
                  <CustomTextBold style={{fontSize:24, color:"#fff"}}>{item.title}</CustomTextBold>
                  <CustomTextBold style={{fontSize:16, color:"#fff"}}>{item.unit}</CustomTextBold>
                </View>
                <CustomTextRegular style={{fontSize:14, color:"#fff", marginTop:-12}}>{item.title2}</CustomTextRegular>
              </View>

              {/* image */}
              <Image source={item.image} resizeMode='contain'/>

            </TouchableOpacity>
          )
        }
        </View>
       
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor:"#fff",
    width: 100,
    height:40,
    borderRadius:8,
    paddingHorizontal:10,
    paddingVertical:5,
    justifyContent:'center'
    // marginLeft:10
  },
  text: {
    fontSize:15,
    color:"#6295E2",
    textAlign:'center',
    fontWeight: "500"
  }
})

export default ExerciseScreen