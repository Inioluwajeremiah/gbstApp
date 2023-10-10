import React, { useContext, useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { windowWidth } from '../../Dimensions';
import LongButton from '../../components/LongButton';
import { Circle, ClipPath, Defs, G, Mask, Path, Rect, Svg } from 'react-native-svg';
import CustomTextBold from '../../components/CustomTextBold';
import CustomTextRegular from '../../components/CustomTextRegular';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import profileImg from '../../../assets/tennis.png'
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { GbstContext } from '../../GbstContext';
import { isValidPassword, storeData } from '../../helperfunctions';
import PasswordFIeld from '../../components/PasswordFIeld';
import FormTextField from '../../components/FormTextField';
import Button from '../../components/Button';

const ProfileScreen = () => {

  const {userId, auth, setDoc, userObject, profileImageUri, getStorage, ref, 
    getDownloadURL, uploadBytes, updateProfile,  uploadBytesResumable
  } = useContext(GbstContext)

  const uri_img = "https://firebasestorage.googleapis.com/v0/b/gbst-cc5c3.appspot.com/o/profileImage?alt=media&token=ef9dd673-83cb-4eae-a08f-fb970f3e1d4c"

  const [progress, setProgress] = useState(89);
  const [imageUri, setImageUri] = useState(null);
  const [message, setMessage] = useState('');
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [loadingImageUpload, setLoadingImageUpload] = useState(false)
  const [showPasswordView, setShowPasswordView] = useState(false)
  const [loadingChangePassword, setLoadingChangePassword] = useState(false)

  const resultIndicator = [{id:1, color:"#76D4A5", label:"Green is normal"},{id:2, color:"#F6C25D", label:"Orange is prediabetes"},{id:3, color:"#FF6C52", label:"Red is diabetes"},]

   // handle select image
   const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      const uploadUrl = await uploadImageAsync(result.assets[0].uri);
      Alert.alert("", uploadUrl)
      console.log('uploadUrl => ', uploadUrl);
      
      fetch("http://gbstaiapp.pythonanywhere.com/profile/save_profile_picture_uri", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({image_uri:uploadUrl})
    }).then(resp => resp.json()).then(result => {
      Alert.alert("", result.message)
      storeData("gbstaiapp_profile_img_uri", uploadUrl)
      setLoadingImageUpload(false)
    }).catch(error => {
      Alert.alert("", error.message)    
      setLoadingImageUpload(false)
    })
      // uploadImage(result.assets[0].uri)
      // uploadImage(result.assets[0])
      
  };
}

  // handle update image using flask
  const uploadImage = (imageData) => {
    setLoadingImageUpload(true)

    const filename = imageData.uri.split('/').pop()
    const filetype = filename.split('.').pop()

    let formData = new FormData();
    formData.append('file', 
      {
        uri: imageData.uri,
        name: `image.${filetype}`,
        type: `image/${filetype}`
      }
      // imageData, imageData.fileName
    );

    fetch("http://gbstaiapp.pythonanywhere.com/profile/upload_picture", {
      method: "POST", 
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData
    }).then(resp => resp.json()).then(result => {
      Alert.alert("", result.message)
      storeData("gbstaiapp_profile_img_uri", result.uri)
      setLoadingImageUpload(false)
    }).catch(error => {
      Alert.alert("", error.message)
      // JSON.stringify(imageData))
      // + " " + imageData.type)
      // + " " + result.local_path + " " + result.uri
      //  + ", filename => " + imageData.uri.split('/').pop() + ", type => " + imageData.type
      
      setLoadingImageUpload(false)
    })
  }

  /* handle upload image using firebase storage
    firebase storage is better as only firebase
    config is required. User doesn't need to authenticate
    with firebase auth before they can upload images
  */
  async function uploadImageAsync(uri) {

    setLoadingImageUpload(true)
      
    const response = await fetch(uri);
    const blob = await response.blob()
  
    const fileRef = ref(getStorage(), "profileImage/" +  userId);
    const result = await uploadBytes(fileRef, blob);
  
    // We're done with the blob, close and release it
    // blob.close();
  
    return await getDownloadURL(fileRef);
  }


  const ToggleChangePasswordView = ()  => {
    setShowPasswordView(!showPasswordView)
  }

  // handle change password
  const ChangePassword = () => {
    if (!oldPassword) {
      Alert.alert("", "Old password field cannot be empty")
    } else if (!isValidPassword(newPassword)){
      Alert.alert("", "Password too weak, Password must contain an uppercase, a special character and must be minimum of 8 characters")
    } else if(newPassword !== confirmNewPassword) {
      Alert.alert("", "New password does not match")
    }else {
      setLoadingChangePassword(true)
      fetch('http://gbstaiapp.pythonanywhere.com/profilechange_password', {
        method: "POST",
        headers: {
          "COntent-Type": "application/json"
        },
        body: JSON.stringify({
          oldPassword: oldPassword,
          newPassword: newPassword
        })
      }).then(response => response.json()).then(result => {
          Alert.alert("", result.message)
          setLoadingChangePassword(false)
        }).catch(error => {
          Alert.alert("", error.message)
          setLoadingChangePassword(false)
      })
    }
  }

    // update username
    const UpdateProfile = async (fieldname, objectProp) => {
      let firestoreObject = {}
      firestoreObject[objectProp] = fieldname;
       fieldname ? Alert.alert("Update Profile!", `Update ${fieldname}?`,
       [
         {
           Text: "Cancel",
           onPress: () => null
         },
         {
           text: "Update",
           onPress: () => updateProfile(auth.currentUser, firestoreObject).then(() => {
             Alert.alert("Update profile", 'Profile update successfull', 
             [
               {
                 text: "OK",
                 onPress: () => null
               }
             ], {cancelable:false})
           }).catch((error) => {
             // An error occurred
             // ...
             Alert.alert("Update Profile Error", `error  ${error.message}`)
           }) 
         }
       ],
       {cancelable: true}
       ) //ends alerty dialog
       :  Alert.alert("Update Prolfile Error!", "Nothing to update")

      } // ends update username
  
  return (
      <ScrollView style={{flex:1, backgroundColor:"#f5f5f5"}}>
        {/* profile image */}
        <View style={{width:"100%",  justifyContent:'center', alignItems:'center', marginTop:0}}>
          <View style={{width: windowWidth/2.5, height:windowWidth/2.5,  borderRadius:windowWidth/2.5, justifyContent:'center', alignItems:'center', backgroundColor:"#ddd", marginBottom:60, marginTop:20, backgroundColor: "#ddd"}}>
         
            {
               profileImageUri ? 
                <Image source={{uri: profileImageUri}} 
                  style={{width: windowWidth/2.5, height:windowWidth/2.5, borderRadius:windowWidth/2.5}} 
                />
              : 
                <Image source={profileImg} />
            } 

            
          </View>
        </View>
        
          {/* result card */}
        <View style={{borderRadius:20, maxWidth:"100%", flexDirection:'row', justifyContent:'space-between', padding:16, backgroundColor:"#6295E2", marginHorizontal:16, marginBottom:30}}>
          {/* display result */}
          <View>
            <AnimatedCircularProgress
              size={windowWidth/2.5}
              width={10}
              fill={progress}
              tintColor="#F6C25D"
              backgroundColor="#fff"
              rotation={0}
              lineCap="round"
              arcSweepAngle={360}
            />
          </View>

            {/* display legend and text box */}
          <View style={{paddingHorizontal:10}}>
                {/* display legend */}
            <View >
              {
                  resultIndicator.map((item, index) => 
                  <View key={index} style={{flexDirection:'row', marginBottom:20, alignItems:'center'}}>
                    <View style={{width:20,height:18,backgroundColor:`${item.color}`, marginRight:5}}></View>
                    <CustomTextRegular style={{color:"#fff", fontSize:8, textAlign:"center", overflow:"hidden"}}>{item.label}</CustomTextRegular>
                  </View>
                  )
                }
            </View>
          </View>

        </View>

         

        <LongButton 
          on_press={ToggleChangePasswordView}
          text={"Change Password"}
        />
        {
          showPasswordView ?
          <View style={styles.container2}>

            <FormTextField 
                place_holder = "Old password"
                place_holder_text_color ="#7C7C7C"
                onChangeText={(e) => setOldPassword(e)}
              />

            <FormTextField 
              place_holder = "New password"
              place_holder_text_color ="#7C7C7C"
              onChangeText={(e) => setNewPassword(e)}
            />
            <FormTextField 
              place_holder = "Confirm new password"
              place_holder_text_color ="#7C7C7C"
              onChangeText={(e) => setConfirmNewPassword(e)}
            />

            <Button 
              title='Update' 
              bg_color={"#6295E2"} 
              btn_on_press = {ChangePassword}
              loading ={loadingChangePassword}
              spinner_color={"#fff"}
            />

          </View>
          : null
        }
        <LongButton 
          on_press={pickImage}
          text={"Change Profile Image"}
          loading ={loadingImageUpload}
        />
        
        {/* <LongButton 
          on_press={null}
          text={"Change Email"}
        /> */}

        <View style={{ backgroundColor:'#6295E2', marginHorizontal:16, borderRadius:14, marginVertical:30}}>
            <View style={{padding:10, position:'absolute'}}>
            <CustomTextBold style={{color:"#fff", fontSize:18, marginBottom:10}}>Blood test</CustomTextBold>
            <CustomTextRegular style={{color:"#fff", fontSize:12}}>Your last schedule date</CustomTextRegular>
            <View style={{flexDirection:'row', alignItems:'flex-start'}}>
              <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G clip-path="url(#clip0_9_740)">
                <Path d="M11.375 3.1875H2.625C1.90013 3.1875 1.3125 3.77513 1.3125 4.5V12.375C1.3125 13.0999 1.90013 13.6875 2.625 13.6875H11.375C12.0999 13.6875 12.6875 13.0999 12.6875 12.375V4.5C12.6875 3.77513 12.0999 3.1875 11.375 3.1875Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>
                <Path d="M3.5 1.5V3.1875M10.5 1.5V3.1875M12.6875 6.65H1.3125" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </G>
                <Defs>
                <ClipPath id="clip0_9_740">
                <Rect width="14" height="15" fill="white"/>
                </ClipPath>
                </Defs>
              </Svg>
              <CustomTextRegular style={{marginLeft:5, color:"#fff"}}>23 Mar</CustomTextRegular>

            </View>
            <CustomTextRegular></CustomTextRegular>
            </View>
        
            <Svg width="100%" height="100" viewBox="0 0 362 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Mask id="mask0_131_604" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="662" height="100">
              <Path d="M0 14C0 6.26801 6.26801 0 14 0H348C355.732 0 362 6.26801 362 14V86C362 93.732 355.732 100 348 100H14C6.26802 100 0 93.732 0 86V14Z" fill="#F6C25D"/>
              </Mask>
              <G Mask="url(#mask0_131_604)">
              <Path fillRule="evenodd" clipRule="evenodd" d="M305.84 -27C313.333 -27 319.408 -20.9634 319.408 -13.517L319.408 8.9547C319.408 33.7762 299.159 53.8981 274.181 53.8981L251.568 53.8981C244.075 53.8981 238 47.8615 238 40.4151C238 32.9686 244.075 26.932 251.568 26.932L274.181 26.932C284.172 26.932 292.272 18.8833 292.272 8.9547L292.272 -13.517C292.272 -20.9634 298.346 -27 305.84 -27Z" fill="#F4F6F5" fillOpacity="0.15"/>
              <Path fillRule="evenodd" clipRule="evenodd" d="M314.431 117.271C306.937 117.271 300.863 111.234 300.863 103.788L300.863 81.3163C300.863 56.4948 321.111 36.3729 346.089 36.3729L368.703 36.3729C376.196 36.3729 382.271 42.4095 382.271 49.8559C382.271 57.3024 376.196 63.339 368.703 63.339L346.089 63.339C336.098 63.3389 327.999 71.3877 327.999 81.3163L327.999 103.788C327.999 111.234 321.924 117.271 314.431 117.271Z" fill="#F4F6F5" fillOpacity="0.15"/>
              <Path d="M301 46.5052C301 54.5104 294.508 61 286.5 61C278.492 61 272 54.5104 272 46.5052C272 38.4999 281.209 28.2887 286.5 23C292.378 28.8763 301 38.4999 301 46.5052Z" fill="#F4F6F5"/>
              <Path d="M289.027 36.8847C288.594 36.1349 288.851 35.1762 289.601 34.7433C290.35 34.3104 291.309 34.5673 291.742 35.3171L296.445 43.4624C296.878 44.2122 296.621 45.1709 295.871 45.6037C295.121 46.0366 294.163 45.7797 293.73 45.03L289.027 36.8847Z" fill="#6295E2"/>
              <Circle cx="287.5" cy="31.5" r="1.5" fill="#6295E2"/>
              <Path d="M265 68.7789C265 73.4716 261.194 77.2759 256.5 77.2759C251.806 77.2759 248 73.4716 248 68.7789C248 64.0861 253.399 58.1002 256.5 55C259.946 58.4447 265 64.0861 265 68.7789Z" fill="#F4F6F5"/>
              <Path d="M257.981 63.1394C257.728 62.6999 257.878 62.1379 258.318 61.8841C258.757 61.6304 259.319 61.7809 259.573 62.2205L262.33 66.9953C262.583 67.4348 262.433 67.9968 261.993 68.2506C261.554 68.5043 260.992 68.3537 260.738 67.9142L257.981 63.1394Z" fill="#6295E2"/>
              <Circle cx="257.086" cy="59.9828" r="0.87931" fill="#6295E2"/>
              <Path d="M325 68.7789C325 73.4716 321.194 77.2759 316.5 77.2759C311.806 77.2759 308 73.4716 308 68.7789C308 64.0861 313.399 58.1002 316.5 55C319.946 58.4447 325 64.0861 325 68.7789Z" fill="#F4F6F5"/>
              <Path d="M317.981 63.1394C317.728 62.6999 317.878 62.1379 318.318 61.8841C318.757 61.6304 319.319 61.7809 319.573 62.2205L322.33 66.9953C322.583 67.4348 322.433 67.9968 321.993 68.2506C321.554 68.5043 320.992 68.3537 320.738 67.9142L317.981 63.1394Z" fill="#6295E2"/>
              <Circle cx="317.086" cy="59.9828" r="0.87931" fill="#6295E2"/>
              </G>
            </Svg>

        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container2: {
   backgroundColor: 'white',
   position: "relative",
   borderRadius: 8,
   padding: 16,
   marginBottom: 16,
   marginHorizontal:16,
   shadowColor: '#000',
   shadowOpacity: 0.2,
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowRadius: 2,
   elevation: 2
 },
 })

export default ProfileScreen