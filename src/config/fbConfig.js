import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA32zJe3geHTy0nyaP8GUUtWaEo7SZgy-o",
    authDomain: "twice-51acf.firebaseapp.com",
    databaseURL: "https://twice-51acf.firebaseio.com",
    projectId: "twice-51acf",
    storageBucket: "twice-51acf.appspot.com",
    messagingSenderId: "1090242158652",
    appId: "1:1090242158652:web:10c435a63f7900b5a2e339",
    measurementId: "G-VWPRKZY65T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
  firebase.analytics();
  
  export default firebase;
