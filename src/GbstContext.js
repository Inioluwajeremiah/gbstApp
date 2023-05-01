import React from 'react'

export const CreateGbstContext = React.createContext()

const GbstContext = () => {
    
   
  return (
    <CreateGbstContext.Provider 
        value={{
        loadingAuth, userObject, userId,firestoreDB, fireStorage, bgImageUrl, 
        uploadBytes, updatePassword, getStorage, ref, getDownloadURL,getProfileBgImage,
        firestoreDB, setDoc, doc, authorizeUser
        }}
    >
      {children}
  </CreateGbstContext.Provider>
  )
}

export default GbstContext