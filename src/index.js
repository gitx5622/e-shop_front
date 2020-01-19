import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from "./store/combinedReducer";
import setAuthorizationToken from "./authorization";
import {LOGIN_SUCCESS} from "./store/auth/actionTypes";
import {LOAD_CART} from "./store/cart/actionTypes";
import {UPDATE_CART} from "./store/total/actionTypes";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhances(applyMiddleware(thunk, logger)));


// when the page reloads, the auth user is still set
if (localStorage.token) {
    setAuthorizationToken(localStorage.token);
    let userData = localStorage.getItem('user_data') == null ? null : JSON.parse(localStorage.getItem('user_data'));
    store.dispatch({ type: LOGIN_SUCCESS, payload: userData}) //provided he has a valid token
}
if (localStorage.myCart) {
    let cartProducts = localStorage.getItem('myCart') == null ? null : JSON.parse(localStorage.getItem('myCart'));
    store.dispatch({type: LOAD_CART, payload: cartProducts}); //provided he has added item to cart
}
if (localStorage.cartTotal) {
    let cartTotal = localStorage.getItem('cartTotal') == null ? null : JSON.parse(localStorage.getItem('cartTotal'));
    store.dispatch({type: UPDATE_CART, payload: cartTotal}); //provided he has added item to cart
}

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
