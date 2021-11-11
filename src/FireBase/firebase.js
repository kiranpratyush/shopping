import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {getFirestore,doc,setDoc} from "firebase/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyDuARFItIFNw46qGEbPrCjy1DNTFCBYmS4",
  
    authDomain: "shopping-e8997.firebaseapp.com",
  
    projectId: "shopping-e8997",
  
    storageBucket: "shopping-e8997.appspot.com",
  
    messagingSenderId: "551612583317",
  
    appId: "1:551612583317:web:f43a12e4bcea434eb0fa9c",
  
    measurementId: "G-8E6139F1NJ"
  
  };
const app = initializeApp(firebaseConfig)
  

const db = getFirestore()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

function SignIn()
{
    signInWithPopup(auth,provider)
    .then((result)=>
    {
        const credential = GoogleAuthProvider.credentialFromResult(result)
    })
    .catch((error)=>
    {
        console.log(error)
    })
}


export async function addProfileData(user)
{
    try{if(!user)
    {
        return
    }
    else{
        const ref  = doc(db,`users/${user.uid}`)
        // Here I get a reference to the user document
        const dateCreated = new Date()
        const docData = {name:user.displayName,date:dateCreated}

        await setDoc(ref,docData,{merge:true})
        // set Doc merges the value if new Something is added;
        // refer fireBase doc


    }
}
    catch(e)
    {
        console.log(e.message)
    }
}



export default SignIn
export  const authValue =auth;