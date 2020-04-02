import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBCyHZdUFyZcaqABE_8FVBNKrmjS6-4Yu4",
    authDomain: "events-624d4.firebaseapp.com",
    databaseURL: "https://events-624d4.firebaseio.com",
    projectId: "events-624d4",
    storageBucket: "events-624d4.appspot.com",
    messagingSenderId: "249735791026",
    appId: "1:249735791026:web:3aec3c76c4b246d81de4ab"
  };
    // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);