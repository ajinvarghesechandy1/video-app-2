import {initializeApp  } from 'firebase/app';
import {createUserWithEmailAndPassword , onAuthStateChanged , getAuth , signInAnonymously } from 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhcj0QDPbem1XpohFoeJOUaR_zsC_nykg",
    authDomain: "fir-6b335.firebaseapp.com",
    databaseURL: "https://fir-6b335-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-6b335",
    storageBucket: "fir-6b335.appspot.com",
    messagingSenderId: "445228741280",
    appId: "1:445228741280:web:00b6c15d29b9bcb556cfc5",
    measurementId: "G-JVM3R66GG3"
  };
const app = initializeApp(firebaseConfig)
const auth  = getAuth(app)
export {createUserWithEmailAndPassword , onAuthStateChanged , auth , signInAnonymously}