import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GbstContext } from '../../GbstContext'
import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'
import CodeAuthenticationScreen from './CodeAuthenticationScreen'
import HomeNavScreen from './HomeNavScreen'

const Stack = createNativeStackNavigator()

const MainStackScreen = () => {

    const {loadingAuth, userObject} = useContext(GbstContext)

    
{/* { 
          (userObject && userObject.emailVerified == true) 
        ? */}
         
        {/* : */}
          {/* <>
            <Drawer.Screen name="Login" component={LoginScreen}
              options={{drawerIcon: ({color}) => <IonIcon name="log-in-outline" size={20} color={color}/> }}
             />
          
            <Drawer.Screen name="Register" component={SignUpScreen} 
               options={{drawerIcon: ({color}) => <IonIcon name="person-add-outline" size={20} color={color} /> }}
            />
          </> */}
      {/* } */}


  return (

    <Stack.Navigator
        screenOptions={{headerShown:false}} style={{flex: 1}}>

            {/* if userobject show nav if not refer to sign in as the first screen */}

        {
           userObject && userObject.isEmailVerified ? 
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