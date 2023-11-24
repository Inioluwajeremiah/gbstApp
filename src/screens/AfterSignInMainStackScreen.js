import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";
import CodeAuthenticationScreen from "./CodeAuthenticationScreen";
import HomeNavScreen from "./HomeNavScreen";
import { GbstContext } from "../GbstContext";
import LoadingScreen from "./LoadingScreen";
import HomeSplashScreen from "./HomeSplashScreen";
import { Alert, StatusBar, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

const AfterSignInMainStackScreen = () => {
  const {
    authStatus,
    GetDoc,
    localUserId,
    userId,
    loadingAuth,
    userloginStatus,
  } = useContext(GbstContext);
  const [userloginStatusI, setUserLoginStatusI] = useState(false);
  const [loadingAuthI, setLoadingAuthI] = useState(true);

  const getData = async (key) => {
    try {
      setLoadingAuthI(true);
      const value = await AsyncStorage.getItem(key);
      if (!value || value !== "true" || value == null) {
        setUserLoginStatusI(false);
        // return false
        setLoadingAuthI(false);
      }
      if (value == "true") {
        setUserLoginStatusI(true);
        // return true
        setLoadingAuthI(false);
      }
      setLoadingAuthI(false);
    } catch (e) {
      Alert.alert("Error", `${e.message}`);
      setLoadingAuthI(false);
    }
  };

  useEffect(() => {
    getData("gbstaiapp_login");
  }, []);

  // const userloginStatusI = getData('gbstaiapp_login')

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} style={{ flex: 1 }}>
        
      {loadingAuthI ? (
        <Stack.Screen
          name="loading"
          options={{
            headerShown: false,
            // headerStatusBarHeight: StatusBar.currentHeight,
            // headerStatusBarColor: "#c026d3",
          }}
          component={LoadingScreen}
          initialParams={{ title: "Signing in..." }}
        />
      ) : (
        <Stack.Screen
          name="HomeNav"
          options={{
            headerShown: false,
            // headerStatusBarHeight: StatusBar.currentHeight,
            // headerStatusBarColor: "#c026d3",
          }}
          component={HomeNavScreen}
        />
      )}
    </Stack.Navigator>
  );
};

export default AfterSignInMainStackScreen;
