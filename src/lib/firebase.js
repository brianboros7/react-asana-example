// Firebase config

const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: "react-asana-example.firebaseapp.com",
    projectId: "react-asana-example",
    storageBucket: "react-asana-example.appspot.com",
    messagingSenderId: REACT_APP_SENDER_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID
};

const firebase = window.firebase.initializeApp(config);
  
// seedDatabase(firebase);
  
export { firebase };