import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import setAuthorizationToken from "./authorization";
<<<<<<< HEAD
import { LOGIN_SUCCESS} from "./store/auth/actionTypes";
=======
import {LOGIN_SUCCESS} from "./store/auth/actionTypes";
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
import reducer from "./store/combinedReducer";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk, logger)
));

// when the page reloads, the auth user is still set
if (localStorage.token){
    setAuthorizationToken(localStorage.token);
<<<<<<< HEAD
    let userData = localStorage.getItem('user_data') == null ? null : JSON.parse(localStorage.getItem('user_data'))
    store.dispatch({ type: LOGIN_SUCCESS, payload: userData}) //provided he has a valid token
=======
    let userData = localStorage.getItem('user_data') == null ? null : JSON.parse(localStorage.getItem('user_data'));
    store.dispatch({type: LOGIN_SUCCESS, payload: userData}) //provided he has a valid token
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702

}
const app = (
    <Provider store={store}>
        <App />
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
