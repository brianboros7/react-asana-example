// Firebase config

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "react-asana-example.firebaseapp.com",
    projectId: "react-asana-example",
    storageBucket: "react-asana-example.appspot.com",
    messagingSenderId: SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};

const firebase = window.firebase.initializeApp(config);
  
// seedDatabase(firebase);
  
export { firebase };