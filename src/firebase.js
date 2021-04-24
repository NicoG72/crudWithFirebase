  import firebase from 'firebase/app';
  import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAH9XtqCGoQlSCOvA4Q2a4lQBlXWRLNz7Y",
    authDomain: "fb-crud-react-835de.firebaseapp.com",
    projectId: "fb-crud-react-835de",
    storageBucket: "fb-crud-react-835de.appspot.com",
    messagingSenderId: "160732122039",
    appId: "1:160732122039:web:399d9521c823a61dd57632"
  };
  // Initialize Firebase
  const fb =firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();