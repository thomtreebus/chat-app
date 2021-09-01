import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCYgTqZ7R28aVHc9btytcki945-l2I7e7s",
  authDomain: "chatapp-48b0e.firebaseapp.com",
  projectId: "chatapp-48b0e",
  storageBucket: "chatapp-48b0e.appspot.com",
  messagingSenderId: "597134457476",
  appId: "1:597134457476:web:094f677189df17fde720d1"
}).auth()
