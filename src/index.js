import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirebaseContext from './context/firebase'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <FirebaseContext> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext>,
  document.getElementById('root')
);
reportWebVitals();