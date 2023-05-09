
import 'react-native-gesture-handler';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../DrawerScreens/AboutScreen';
import SupportScreen from '../DrawerScreens/SupportScreen';
import { CustomHeaderRight, CustomHeaderTitle } from '../../components/Header';

const Stack = createNativeStackNavigator();

const SecondaryStackScreens = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: true, 
            headerTransparent: true,
            headerBackVisible: false,
            headerStyle: {backgroundColor:"#f5f5f5"}
        }} 
        style={{flex: 1}}>

        {/* <Stack.Screen
            name="About" 
            options={{
                headerShown: true,
                headerLeft: () => null,
                headerRight: () => CustomHeaderRight('#66CA98'), 
                headerTitle: () => CustomHeaderTitle('About', '#66CA98')
            }}
            component={AboutScreen} 
        />
        <Stack.Screen
            name="Support" 
            options={{
                headerShown: true,
                headerLeft: () => null,
                headerRight: () => CustomHeaderRight('#66CA98'), 
                headerTitle: () => CustomHeaderTitle('Support', '#66CA98')
            }}
            component={SupportScreen} 
        /> */}
    </Stack.Navigator>
  )
}

export default SecondaryStackScreens