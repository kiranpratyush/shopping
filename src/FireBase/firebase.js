import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

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
  


const auth = getAuth(app)
const provider = new GoogleAuthProvider();

function SignIn()
{
    signInWithPopup(auth,provider)
    .then((result)=>
    {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
        console.log(token)
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

export default SignIn
export  const authValue =auth;