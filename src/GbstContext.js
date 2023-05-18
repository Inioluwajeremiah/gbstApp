import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged,updateProfile, createUserWithEmailAndPassword, sendEmailVerification,
  signInWithEmailAndPassword, updatePassword, sendPasswordResetEmail } from "firebase/auth";
// import firebase module
import { getFirestore, collection, getDocs, setDoc, getDoc, doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { Email } from '../smtp';
import { app } from '../firebaseConfig';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';


// initialize firebase auth
const auth = getAuth(app);
const firestoreDB = getFirestore(app);
const fireStorage = getStorage(app); // getStorage was used instead


export const GbstContext = React.createContext()

const GbstContextProvider = ({children}) => {

  // const navigation = useNavigation();
  
  const [userObject, setUserObject] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [userId, setUserId] = useState('');
  const [buttonSpinner, setButtonSpinner] = useState(false)
  const [authenticationCode, setAuthCode] = useState(0);
  const [authStatus, setAuthStatus] = useState(false)
  const [localUserId, setLocalUserId] = useState('')

  // set doc to firestore
  const SaveDoc = (path1, path2, object) => {
    // save authenticated users
    const userRef = collection(firestoreDB, path1);
    setDoc(doc(userRef, path2), object);

  }

  // retrieve saved docs in firebase
  const GetDoc = async (path1, path2 ) => {

    const docRef = doc(firestoreDB, path1, path2)
        const code_docs = await getDoc(docRef)

        if(code_docs.exists()) {
          const data = code_docs.data();
          setAuthStatus(data.auth_status)
        } 
  } // end GetDOcs

  // save userId to local storage
  const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('userId', value)
        Alert.alert("Data saved")
      } catch (e) {
        Alert.alert("Error", `${e.message}`)
      } 
  }

  // retrieve userId from local storage
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userId')
      if(value !== null) {
        setLocalUserId(value)
        console.log("local usier id context", value);
      }
    } catch(e) {
      Alert.alert("Error", `${e.message}`)
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
  // authorize user
  const authorizeUser = () => {
    onAuthStateChanged(auth, (user) => {

      setLoadingAuth(true)
      if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setUserId(uid)
          setUserObject(user)
          setLoadingAuth(false)
      } else { 
        setLoadingAuth(false)
          // User is signed out
          // ...
      }
      });  
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
        
        // save code in firestore
        const userRef = collection(firestoreDB, "authCodes");
        setDoc(doc(userRef, userId ), {
          'email': email,
          "auth_code": authenticationCode
          .join(' '),
          "full_name": fullName,
          "pass_word": password,
          "privacy_policy": checked,
          "auth_status": false
        });

        // save auth code in local storage
        storeData(userId)
         // send code
         SendCode(email)
        setButtonSpinner(false)
        Alert.alert("User Authentication", "Sign up Successful!")

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

          // resend code
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
    const AuthenticateUser = async(code0, code1, code2, code3, onpress, onpressSignIn) => {
      
      // if (localUserId) {
      //   setButtonSpinner(true)
        // get doc from firebase
        try {
          const docRef = doc(firestoreDB, "authCodes",  localUserId)
          const code_docs = await getDoc(docRef)
  
          // retrieve auth status from firebase
          // const authStatusRef = doc(firestoreDB, "authenticatedUsers",  userId ? userId : localUserId)
          // const auth_status_data = authStatusRef.data();
          // const auth_status = auth_status_data.auth_status 
  
          if(code_docs.exists()) {
            const data = code_docs.data();
            const auth_code = data.auth_code.split(' ')
  
            // check if authStatus docs exists
            
            // if (!auth_status) {
              // check code match
              if (code0 == auth_code[0] && code1 == auth_code[1] && code2 == auth_code[2] && code3 == auth_code[3]) {
                 
                // save authentication status in firestore
                const object = {
                  "auth_status": true,  
                }
                SaveDoc("authenticatedUsers",localUserId, object);
  
                setButtonSpinner(false)
                
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
                )
                 
              
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
            } else {
              setButtonSpinner(false)
              Alert.alert("Authentication Error!", "User already verified")
            }
            
          // } else {
          //   setButtonSpinner(false)
          //   Alert.alert("Authentication Error!", "User does not exist")
          // } 
  
        
          
        } catch (error) {
          Alert.alert(error.message)
        }
      // } else {
      //   setButtonSpinner(false)
      //   Alert.alert("Authentication Error!", "User does not exist, sign up to continue")
      // }
       
    ;


    }

    // sign in user
    const SignInUser = (email, password, onpress, onpressSignup) => {
      setButtonSpinner(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        setButtonSpinner(false)

        Alert.alert("User Login!", "Your login is successfull",
        [
          {
            text: "Cancel",
            onPress: onpress,
            // onPress: () => navigation.navigate('HomeNav')
            
          },
          {
            text: "Ok",
            onPress: onpress
            // onPress: () => navigation.navigate('HomeNav')
          }
        ]
      )
      })
      .catch((error) => {
        // setShowSpinner(false)
        setButtonSpinner(false)
        const errorCode = error.code;
        const errorMessage = error.message;

        // resend code
        const ResendCode = async() => {
          SendCode(email)
          if (userId) {
             // save reauth code in firestore
            const userRef = collection(firestoreDB, "reAuthCodes");
            setDoc(doc(userRef, userId ), {
              
              "auth_code": authenticationCode.join(' '),
            });
          } else {
            Alert.alert("Error!", "User does not exist, kindly sign up to continue")
          }
        }

        if (errorCode == "auth/email-already-exists" || errorCode == "auth/email-already-in-use") {
            // error alert 
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
  }
  
  useEffect(() => {
    authorizeUser()
    getData()

  }, [])
      
   
  return (
    <GbstContext.Provider 
        value={{
          loadingAuth, userObject, auth, CreateUser, localUserId,
          AuthenticateUser, SignInUser, buttonSpinner, GetDoc, authStatus
        }}
    >
      {children}
  </GbstContext.Provider>
  )
}

export default GbstContextProvider