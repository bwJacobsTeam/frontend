import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import RegisterOrg from './components/Register';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route path='/register-form' component={RegisterOrg} />
      </div>
    </Router>
  );
}

export default App;
