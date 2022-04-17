// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiKrE91KyrY7bw4VREgKVKcn6NTMEoaJo",
  authDomain: "fitness-center-5e41f.firebaseapp.com",
  projectId: "fitness-center-5e41f",
  storageBucket: "fitness-center-5e41f.appspot.com",
  messagingSenderId: "873155984634",
  appId: "1:873155984634:web:6b0c1b2e3c2f12589f1d43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth