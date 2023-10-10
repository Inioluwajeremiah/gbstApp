import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"

export   const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    //   Alert.alert("", "Image saved")
    } catch (e) {
    //   Alert.alert("", `${e.message}`)
    } 
}


   // validate email
   export const isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  export const isValidPassword = (password) => {
    // Define your password validation criteria
    const minLength = 8;
    const containsUppercase = /[A-Z]/.test(password);
    const containsLowercase = /[a-z]/.test(password);
    const containsDigit = /[0-9]/.test(password);
    const containsSpecial = /[!@#$%^&*()_+\-=\[\]{}|;:',.<>?~]/.test(password);
  
    return (
      password.length >= minLength &&
      containsUppercase &&
      containsLowercase &&
      containsDigit && containsSpecial
    );
  }