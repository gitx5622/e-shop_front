import API_ROUTE from "../../../constants";
import axios from 'axios';
import {BEFORE_STATE, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_ERROR, SIGNUP_SUCCESS} from "../actionTypes";
import {history} from "../../../history";
import setAuthorizationToken from "../../../authorization";



export const SignUp = (newUser) => {
    return async dispatch => {
            dispatch({type: BEFORE_STATE});
        try {
            await axios.post(`${API_ROUTE}/register`, newUser);
            dispatch({type: SIGNUP_SUCCESS});
            history.push("/login");
        }catch (err) {
            dispatch({type:SIGNUP_ERROR,payload:err.response});
        }
    }

};

export const SignIn = (credentials) => {
    return async dispatch => {
            dispatch({type: BEFORE_STATE});
        try {
            const res = await axios.post(`${API_ROUTE}/login`, credentials);
            let userData = res.data.response;
            localStorage.setItem("token", userData.token);
            localStorage.setItem('user_data', JSON.stringify(userData));
            setAuthorizationToken(userData.token);
            dispatch({type: LOGIN_SUCCESS, payload: userData});
        }catch (err) {
            dispatch({type:LOGIN_ERROR, payload: err.response})
        }
    }

};

export const SignOut = () => {
    return (dispatch) => {
        localStorage.removeItem("token");
        setAuthorizationToken(false);
        dispatch({ type: LOGOUT_SUCCESS });
        window.localStorage.clear(); //update the localstorage
        history.push('/login');
    }
};