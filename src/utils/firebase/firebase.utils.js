import {initializeApp} from 'firebase/app'
import {getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut} from 'firebase/auth'
import {getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs

} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfcCW88WDjStBNrT4qisO0x4hGVEEejL0",
    authDomain: "crwn-clothing-db-3f7a3.firebaseapp.com",
    projectId: "crwn-clothing-db-3f7a3",
    storageBucket: "crwn-clothing-db-3f7a3.appspot.com",
    messagingSenderId: "1055236556250",
    appId: "1:1055236556250:web:c199dc2f7985b345cd2ce3"
  };

  const firebaseApp=initializeApp(firebaseConfig)

  const googleProvider= new GoogleAuthProvider()

  googleProvider.setCustomParameters({
      prompt:"select_account"
  })

  export const createUserDocumentFromAuth=async(userAuth, additionalInfo={})=>{
      // check if theres an existing document
      const userDocRef=doc(db, 'users', userAuth.uid)
     // now we use getDoc to get the document
     const userSnapshot=await getDoc(userDocRef)
      console.log('userSnapshot', userSnapshot.exists())
      if(!userSnapshot.exists()){
          const { displayName, email}=userAuth
          const createdAt=new Date()
          try{
              await setDoc(userDocRef,{
                  displayName,
                  email,
                  createdAt,
                  ...additionalInfo
              })
          }catch(error){
              console.log('error creating user')
          }
      }

      // return the doc reference if the user exists
      return userDocRef

  }

  export const addCollectionAndDocument=async(collectionKey, objectsToAdd)=>{
    const collectionRef=collection(db,collectionKey)
    const bacth=writeBatch(db)
   
}

export const getCategoriesAndDocuments=async()=>{
    const collectionRef=collection(db, 'categories')
    const q=query(collectionRef)
    const querySnapshot=await getDocs(q)
    const categoryMap=querySnapshot.docs.reduce((acc,docSnapshot)=>{
        const {title, items}=docSnapshot.data()
        acc[title.toLowerCase()]=items
        return acc
        

    },{})
    return categoryMap;
    
}

  export const createAuthUserWithEmailAndPassword=async(email, password)=>{
      if(!email||!password)return
      return await createUserWithEmailAndPassword(auth,email, password)

  }


  export const auth=getAuth()
  export const db=getFirestore()
  
  export const signInWithGooglePopUp=()=>signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth, googleProvider)
  export const signInAuthUserWithEmailAndPassword=async(email, password)=>{
    if(!email||!password){
        return
    }
    console.log("signing in with ", email+' '+ password)
    return signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser=async()=>await signOut(auth)
  

  export const onAuthStateChangedListener=(callback)=>
     onAuthStateChanged(auth,callback)
  