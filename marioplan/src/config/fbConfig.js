import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
 
// Your web app's Firebase configuration
var config = {
   apiKey: "AIzaSyDuJgiNwWIZImeLnhP-8hUKoRp4DFj88EQ",
   authDomain: "marioproject-a0e69.firebaseapp.com",
   databaseURL: "https://marioproject-a0e69.firebaseio.com",
   projectId: "marioproject-a0e69",
   storageBucket: "",
   messagingSenderId: "1054581086520",
   appId: "1:1054581086520:web:f3c2665061dc9f8d9a49cd",
   measurementId: "G-HVZX3F5STX"
 };
 // Initialize Firebase
 firebase.initializeApp(config);
 firebase.firestore().settings({ timestampsInSnapshots: true })
 
 export default firebase;