import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, Text, View, FlatList, StyleSheet, StatusBar, Alert, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { io } from "socket.io-client";
import { status_bar_height } from '../../Dimensions';
import { GbstContext } from '../../GbstContext';
import Button from '../../components/Button';

const NotificationScreen = () => {

  const {retrievedEmail} = useContext(GbstContext)

  const [data, setData]= useState([])
  const [selectedId, setSelectedId] = useState();
  const [loadingNotification, setLoadingNotification] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const [clearAllLoading, setClearAllNotficationsLoading] = useState(false)

  const getData = async (key) => {    
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
          setData(JSON.parse(value))
        } 
    } catch(e) {
    Alert.alert("Error", `${e.message}`)
    }
  }
  
  const SendNotification = () => {
    setLoadingNotification(true)
    // http://127.0.0.1:5000
    fetch('http://gbstaiapp.pythonanywhere.com/notification/', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res => res.json()).then(result => {
      Alert.alert("", result.message)
      setLoadingNotification(false)
    }).catch(err => {
      Alert.alert("", err.message)
      setLoadingNotification(false)
    })
  }

  const retrieveNotification = () => {
    fetch("http://gbstaiapp.pythonanywhere.com/notification/", {
      method: "GET", 
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(result => {
      
      // Alert.alert("", result.message)
      setData(result.data)
    }).catch(error => {
      // Alert.alert("", error.message)
    })
  }

  const ClearAllNotifications = () => {
    setClearAllNotficationsLoading(true)
    fetch("http://gbstaiapp.pythonanywhere.com/notification/", {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(result => {
      setClearAllNotficationsLoading(false)
      Alert.alert("", result.message)
    }).catch(error => {
      setClearAllNotficationsLoading(false)
      Alert.alert("", error.message)
    })
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      retrieveNotification()
      setRefreshing(false);
    }, 2000);
  }, []);


  useEffect(() => {
    retrieveNotification()   
  }, [])


  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.notification.trim()}</Text>
      <Text style={[styles.title, {color: textColor}]}>{item.date}</Text>

    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : 'rgba(102, 202, 152, 0.8)';
    const color = item.id === selectedId ? 'white' : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

    return (
      <SafeAreaView style={styles.container}>
          {
            retrievedEmail == "adewarainioluwa@gmail.com" ?
            <View style={{marginTop: status_bar_height + 10}}>
                <Button 
                  title='Send Notification' 
                  bg_color={"#66CA98"} 
                  btn_on_press = {SendNotification}
                  loading ={loadingNotification}
                />
            </View>
            : null
          }
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
            refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
          <Button title ="Clear all" bg_color ="rgba(102, 202, 152, 0.8)" 
            btn_on_press={ClearAllNotifications} loading={clearAllLoading} spinner_color="#fff"
          />
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 20
    },
    title: {
      fontSize: 14,
    },
  });

export default NotificationScreen