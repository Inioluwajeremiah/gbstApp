import React, { useContext, useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'
import CodeAuthenticationScreen from './CodeAuthenticationScreen'
import HomeNavScreen from './HomeNavScreen'
import { GbstContext } from '../GbstContext'
import LoadingScreen from './LoadingScreen'
import HomeSplashScreen from './HomeSplashScreen'
import { Alert, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator()

const MainStackScreen = () => {

    {/* workflow of user authentication
    1. use clean email ehich is email with the removal of special characters
    2. since the userId is taking long to respond
    3. save the clean_email on phone storage, and use it as the second path
        for storing user data
    3. Use clean_email as the second path for code verification as well'
    4. When verifying auth code you can retrieve clean_email from local storage
    5. delete when user is already authenticated
    6. since the email is the link to get to the authenticated users as well, 
        allow authentication only from sign which means you redirect users to 
        sign in page after authentiation
    7. The email link can be gotten by cleaning email from user sigin as well
        and use to query link and check whether user is authenticated or not 
    */}

    const {authStatus, GetDoc, localUserId, userId, loadingAuth, userloginStatus} = useContext(GbstContext);

  return (

    <Stack.Navigator
        screenOptions={{headerShown:false}} style={{flex: 1}}>

            {/* if userobject show nav if not refer to sign in as the first screen */}
        {
    
           userloginStatus == true && !loadingAuth ? 
                //  !userObject ? 
                <Stack.Screen
                    name="HomeNav"  
                        options={{
                            headerShown: false,
                            // headerStatusBarHeight: StatusBar.currentHeight,
                            // headerStatusBarColor: "#c026d3",
                        }}
                    component={HomeNavScreen} 
                />
             :

            <> 
                 <Stack.Screen
                    name="Sign in" 
                    options={{
                        headerShown: false,
                    }}
                    component={SignInScreen} 
                />
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
                    name="CodeAuth" 
                    options={{
                        headerShown: false,
                        // headerStatusBarHeight: StatusBar.currentHeight,
                        // headerStatusBarColor: "#c026d3",
                    }}
                    component={CodeAuthenticationScreen} 
                />
            </>
        }
    </Stack.Navigator>
  )
}

export default MainStackScreen