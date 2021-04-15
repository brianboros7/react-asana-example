// Firebase config 
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-asana-example.firebaseapp.com",
    projectId: "react-asana-example",
    storageBucket: "react-asana-example.appspot.com",
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;
  
// seedDatabase(firebase);
  
export { firebase, FieldValue };