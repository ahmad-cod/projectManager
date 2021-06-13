import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDjjBsEUvaWOZvS9_sDoeBC9R9KONajgN8",
    authDomain: "amnaplan-826.firebaseapp.com",
    projectId: "amnaplan-826",
    storageBucket: "amnaplan-826.appspot.com",
    messagingSenderId: "51717390990",
    appId: "1:51717390990:web:39a0b01d2ac9316f327fdf",
    measurementId: "G-3PTY51LFT8"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase