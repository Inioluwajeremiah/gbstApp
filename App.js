import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './src/screens/HomeStackScreen';
import { GbstContextProvider } from './GbstContext';
// import CustomTextRegular from './src/components/CustomTextRegular';
// import HomeNavScreen from './src/screens/HomeNavScreen';s
// import DashboardScreen from './src/screens/DrawerScreens/DashboardScreen';
import HomeSplashScreen from './src/screens/HomeSplashScreen';


export default function App() {

  return (
    <GbstContextProvider>
      <NavigationContainer>
        <HomeStackScreen/>
        {/* <HomeNavScreen/> */}
        {/* <DashboardScreen/> */}
        {/* <HomeSplashScreen/> */}
      </NavigationContainer> 
      
    </GbstContextProvider>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
