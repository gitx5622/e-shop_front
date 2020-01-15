import {BEFORE_STATE, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_ERROR, SIGNUP_SUCCESS} from "../actionTypes";
import isEmpty from 'lodash/isEmpty';

export const initialState = {
    isAuthenticated : false,
    currentUser: {},
    isLoading : false,
    authError : null,
    authSuccess : null,
    isLoginSuccess: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case BEFORE_STATE :
            return {
                ...state,
                isLoading: true,
                authError: null,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                signupError: null,
                loginError: null

            };
        case SIGNUP_ERROR:
            return {
                ...state,
                isLoading: false,
                signupError: action.payload,
                loginError: null

            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
                isAuthenticated: !isEmpty(action.payload),
                isLoginSuccess: true,
                loginError: null,
                signupError: null,

            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                loginError: action.payload,
                signupError: null,

            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                currentUser: {},
                logoutError: null,
                isLoading: false,
                signupError: null,
                loginError: null,
            };

        default:
            return state;

    }
};

export default authReducer;