import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';                                                                                                                                                                                 
import HomeSplashScreen from './HomeSplashScreen';
// import ForgotPasswordScreen from './ForgotPasswordScreen';
import MainStackScreen from './MainStackScreen';

const Stack = createNativeStackNavigator();

const HomeStackScreen = () => {

  return (

    <>
    <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content"  /> 
    <Stack.Navigator screenOptions={{headerShown:false}} style={{flex: 1}}>
        <Stack.Screen 
            name="SplashScreen"
            options={{
                headerShown: false,
                headerStatusBarHeight: StatusBar.currentHeight,
                headerStatusBarColor: "#c026d3",
                headerTintColor: '#fff'
            }}
            component={HomeSplashScreen} 
        />
        <Stack.Screen
            name="main" 
            options={{
                headerShown: false,
                // headerStatusBarHeight: StatusBar.currentHeight,
                // headerStatusBarColor: "#c026d3",
            }}
            component={MainStackScreen} />

    </Stack.Navigator>
    </>
  )
}

export default HomeStackScreen