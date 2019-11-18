import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route path='/register-form' component={Register} />
      </div>
    </Router>
  );
}

export default App;
