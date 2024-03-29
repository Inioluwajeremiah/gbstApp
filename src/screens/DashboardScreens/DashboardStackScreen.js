import 'react-native-gesture-handler';
import React from 'react'
import { DrawerActions, NavigationContainer, useRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen'
import MedicalHistoryScreen from './MedicalHistoryScreen';
import ClinicalInformationScreen from './ClinicalInformationScreen';
import ObstetricInformationScreen from './ObstetricInformationScreen';
import ChildbirthOutcomeScreen from './ChildbirthOutcomeScreen';
import DietScreen from './DietScreen';
import ExerciseScreen from './ExerciseScreen';
import BloodSugarTestScreen from './BloodSugarTestScreen';
import FKCScreen from './FKCScreen';
import {TouchableOpacity } from 'react-native';
import DashboardScreen from '../DrawerScreens/DashboardScreen';
import { Path, Svg } from 'react-native-svg';
import CustomTextBold from '../../components/CustomTextBold';
import SupportScreen from '../DrawerScreens/SupportScreen';
import AboutScreen from '../DrawerScreens/AboutScreen';
import NotificationScreen from '../DrawerScreens/NotificationScreen';

const Stack = createNativeStackNavigator();

const DashboardStackScreen = ({navigation, route}) => {

    const CustomHeaderLeft = (color) => {
        return(
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{width:40, height:40, padding:10, justifyContent:'center', alignItems:'center'}}>
                <Svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M3.3125 7.68754L11 1.70837L18.6875 7.68754V17.0834C18.6875 17.5365 18.5075 17.971 18.1871 18.2913C17.8668 18.6117 17.4322 18.7917 16.9792 18.7917H5.02083C4.56776 18.7917 4.13323 18.6117 3.81286 18.2913C3.49248 17.971 3.3125 17.5365 3.3125 17.0834V7.68754Z" stroke={`${color}`} strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M8.4375 18.7917V10.25H13.5625V18.7917" stroke={`${color}`} strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
            </TouchableOpacity>
        )
    } 

    const CustomHeaderRight = (bg_color) => {
        return (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={{width:40, height:40, borderRadius:12, padding:10, marginRight:10, justifyContent:'center', alignItems:'center', backgroundColor:`${bg_color}`}}>
                <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M0.6875 3.87835H11.1549C11.4704 5.31433 12.7527 6.39237 14.2821 6.39237C15.8114 6.39237 17.0938 5.31437 17.4093 3.87835H21.3125C21.6922 3.87835 22 3.57052 22 3.19085C22 2.81118 21.6922 2.50335 21.3125 2.50335H17.4089C17.0928 1.06811 15.8087 -0.0106201 14.2821 -0.0106201C12.7546 -0.0106201 11.4711 1.06794 11.1552 2.50335H0.6875C0.307828 2.50335 0 2.81118 0 3.19085C0 3.57052 0.307828 3.87835 0.6875 3.87835V3.87835ZM12.4557 3.19266C12.4557 3.19021 12.4557 3.18772 12.4557 3.18527C12.4587 2.18122 13.278 1.36442 14.2821 1.36442C15.2848 1.36442 16.1041 2.1801 16.1084 3.18368L16.1086 3.19377C16.107 4.19954 15.2882 5.01741 14.2821 5.01741C13.2764 5.01741 12.4579 4.20036 12.4556 3.19519L12.4557 3.19266ZM21.3125 18.1217H17.4089C17.0928 16.6865 15.8087 15.6077 14.2821 15.6077C12.7546 15.6077 11.4711 16.6863 11.1552 18.1217H0.6875C0.307828 18.1217 0 18.4295 0 18.8092C0 19.1889 0.307828 19.4967 0.6875 19.4967H11.1549C11.4704 20.9326 12.7527 22.0107 14.2821 22.0107C15.8114 22.0107 17.0938 20.9326 17.4093 19.4967H21.3125C21.6922 19.4967 22 19.1889 22 18.8092C22 18.4295 21.6922 18.1217 21.3125 18.1217V18.1217ZM14.2821 20.6357C13.2764 20.6357 12.4579 19.8186 12.4556 18.8135L12.4557 18.811C12.4557 18.8085 12.4557 18.806 12.4557 18.8036C12.4587 17.7995 13.278 16.9827 14.2821 16.9827C15.2848 16.9827 16.1041 17.7984 16.1084 18.8019L16.1086 18.812C16.1071 19.8179 15.2883 20.6357 14.2821 20.6357V20.6357ZM21.3125 10.3125H10.8451C10.5296 8.87656 9.24726 7.79856 7.71792 7.79856C6.18857 7.79856 4.90621 8.87656 4.59074 10.3125H0.6875C0.307828 10.3125 0 10.6204 0 11C0 11.3798 0.307828 11.6875 0.6875 11.6875H4.59108C4.9072 13.1227 6.19128 14.2015 7.71792 14.2015C9.24537 14.2015 10.5289 13.1229 10.8448 11.6875H21.3125C21.6922 11.6875 22 11.3798 22 11C22 10.6204 21.6922 10.3125 21.3125 10.3125ZM9.54435 10.9982C9.54435 11.0007 9.5443 11.0032 9.5443 11.0056C9.5413 12.0097 8.72201 12.8265 7.71792 12.8265C6.71524 12.8265 5.89591 12.0108 5.89157 11.0073L5.89145 10.9972C5.89295 9.9913 6.71172 9.17356 7.71792 9.17356C8.72364 9.17356 9.54211 9.99057 9.54439 10.9958L9.54435 10.9982Z" fill="#F4F6F5"/>
                </Svg>
            </TouchableOpacity>
        )
    }

    const CustomHeaderTitle = (title, text_color) => {
        return (
            <CustomTextBold style={{fontSize:26, color:`${text_color}`, marginVertical:20}}>{title}</CustomTextBold>
        )
    }

    const CustomNotificationIcon = () => {
        return (
            <Svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M13 29C15.0498 29 16.7125 27.3772 16.7125 25.375H9.28747C9.28747 27.3772 10.9502 29 13 29ZM25.5003 20.5203C24.379 19.3445 22.281 17.5756 22.281 11.7812C22.281 7.38027 19.1193 3.85723 14.856 2.99289V1.8125C14.856 0.81166 14.0249 0 13 0C11.9751 0 11.144 0.81166 11.144 1.8125V2.99289C6.88073 3.85723 3.71896 7.38027 3.71896 11.7812C3.71896 17.5756 1.62097 19.3445 0.499726 20.5203C0.151513 20.8857 -0.00286165 21.3224 4.01251e-05 21.75C0.00642403 22.6789 0.753341 23.5625 1.86298 23.5625H24.137C25.2467 23.5625 25.9942 22.6789 26 21.75C26.0029 21.3224 25.8485 20.8851 25.5003 20.5203Z" fill="#66CA98"/>
            </Svg>

        )
    }
    
    return(
    
        <Stack.Navigator
            screenOptions={{
                headerShown: true, 
                headerTransparent: true,
                headerBackVisible: false,
                headerStyle: {backgroundColor:"#f5f5f5"}
            }} 
            style={{flex: 1}}>

        <Stack.Screen 
            name="Home"
            options={{
                headerShown: true,
                headerStyle: {backgroundColor:"#f5f5f5"}, 
                // headerLeft: () => CustomHeaderLeft(),
                headerRight: () => CustomHeaderRight('#66CA98'), 
                headerTitle: () => CustomHeaderTitle('Home',"#000")
            }}
            component={DashboardScreen} 
        /> 
        <Stack.Screen 
            name="Profile"
            options={{
                headerShown: true,
                headerStyle: {backgroundColor:"#f5f5f5"}, 
                headerLeft: () => CustomHeaderLeft(),
                headerRight: () => CustomHeaderRight(), 
                headerTitle: () => CustomHeaderTitle('Profile', "#000")
            }}
            component={ProfileScreen} 
        />
        <Stack.Screen
            name="Medical" 
            options={{
                headerShown: false,
            }}
            component={MedicalHistoryScreen} />
            
            <Stack.Screen
            name="Clinical"
            options={{
                headerShown: false,
            }}
            component={ClinicalInformationScreen} />
        <Stack.Screen
            name="Obstetric" 
            options={{
                headerShown: false,
            }}
            component={ObstetricInformationScreen} />
        
        <Stack.Screen
            name="Childbirth" 
            options={{
                headerShown: false,
            }}
            component={ChildbirthOutcomeScreen} 
        />
        <Stack.Screen
            name="Diet" 
            options={{
                headerShown: true,
                headerLeft: () => CustomHeaderLeft('#F6C25D'),
                headerRight: () => CustomHeaderRight('#F6C25D'), 
                headerTitle: () => CustomHeaderTitle('Diet', '#F6C25D')
            }}
            component={DietScreen} 
        />
        
        <Stack.Screen
            name="Exercise" 
            options={{
                headerShown: true,
                headerLeft: () => CustomHeaderLeft('#66CA98'),
                headerRight: () => CustomHeaderRight('#66CA98'), 
                headerTitle: () => CustomHeaderTitle('Exercise','#66CA98')
            }}
            component={ExerciseScreen} 
        />
        <Stack.Screen
            name="BloodSugarTest" 
            options={{
                headerShown: true,
                headerLeft: () => CustomHeaderLeft('#6295E2'),
                headerRight: () => CustomHeaderRight('#6295E2'), 
                headerTitle: () => CustomHeaderTitle('Blood Sugar Test', '#6295E2')
            }}
            component={BloodSugarTestScreen} 
        />
        <Stack.Screen
            name="FKC" 
            options={{
                headerShown: true,
                headerLeft: () => CustomHeaderLeft('#6295E2'),
                headerRight: () => CustomHeaderRight('#6295E2'), 
                headerTitle: () => CustomHeaderTitle('Fetal Kick Count', '#6295E2')
            }}
            component={FKCScreen} 
        />
         <Stack.Screen
            name="Notification" 
            options={{
                headerShown: true,
                headerLeft: () =>  CustomHeaderLeft('#66CA98'),
                headerRight: () => CustomHeaderRight('#66CA98'),
                // CustomNotificationIcon(), 
                headerTitle: () => CustomHeaderTitle('Notification', '#66CA98')
            }}
            component={NotificationScreen} 
        />
        <Stack.Screen
            name="Support" 
            options={{
                headerShown: true,
                headerLeft: () => CustomHeaderLeft('#66CA98'),
                headerRight: () => CustomHeaderRight('#66CA98'), 
                headerTitle: () => CustomHeaderTitle('Support', '#66CA98')
            }}
            component={SupportScreen} 
        />
        <Stack.Screen
            name="About" 
            options={{
                headerShown: true,
                headerLeft: () =>  CustomHeaderLeft('#66CA98'),
                headerRight: () => CustomHeaderRight('#66CA98'), 
                headerTitle: () => CustomHeaderTitle('About', '#66CA98')
            }}
            component={AboutScreen} 
        />

        </Stack.Navigator>
    )
}

export default DashboardStackScreen