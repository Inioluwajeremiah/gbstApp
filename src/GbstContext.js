import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged,updateProfile, createUserWithEmailAndPassword, 
  sendEmailVerification, signInWithEmailAndPassword,  setPersistence, browserLocalPersistence, 
  updatePassword, sendPasswordResetEmail } from "firebase/auth";
// import firebase module
import { getFirestore, collection, getDocs, setDoc, getDoc, doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { Email } from '../smtp';
// import { app } from '../firebaseConfig';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmdd3Q71pKl9BX1nzZOGWF13lW2sEYIXI",
  authDomain: "gbst-cc5c3.firebaseapp.com",
  databaseURL: "https://gbst-cc5c3-default-rtdb.firebaseio.com",
  projectId: "gbst-cc5c3",
  storageBucket: "gbst-cc5c3.appspot.com",
  messagingSenderId: "714256073926",
  appId: "1:714256073926:web:f0dbf31cbb86feb61b43c7",
  measurementId: "G-074T32HSKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// import { useNavigation } from '@react-navigation/native';


// initialize firebase auth
const auth = getAuth(app);
const firestoreDB = getFirestore(app);
const fireStorage = getStorage(app); // getStorage was used instead


export const GbstContext = React.createContext()

const GbstContextProvider = ({children}) => {

  // const navigation = useNavigation();
  const [userObject, setUserObject] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true)
  const [userId, setUserId] = useState('');
  const [saveDocLoading, setSaveDocLoading] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false)
  const [authenticationCode, setAuthCode] = useState(0);
  const [authStatus, setAuthStatus] = useState(false)
  const [localUserId, setLocalUserId] = useState('');
  const [userloginStatus, setUserLoginStatus] = useState(false)

  const [saveDocToFirebaseLoading, setSaveDocToFirebaseLoading] = useState(false)

  let user_id = ''

  /* set doc to firestore  
    use path1 as general path (e.g. name of screen), path2 is userId
  */

    useEffect(() => {
      // authorize user
      const unsubscribe = 
      onAuthStateChanged(auth, (user) => {
        console.log(user, "user");
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log('auth user => ', user);
            user_id = uid;
            setUserId(uid);
            setUserObject(user)
            setLoadingAuth(false)
        } else {
          Alert.alert("", )
          setLoadingAuth(false)
        }
      })

      // getData('userId');
      // getData('userLogIn')
      getData('gbstaiapp_login')
      
      return () => unsubscribe();
    
  }, [onAuthStateChanged])  // ends useEffect
  
  const SaveDoc = (path1, path2, object) => {
    setSaveDocLoading(true)
    try {
      const userRef = collection(firestoreDB, path1);
      setDoc(doc(userRef, path2), object);
      setSaveDocLoading(false);
    } catch (error) {
      const error_to_string = error.toString();
      const error_message = error_to_string.split(':')
       Alert.alert("Error", error)
      // Alert.alert("Error", `${user_id} ${error_message[2]}`)
      // Alert.alert("Error", error_to_string)
      setSaveDocLoading(false);
    }
}



  // retrieve saved docs in firebase
  const GetDoc = async (path1) => {
    let user_status = false
    const docRef = doc(firestoreDB, path1, localUserId)
        const code_docs = await getDoc(docRef)
        
        if(code_docs.exists()) {
          const data = code_docs.data();
          user_status = data.auth_status
          setAuthStatus(user_status)

          // Alert.alert(`${user_status}`)
        } 
    return user_status
  } // end GetDOcs

  // save userId to local storage
  const storeData = async (key, value) => {
      try {
        await AsyncStorage.setItem(key, value)
        Alert.alert("Data saved")
      } catch (e) {
        Alert.alert("Error", `${e.message}`)
      } 
  }

  // retrieve userId from local storage
  // const getData = async (key) => {
  //   try {
  //     const value = await AsyncStorage.getItem(key)
  //     if (value === "loggedIn") {
  //       setUserLoginStatus(true)
  //     }
  //     if(value !== "loggedIn" && value !== null) {
  //       setLocalUserId(value)
  //       console.log("local usier id context", value);
  //     }
  //   } catch(e) {
  //     Alert.alert("Error", `${e.message}`)
  //   }
  // }

  const getData = async (key) => {
        
    try {
        setLoadingAuth(true)
        const value = await AsyncStorage.getItem(key)
        if (!value || value !== 'true' || value == null) {
            setUserLoginStatus(false)
            setLoadingAuth(false)
        } 
        if (value == 'true') {
            setUserLoginStatus(true)
            setLoadingAuth(false)
        }
        setLoadingAuth(false)
    } catch(e) {
    Alert.alert("Error", `${e.message}`)
    setLoadingAuth(false)
    }
}   

  // send verification code
  const SendCode = (email) => {
    const auth_code = [];
     for (let i = 0; i < 4; i++) {
       const random_digit = Math.floor(Math.random() * 100) + 1;
       auth_code.push(random_digit);
     }
     setAuthCode(auth_code)
      // send auth code to email
      Email.send({
        SecureToken : "ff381537-8817-43cc-a7b3-2da0dc4b5d0d",
        //  process.env.Api_Key,
        // 
        // process.env.REACT_Api_Key,
        To: email,
        From: "gbstaiapp@gmail.com",
        Subject: "Gbst Authentication Code",
        Body: `<div>
                  <p>GBST</p>
                  <p>gbstaiapp@gmail.com</p>
                  <p>${auth_code.join(' ')}</p>
                </div>`,
      // `${auth_code.join(' ')}`,
      }).then(
        message => {if (message == "OK") {
          Alert.alert("User Authentication", "Authentication code sent to your email")
        } else {
          Alert.alert(message)
        }}
      );
  }

  // sign up user
  const CreateUser = async(email, password, checked, fullName) => {

    setButtonSpinner(true)
      // clean email
      const clean_email = email.replace(/[.@]/g, "");

      // create user with email and password and redirect user to auth screen
      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const userId = user.uid;
        setUserId(userId)
        setUserObject(user)
        
        if (userId) {
           // send code
          //  SendCode(email)

          const auth_code = [];
          for (let i = 0; i < 4; i++) {
            const random_digit = Math.floor(Math.random() * 100) + 1;
            auth_code.push(random_digit);
          }
          setAuthCode(auth_code)
           // send auth code to email
           Email.send({
             SecureToken : "ff381537-8817-43cc-a7b3-2da0dc4b5d0d",
             //  process.env.Api_Key,
             // 
             // process.env.REACT_Api_Key,
             To: email,
             From: "gbstaiapp@gmail.com",
             Subject: "Gbst Authentication Code",
             Body: `<div>
                       <p>GBST</p>
                       <p>gbstaiapp@gmail.com</p>
                       <p>${auth_code.join(' ')}</p>
                     </div>`,
           // `${auth_code.join(' ')}`,
           }).then(
             message => {if (message == "OK") {
               Alert.alert("User Authentication", "Authentication code sent to your email")
             } else {
               Alert.alert(message)
             }}
           ) //send email

          //create user => save code in firestore using authCodes and clean_email 
          const userRef = collection(firestoreDB, "authCodes");
          setDoc(doc(userRef, clean_email), {
            'email': email,
            "auth_code": auth_code.join(' '),
            "full_name": fullName,
            "pass_word": password,
            "privacy_policy": checked,
          });
  
          // save auth code in local storage
          storeData('userId', clean_email)
          
          setButtonSpinner(false)
          Alert.alert("User Authentication", "Sign up Successful!")
        }

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        //   // resend code
          const ResendCode = async() => {
          SendCode(email)
          if (userId) {
              // save code in firestore
            const userRef = collection(firestoreDB, "authCodes");
            setDoc(doc(userRef, userId ), {
              
              "auth_code": authenticationCode.join(' '),
            });
            setButtonSpinner(false)
          } else {
            setButtonSpinner(false)
            Alert.alert("Error!", "User does not exist, kindly sign up to continue")
          }
        } // ends resend code

        if (errorCode == "auth/email-already-exists" || errorCode == "auth/email-already-in-use") {
            // error alert 
            setButtonSpinner(false)
          Alert.alert("User Already Exists!", `Resend verification link to ${email}`,
          // {errorCode}\n${errorMessage}`
          [
            {
              text: "Cancel",
              onPress: () =>null
            },
            {
              text: "Resend",
              onPress:  () => ResendCode()
            }
          ],
          {cancelable: false}
          ) // ends ALert dialog box
        } 
        else {
          setButtonSpinner(false)
          Alert.alert("User Authentication",`${errorCode}\n${errorMessage}`)

        }
      });
    } //ends else

    // authenticate user
    const AuthenticateUser = async(code0, code1, code2, code3, onpress) => {
      
        // if local user get doc from firebase
        if (localUserId) {
          setButtonSpinner(true)
          try {
            const docRef = doc(firestoreDB, "authCodes",  localUserId)
            const code_docs = await getDoc(docRef)
    
            if(code_docs.exists()) {
              const data = code_docs.data();
              const auth_code = data.auth_code.split(' ')
  
              // check code match
              if (code0 == auth_code[0] && code1 == auth_code[1] && code2 == auth_code[2] && code3 == auth_code[3]) {
                  
                // save authentication status in firestore
                const object = {
                  "auth_status": true,  
                }
                  SaveDoc("authenticatedUsers", localUserId, object);
                  Alert.alert("Authentication Successfull",  "Sign in to Continue",
                  [
                    {
                      text: "Cancel",
                      onPress: () => null
                    },
                    {
                      text: "Ok",
                      onPress: onpress
                    }
                  ]
                  )  // ends alert
                  // stopspinner
                  setButtonSpinner(false)
              } else {
                setButtonSpinner(false)
                Alert.alert("Authentication error",  "Code incorrect", [
                  {
                    text: "Cancel",
                    onPress: null
                  },
                  {
                    text: "Ok",
                    onPress: null
                  }
                ])
              } // ends code match 
              } 
          } catch (error) {
            Alert.alert(error.message)
          } //ends catch error
      } else {
        setButtonSpinner(false)
        Alert.alert("Authentication Error!", "User does not exist, sign up to continue")
      }  // ends if local user
    }

    // sign in user
    const SignInUser = (email, password, onpress, onpressSignup) => {

      // set loading spinner true 
      setButtonSpinner(true)

        //   // resend code
        const ResendCode = async() => {
          SendCode(email)
          if (userId) {
              // save code in firestore
            const userRef = collection(firestoreDB, "authCodes");
            setDoc(doc(userRef, userId ), {
              
              "auth_code": authenticationCode.join(' '),
            });
            setButtonSpinner(false)
          } else {
            setButtonSpinner(false)
            Alert.alert("Error!", "User does not exist, kindly sign up to continue")
          }
        } // ends resend code

      // firebase sign in with user email and password
      if (!authStatus) {
        setButtonSpinner(false)
        Alert.alert("Login Error", "User not yet authenticated!", [
          {
            "text": "Cancel",
            onPress: () => null
          },
          {
            "text": "Ok",
            onPress: () => null
          }
        ])
      } else {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        // Signed in 
        const user = userCredential.user;
        setUserId(user.uid)

        setPersistence(auth, browserLocalPersistence);

        setButtonSpinner(false)

        // if sign in successful anvigate to the main stack screen
        Alert.alert("User Login!", "Your login is successfull",
        [
          {
            text: "Cancel",
            onPress: onpress,
            // onPress: () => navigation.navigate('HomeNav')
            
          },
          {
            text: "Ok",
            onPress: ()  => null
            // onPress: () => navigation.navigate('HomeNav')
          }
        ]
        )  //else success alert

        storeData("userLogin", "loggedIn")

        // catch error in firebase ceateuserwithemailAndPassword 
        }).catch((error) => {

        // setShowSpinner(false)
        setButtonSpinner(false)
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode == "auth/email-already-exists" || errorCode == "auth/email-already-in-use") {
            
          // signin => error alert 
          Alert.alert("Sign In Error!", `User Already Exists!, Resend verification link to ${email}`,
          // {errorCode}\n${errorMessage}`
          [
            {
              text: "Cancel",
              onPress: () =>null
            },
            {
              text: "Resend Code",
              onPress:  () => ResendCode()
            }
          ],
          {cancelable: false}
          ) // ends ALert dialog box
        } else if (errorCode == "auth/user-not-found") {
          Alert.alert("Sign In Error!", "User does not exist, kindly sign up to continue", [
            {
              text: "Cancel",
              onPress: () => null
            },
            {
              text: "Ok",
              onPress: onpressSignup
            }
          ])
        }
        else {
          Alert.alert("Sign In Error!",`${errorCode}\n${errorMessage}`)

        }
      });
    }//ends else of authCodeStatus
  }
    
   
  return (
    <GbstContext.Provider 
        value={{
          userId, loadingAuth, userObject, CreateUser,userloginStatus,
          localUserId, getData, SaveDoc, saveDocLoading,
          AuthenticateUser, SignInUser, buttonSpinner, GetDoc, authStatus
        }}
    >
      {children}
  </GbstContext.Provider>
  )
}
export default GbstContextProvider

// spinkit