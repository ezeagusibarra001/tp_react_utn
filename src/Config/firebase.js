import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBOPbeJX9Qrgc8ba5gAUatgsjbartWFe5M",
  authDomain: "tp-obligatorio-b77b2.firebaseapp.com",
  databaseURL: "https://tp-obligatorio-b77b2-default-rtdb.firebaseio.com",
  projectId: "tp-obligatorio-b77b2",
  storageBucket: "tp-obligatorio-b77b2.appspot.com",
  messagingSenderId: "30915184231",
  appId: "1:30915184231:web:aa0f30309d0c263fabf6c2"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  firebase.auth = firebase.auth();
  firebase.db = db;
  
  export default firebase;