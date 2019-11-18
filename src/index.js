import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './components/store/reducers';
import App from './App';

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>, document.getElementById('root'));
=======
import './index.css';
import App from './App';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

>>>>>>> 23e19c792225de157385aaf4a688a1a5559aacee
