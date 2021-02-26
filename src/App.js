import './styles/App.css';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 

import Header from './components/header/Header'
import Home from './pages/Home'
import Dashboard from './pages/app/Dashboard'

function App() {
  return (
    <Router>
      <Header /> 
      <Switch>
        <Route
          path="/" exact> 
          <Home /> 
        </Route> 

        <Route
          path="/dashboard">
            <Dashboard /> 
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
