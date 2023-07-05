import  firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCmDzxWNh5Tdik2mtLG8_IY1MIqPhzaIUk",
  authDomain: "unichat-51f37.firebaseapp.com",
  projectId: "unichat-51f37",
  storageBucket: "unichat-51f37.appspot.com",
  messagingSenderId: "1098438885980",
  appId: "1:1098438885980:web:e7dbe2b0adf3ad1f995c99"
}).auth();