import React, { lazy, Suspense } from 'react' 
import './styles/App.css';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 

import Header from './components/header/Header'
// import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import PageNotFound from './pages/page-not-found'
import Profile from './pages/Profile'

import * as ROUTES from './constants/routes';
const Dashboard = lazy(() => import ('./pages/Dashboard'));
const Login = lazy(() => import ('./pages/Login'));
const SignUp = lazy(() => import ('./pages/SignUp'));
const Profile = lazy(() => import ('./pages/Profile'));
const PageNotFound = lazy(() => import ('./pages/page-not-found'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <p>This is where our content will be</p>

        <Header /> 
        <Switch>
          <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.PAGE_NOT_FOUND} component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;