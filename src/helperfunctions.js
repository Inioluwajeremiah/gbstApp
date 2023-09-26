import AsyncStorage from "@react-native-async-storage/async-storage"

export   const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
      Alert.alert("Data saved")
    } catch (e) {
      Alert.alert("Error", `${e.message}`)
    } 
}