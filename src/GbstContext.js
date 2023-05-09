import React from 'react'
// import firebase modules
import { app } from './firebaseConfig';
import { getAuth, onAuthStateChanged,updateProfile, createUserWithEmailAndPassword, sendEmailVerification,
  signInWithEmailAndPassword, updatePassword, sendPasswordResetEmail } from "firebase/auth";
// import firebase module
import { getFirestore, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

// initialize firebase auth
const auth = getAuth(app);
const firestoreDB = getFirestore(app);
const fireStorage = getStorage(app); // getStorage was used instead


export const CreateGbstContext = React.createContext()

const GbstContext = () => {

  
  const [userObject, setUserObject] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [userId, setUserId] = useState('');

  const authorizeUser = () => {
    onAuthStateChanged(auth, (user) => {

      setLoadingAuth(true)
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

  }, [])
      
   
  return (
    <CreateGbstContext.Provider 
        value={{
        loadingAuth, userObject, auth, firestoreDB, fireStorage, 
        uploadBytes, updatePassword, ref, getDownloadURL, setDoc, doc,
        signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification
        }}
    >
      {children}
  </CreateGbstContext.Provider>
  )
}

export default GbstContext