import 'react-native-gesture-handler';
import React, { useContext } from 'react'
import { Alert, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import DashboardScreen from './DrawerScreens/DashboardScreen';
import ProfileScreen from './DashboardScreens/ProfileScreen';

import ReportScreen from './DrawerScreens/ReportScreen';
import NotificationScreen from './DrawerScreens/NotificationScreen';
import EnrolMentScreen from './DrawerScreens/EnrolMentScreen';
import Svg, { Circle, Line, Path, Rect } from "react-native-svg"
import { styled } from 'nativewind';
import CustomTextBold from '../components/CustomTextBold';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardStackScreen from './DashboardScreens/DashboardStackScreen';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import CustomTextRegular from '../components/CustomTextRegular';
import { GbstContext } from '../GbstContext';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeNavScreen = ({navigation}) => {

  const {fullName, retrievedEmail, profileImageUri} = useContext(GbstContext)

  const routeHook = useRoute()

  const CustomHeaderLeft = () => {
    return(
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{width:40, height:40, borderRadius:12, padding:10, marginLeft:10, justifyContent:'center', alignItems:'center'}}>
            <Svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3.3125 7.68754L11 1.70837L18.6875 7.68754V17.0834C18.6875 17.5365 18.5075 17.971 18.1871 18.2913C17.8668 18.6117 17.4322 18.7917 16.9792 18.7917H5.02083C4.56776 18.7917 4.13323 18.6117 3.81286 18.2913C3.49248 17.971 3.3125 17.5365 3.3125 17.0834V7.68754Z" stroke="#66CA98" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M8.4375 18.7917V10.25H13.5625V18.7917" stroke="#66CA98" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
        </TouchableOpacity>
    )
} 

const CustomHeaderRight = () => {
    return (
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={{width:40, height:40, borderRadius:12, padding:10, marginRight:10, backgroundColor:'#66CA98', justifyContent:'center', alignItems:'center'}}>
            <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M0.6875 3.87835H11.1549C11.4704 5.31433 12.7527 6.39237 14.2821 6.39237C15.8114 6.39237 17.0938 5.31437 17.4093 3.87835H21.3125C21.6922 3.87835 22 3.57052 22 3.19085C22 2.81118 21.6922 2.50335 21.3125 2.50335H17.4089C17.0928 1.06811 15.8087 -0.0106201 14.2821 -0.0106201C12.7546 -0.0106201 11.4711 1.06794 11.1552 2.50335H0.6875C0.307828 2.50335 0 2.81118 0 3.19085C0 3.57052 0.307828 3.87835 0.6875 3.87835V3.87835ZM12.4557 3.19266C12.4557 3.19021 12.4557 3.18772 12.4557 3.18527C12.4587 2.18122 13.278 1.36442 14.2821 1.36442C15.2848 1.36442 16.1041 2.1801 16.1084 3.18368L16.1086 3.19377C16.107 4.19954 15.2882 5.01741 14.2821 5.01741C13.2764 5.01741 12.4579 4.20036 12.4556 3.19519L12.4557 3.19266ZM21.3125 18.1217H17.4089C17.0928 16.6865 15.8087 15.6077 14.2821 15.6077C12.7546 15.6077 11.4711 16.6863 11.1552 18.1217H0.6875C0.307828 18.1217 0 18.4295 0 18.8092C0 19.1889 0.307828 19.4967 0.6875 19.4967H11.1549C11.4704 20.9326 12.7527 22.0107 14.2821 22.0107C15.8114 22.0107 17.0938 20.9326 17.4093 19.4967H21.3125C21.6922 19.4967 22 19.1889 22 18.8092C22 18.4295 21.6922 18.1217 21.3125 18.1217V18.1217ZM14.2821 20.6357C13.2764 20.6357 12.4579 19.8186 12.4556 18.8135L12.4557 18.811C12.4557 18.8085 12.4557 18.806 12.4557 18.8036C12.4587 17.7995 13.278 16.9827 14.2821 16.9827C15.2848 16.9827 16.1041 17.7984 16.1084 18.8019L16.1086 18.812C16.1071 19.8179 15.2883 20.6357 14.2821 20.6357V20.6357ZM21.3125 10.3125H10.8451C10.5296 8.87656 9.24726 7.79856 7.71792 7.79856C6.18857 7.79856 4.90621 8.87656 4.59074 10.3125H0.6875C0.307828 10.3125 0 10.6204 0 11C0 11.3798 0.307828 11.6875 0.6875 11.6875H4.59108C4.9072 13.1227 6.19128 14.2015 7.71792 14.2015C9.24537 14.2015 10.5289 13.1229 10.8448 11.6875H21.3125C21.6922 11.6875 22 11.3798 22 11C22 10.6204 21.6922 10.3125 21.3125 10.3125ZM9.54435 10.9982C9.54435 11.0007 9.5443 11.0032 9.5443 11.0056C9.5413 12.0097 8.72201 12.8265 7.71792 12.8265C6.71524 12.8265 5.89591 12.0108 5.89157 11.0073L5.89145 10.9972C5.89295 9.9913 6.71172 9.17356 7.71792 9.17356C8.72364 9.17356 9.54211 9.99057 9.54439 10.9958L9.54435 10.9982Z" fill="#F4F6F5"/>
            </Svg>
        </TouchableOpacity>
    )
}
const CustomHeaderTitle = (title) => {
    return (
        <CustomTextBold style={{fontSize:26, marginVertical:20}}>{title}</CustomTextBold>
    )
}

  const [fontsLoaded] = useFonts({
    Poppins: require('../../assets/fonts/PoppinsBold.ttf'),
    PoppinsRegular: require('../../assets/fonts/PoppinsRegular.ttf')
    });

    if (!fontsLoaded) {
        return (
            null
        )
    }

  return (
    <>
        <StatusBar backgroundColor= "#f5f5f5" barStyle="dark-content"  />
        <Drawer.Navigator style={{flex:1}} initialRouteName='Dashboard'
          screenOptions={{
              drawerActiveBackgroundColor:"#f5f5f5",
              drawerActiveTintColor: "#ff6c52",
              drawerInactiveTintColor: "#66ca98",
              drawerLabelStyle: {
              marginLeft: -20
              }, 
              headerShown: false,
              headerStyle: {backgroundColor:'#f5f5f5'},
              headerTitleStyle: {fontFamily:"Poppins", alignItems:'center', fontSize:28},
              drawerLabelStyle: {fontFamily:'PoppinsRegular', marginLeft:-20, color:"#9E9E9E", fontSize:16}
            }
          }
          drawerContent={(props) => 
            <View style={{flex:1, paddingTop: 10}}>
              <DrawerContentScrollView {...props}>
                <View style={{margin:10}}>
                  <DrawerItemList {...props} />
                </View>
              </DrawerContentScrollView>
              <View  style={{ justifyContent:'flex-end'}}>
                <View style={{marginLeft:30, padding:10}}>
                  <TouchableOpacity onPress={() => navigation.navigate("Notification")} style={{ flexDirection:'row', justifyContent:"space-between", alignItems:'center'}}>
                    <CustomTextRegular style={styles.drawerLabelStyle}>Notification</CustomTextRegular>
                    <CustomTextRegular style={{width:35, height:25, backgroundColor: "#66CA98", textAlign:'center', fontSize:12, color:"#fff", borderRadius:4, padding:4}}>1</CustomTextRegular>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Support")} style={{marginTop: 20}}>
                    <CustomTextRegular style={styles.drawerLabelStyle}>Support</CustomTextRegular>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("About")} style={{marginTop: 20}}>
                    <CustomTextRegular style={styles.drawerLabelStyle}>About</CustomTextRegular>
                  </TouchableOpacity>
                </View>
              
                <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', backgroundColor: '#66ca98', borderRadius:8, paddingHorizontal:16, paddingVertical:24, margin:20}} className="bg-acpGreen">
                  <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                    <Image source={ profileImageUri ? {uri: `${profileImageUri}`} : require('../../assets/icon.png')} 
                      style={{height:30, width:30, marginRight:5, borderRadius:15}}>

                      </Image>
                    <View>
                      <CustomTextRegular style={{fontSize:12, color:"#fff"}}>{fullName}</CustomTextRegular>
                      <CustomTextRegular style={{fontSize:10, color:"#fff"}}>{retrievedEmail}</CustomTextRegular>
                    </View>
                  </View>
                  <TouchableOpacity style={{justifyContent:'center', padding:5}}>
                  <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M2.74996 3.49999C3.2102 3.49999 3.58329 3.1269 3.58329 2.66666C3.58329 2.20642 3.2102 1.83333 2.74996 1.83333C2.28972 1.83333 1.91663 2.20642 1.91663 2.66666C1.91663 3.1269 2.28972 3.49999 2.74996 3.49999Z" fill="#EFF2F1" stroke="#EFF2F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M2.74996 7.24999C3.2102 7.24999 3.58329 6.8769 3.58329 6.41666C3.58329 5.95642 3.2102 5.58333 2.74996 5.58333C2.28972 5.58333 1.91663 5.95642 1.91663 6.41666C1.91663 6.8769 2.28972 7.24999 2.74996 7.24999Z" fill="#EFF2F1" stroke="#EFF2F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M2.74996 11C3.2102 11 3.58329 10.6269 3.58329 10.1667C3.58329 9.70642 3.2102 9.33333 2.74996 9.33333C2.28972 9.33333 1.91663 9.70642 1.91663 10.1667C1.91663 10.6269 2.28972 11 2.74996 11Z" fill="#EFF2F1" stroke="#EFF2F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg>

                  </TouchableOpacity>
                 
                </View>
              </View>
            </View>
          }
          
        
        >

      <Drawer.Screen name="Dashboard"  component={DashboardStackScreen} 
          options={({}) => ({
            // headerTitle: () => <Text>{routeHook.state.routes[route.state.index].name}</Text>,
            headerShown: false, 
            drawerIcon: () => <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
          >
            <Path d="M1.54312 5.445L9 9.75854L16.4569 5.445M9 18.36V9.75M16.6875 13.1667V6.33333C16.6872 6.03375 16.6081 5.73952 16.4582 5.48016C16.3083 5.22079 16.0928 5.00541 15.8333 4.85562L9.85417 1.43896C9.59447 1.28902 9.29988 1.21008 9 1.21008C8.70012 1.21008 8.40553 1.28902 8.14583 1.43896L2.16667 4.85562C1.90722 5.00541 1.69173 5.22079 1.54181 5.48016C1.39189 5.73952 1.31281 6.03375 1.3125 6.33333V13.1667C1.31281 13.4662 1.39189 13.7605 1.54181 14.0198C1.69173 14.2792 1.90722 14.4946 2.16667 14.6444L8.14583 18.061C8.40553 18.211 8.70012 18.2899 9 18.2899C9.29988 18.2899 9.59447 18.211 9.85417 18.061L15.8333 14.6444C16.0928 14.4946 16.3083 14.2792 16.4582 14.0198C16.6081 13.7605 16.6872 13.4662 16.6875 13.1667Z" stroke="#66CA98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </Svg>,
           headerLeft: () => 
           <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{width:40, height:40, borderRadius:12, padding:10, marginLeft:10, justifyContent:'center', alignItems:'center'}}>
             <Svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <Path d="M3.3125 7.68754L11 1.70837L18.6875 7.68754V17.0834C18.6875 17.5365 18.5075 17.971 18.1871 18.2913C17.8668 18.6117 17.4322 18.7917 16.9792 18.7917H5.02083C4.56776 18.7917 4.13323 18.6117 3.81286 18.2913C3.49248 17.971 3.3125 17.5365 3.3125 17.0834V7.68754Z" stroke="#66CA98" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
               <Path d="M8.4375 18.7917V10.25H13.5625V18.7917" stroke="#66CA98" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
             </Svg>
           </TouchableOpacity>,
           headerRight: () =>  
             <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={{width:40, height:40, borderRadius:12, padding:10, marginRight:10, backgroundColor:'#66CA98', justifyContent:'center', alignItems:'center'}}>
               <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <Path d="M0.6875 3.87835H11.1549C11.4704 5.31433 12.7527 6.39237 14.2821 6.39237C15.8114 6.39237 17.0938 5.31437 17.4093 3.87835H21.3125C21.6922 3.87835 22 3.57052 22 3.19085C22 2.81118 21.6922 2.50335 21.3125 2.50335H17.4089C17.0928 1.06811 15.8087 -0.0106201 14.2821 -0.0106201C12.7546 -0.0106201 11.4711 1.06794 11.1552 2.50335H0.6875C0.307828 2.50335 0 2.81118 0 3.19085C0 3.57052 0.307828 3.87835 0.6875 3.87835V3.87835ZM12.4557 3.19266C12.4557 3.19021 12.4557 3.18772 12.4557 3.18527C12.4587 2.18122 13.278 1.36442 14.2821 1.36442C15.2848 1.36442 16.1041 2.1801 16.1084 3.18368L16.1086 3.19377C16.107 4.19954 15.2882 5.01741 14.2821 5.01741C13.2764 5.01741 12.4579 4.20036 12.4556 3.19519L12.4557 3.19266ZM21.3125 18.1217H17.4089C17.0928 16.6865 15.8087 15.6077 14.2821 15.6077C12.7546 15.6077 11.4711 16.6863 11.1552 18.1217H0.6875C0.307828 18.1217 0 18.4295 0 18.8092C0 19.1889 0.307828 19.4967 0.6875 19.4967H11.1549C11.4704 20.9326 12.7527 22.0107 14.2821 22.0107C15.8114 22.0107 17.0938 20.9326 17.4093 19.4967H21.3125C21.6922 19.4967 22 19.1889 22 18.8092C22 18.4295 21.6922 18.1217 21.3125 18.1217V18.1217ZM14.2821 20.6357C13.2764 20.6357 12.4579 19.8186 12.4556 18.8135L12.4557 18.811C12.4557 18.8085 12.4557 18.806 12.4557 18.8036C12.4587 17.7995 13.278 16.9827 14.2821 16.9827C15.2848 16.9827 16.1041 17.7984 16.1084 18.8019L16.1086 18.812C16.1071 19.8179 15.2883 20.6357 14.2821 20.6357V20.6357ZM21.3125 10.3125H10.8451C10.5296 8.87656 9.24726 7.79856 7.71792 7.79856C6.18857 7.79856 4.90621 8.87656 4.59074 10.3125H0.6875C0.307828 10.3125 0 10.6204 0 11C0 11.3798 0.307828 11.6875 0.6875 11.6875H4.59108C4.9072 13.1227 6.19128 14.2015 7.71792 14.2015C9.24537 14.2015 10.5289 13.1229 10.8448 11.6875H21.3125C21.6922 11.6875 22 11.3798 22 11C22 10.6204 21.6922 10.3125 21.3125 10.3125ZM9.54435 10.9982C9.54435 11.0007 9.5443 11.0032 9.5443 11.0056C9.5413 12.0097 8.72201 12.8265 7.71792 12.8265C6.71524 12.8265 5.89591 12.0108 5.89157 11.0073L5.89145 10.9972C5.89295 9.9913 6.71172 9.17356 7.71792 9.17356C8.72364 9.17356 9.54211 9.99057 9.54439 10.9958L9.54435 10.9982Z" fill="#F4F6F5"/>
               </Svg>
           </TouchableOpacity>,
           headerTitle: () => <Text>{routeHook.name}</Text>
          }) 
           }
      /> 
      
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen}
        options={{title:"Profile", drawerIcon: ({color}) => 
          <Svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.03125 6.46875C6.03125 9.48775 8.481 11.9375 11.5 11.9375C14.519 11.9375 16.9688 9.48775 16.9688 6.46875C16.9688 3.44975 14.519 1 11.5 1C8.481 1 6.03125 3.44975 6.03125 6.46875ZM11.5 16.0938C10.2618 16.0938 9.08234 15.8341 8.01321 15.375H5.75C3.12631 15.375 1 17.5013 1 20.125V20.8438C1 21.4819 1.5181 22 2.15625 22H20.8438C21.4819 22 22 21.4819 22 20.8438V20.125C22 17.5013 19.8737 15.375 17.25 15.375H14.9861C13.9149 15.8336 12.7394 16.0938 11.5 16.0938Z" stroke="#66CA98" stroke-width="2"/>
          </Svg>,
          headerShown: true,
          headerStyle: {backgroundColor:"#f5f5f5"},
          headerLeft: () => null,
          headerRight: () => CustomHeaderRight(), 
          // headerTitle: () => CustomHeaderTitle('Profile')
        }}
     />

    <Drawer.Screen name="EnrolmentScreen" component={EnrolMentScreen}
      options={{
        title:"Enrolment ID", 
        drawerIcon: ({color}) => 
        <Svg width={20} height={20} viewBox="0 0 20 20">
          <Path d="M1.45837 14.0208L10 18.2916L18.5417 14.0208M1.45837 9.74998L10 14.0208L18.5417 9.74998M10 1.20831L1.45837 5.47915L10 9.74998L18.5417 5.47915L10 1.20831Z" stroke="#66CA98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg> ,
         headerShown: true,
         headerStyle: {backgroundColor:"#f5f5f5"},
         headerLeft: () => null,
         headerRight: () => CustomHeaderRight(), 
      }}
      />
    
      <Drawer.Screen name='ReportScreen' component={ReportScreen} 
        options={{title:"Report", drawerIcon: ({color}) => 
        <Svg width={20} height={20} viewBox="0 0 20 20">
          <Path d="M4.16663 16.9375V10.9583M4.16663 7.54167V1.5625M11 16.9375V9.25M11 5.83333V1.5625M17.8333 16.9375V12.6667M17.8333 9.25V1.5625M1.60413 10.9583H6.72913M8.43746 5.83333H13.5625M15.2708 12.6667H20.3958" stroke="#66CA98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>,
         headerShown: true,
         headerLeft: () => CustomHeaderLeft(),
         headerRight: () => CustomHeaderRight(), 
         headerTitle: () => <CustomTextBold style={{fontSize:26, color:"#66CA98"}}>Report</CustomTextBold>
      }}
      /> 
    
    </Drawer.Navigator>
    </>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical:16
  },
  drawerLabelStyle: {
    color:"#9E9E9E", 
    fontSize:16
  }
 
});

export default HomeNavScreen