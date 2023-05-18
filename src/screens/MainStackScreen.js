import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'
import CodeAuthenticationScreen from './CodeAuthenticationScreen'
import HomeNavScreen from './HomeNavScreen'
import { GbstContext } from '../GbstContext'
import LoadingScreen from './LoadingScreen'
import HomeSplashScreen from './HomeSplashScreen'
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator()

const MainStackScreen = () => {

    const {authStatus, GetDoc, localUserId} = useContext(GbstContext)

    const data2 = GetDoc("authenticatedUsers", localUserId)
    console.log("authStatus =>  ", authStatus);

  return (

    <Stack.Navigator
        screenOptions={{headerShown:false}} style={{flex: 1}}>

            {/* if userobject show nav if not refer to sign in as the first screen */}

        {
           authStatus == true ? 
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
                {/* <Stack.Screen
                    name="LoadingScreen" 
                    options={{
                        headerShown: false,
                    }}
                    component={LoadingScreen} 
                /> */}
                {/* <Stack.Screen 
                    name="SplashScreen"
                    options={{
                        headerShown: false,
                        headerStatusBarHeight: StatusBar.currentHeight,
                        headerStatusBarColor: "#c026d3",
                        headerTintColor: '#fff'
                    }}
                    component={HomeSplashScreen} 
                /> */}
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