import React, { useEffect, useState } from 'react'

// import firebase modules
import { app } from './firebaseConfig.js';
import { 
    getAuth, onAuthStateChanged,updateProfile, updatePassword, 
    createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail
 } from "firebase/auth";

// import firebase module
import { getFirestore, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

// initialize firebase auth
const auth = getAuth(app);
const firestoreDB = getFirestore(app);
const fireStorage = getStorage(app); // getStorage was used instead


// create context
export const GbstContext = React.createContext();


export const GbstContextProvider = ({children}) => {

    const [userObject, setUserObject] = useState(null);
    const [displayName, setDisplayName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [userbmi, setBMI] = useState('');
    const [userId, setUserId] = useState('');
    const [bgImageUrl, setBgImageUrl] = useState('');
    const [testResultDataArray, setTestResultDataArray] = useState([]);
    const [loadingAuth, setLoadingAuth] = useState(false)

      // get profile data from firestore
      const getTestData = async () => {

        let IntDataArray = []
        try {
          const docsSnap = await getDocs(collection(firestoreDB, userId + "/userdata/testdata" ));
          if(docsSnap.docs.length > 0) {
            docsSnap.forEach(doc => {
              IntDataArray.push({'title':doc.id, "data": [doc.data()]});
            })
          }
          setTestResultDataArray(IntDataArray)
    
          // setLoading(false)
        } catch (error) {
              console.log(error);
              // Alert.alert(error)
              setLoading(false);
        }
      }

      // get background image
    const getProfileBgImage = async () => {
      const fileRef = ref(getStorage(), 'profileBgImage/' +  userId);
      await getDownloadURL(fileRef).then((url) => {
        setBgImageUrl(url)
        console.log("profile bg image => ", bgImageUrl);
      }).catch((error) => {
        // Alert.alert("Error", error.msg)
      });
    } 

    const authorizeUser = () => {
      setLoadingAuth(true)
      onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            setUserId(uid)
        
            // ...
            setUserObject(user)
            setLoadingAuth(false)
        } else { 
          setLoadingAuth(false)
            // User is signed out
            // ...
        }
        });  
    }
    
  useEffect(() => {
   authorizeUser()
    getProfileBgImage()

  }, [])

  return (
    <GbstContext.Provider 
      value={{
        loadingAuth, userObject, userId,firestoreDB, fireStorage, bgImageUrl, 
        uploadBytes, updatePassword, ref, getDownloadURL,getProfileBgImage,
        firestoreDB, fireStorage, setDoc, doc, authorizeUser, createUserWithEmailAndPassword, sendEmailVerification
      }} >
        {children}
    </GbstContext.Provider>
  )
}
