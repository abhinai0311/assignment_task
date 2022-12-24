import firebase from "firebase/app";
import "firebase/auth"
import { getAuth } from "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCoCX5QdGppH16QXf8SiSDjpkWUyxB9KmQ",
  authDomain: "react-test-crud-9708c.firebaseapp.com",
  databaseURL: "https://react-test-crud-9708c-default-rtdb.firebaseio.com",
  projectId: "react-test-crud-9708c",
  storageBucket: "react-test-crud-9708c.appspot.com",
  messagingSenderId: "854918204623",
  appId: "1:854918204623:web:ac05ad5fc1907c46793bba",
  measurementId: "G-29DYZ6V90N"
})

var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
  export const auth = getAuth();

  
  