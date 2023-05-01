import React from 'react';
// import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';                                                                                                                                                                                  
import HomeSplashScreen from './HomeSplashScreen';
import HomeNavScreen from './HomeNavScreen';
// import ForgotPasswordScreen from './ForgotPasswordScreen';
import { StatusBar } from 'react-native';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';
import CodeAuthenticationScreen from './CodeAuthenticationScreen';

const HomeStackScreen = () => {

    const Stack = createNativeStackNavigator();

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
            name="HomeNav" 
            options={{
                headerShown: false,
                // headerStatusBarHeight: StatusBar.currentHeight,
                // headerStatusBarColor: "#c026d3",
            }}
            component={HomeNavScreen} />
            
        {/* <Stack.Screen
            name="ForgotPassword" 
            options={{
                title: "Retrieve Password",
                headerStyle: {
                    backgroundColor: "#c026d3",
                },
                headerTintColor: "#fff",
                headerTitleAlign: 'center'
            }}
            component={ForgotPasswordScreen} 
        /> */}

        <Stack.Screen
            name="Sign up" 
            options={{
                headerShown: false,
                // headerStatusBarHeight: StatusBar.currentHeight,
                // headerStatusBarColor: "#c026d3",
            }}
            component={SignUpScreen} 
        />
        
        <Stack.Screen
            name="Sign in" 
            options={{
                headerShown: false,
                // headerStatusBarHeight: StatusBar.currentHeight,
                // headerStatusBarColor: "#c026d3",
            }}
            component={SignInScreen} />
         <Stack.Screen
            name="CodeAuth" 
            options={{
                headerShown: false,
                // headerStatusBarHeight: StatusBar.currentHeight,
                // headerStatusBarColor: "#c026d3",
            }}
            component={CodeAuthenticationScreen} />
    </Stack.Navigator>
    </>
  )
}

export default HomeStackScreen