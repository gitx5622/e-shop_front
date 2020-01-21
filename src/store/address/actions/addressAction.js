import API_ROUTE from "../../../constants";
import axios from 'axios';
import {
    ADDRESS_STATE, CREATE_ADDRESS_ERROR,
    CREATE_ADDRESS_SUCCESS,
    FETCH_AUTH_ADDRESS_ERROR,
    FETCH_AUTH_ADDRESS_SUCCESS
} from "../actionTypes";
import {message} from "antd";



export const addressCreate = (addressDetails) => {
    return async (dispatch) => {

        dispatch({ type: ADDRESS_STATE });

        try {
            const res = await axios.post(`${API_ROUTE}/createaddress`, addressDetails);
            dispatch({
                type: CREATE_ADDRESS_SUCCESS,
                payload: res.data.response
            });
            message.success("Your address have been created successfully")
        } catch(err) {
            dispatch({ type: CREATE_ADDRESS_ERROR, payload: err.response.data.error });
        }
    }
};


export const fetchAuthAddress = id => {

    return async (dispatch) => {

        dispatch({ type: ADDRESS_STATE });

        try {
            const res  = await axios.get(`${API_ROUTE}/user_address/${id}`);
            dispatch({ type: FETCH_AUTH_ADDRESS_SUCCESS, payload: res.data.response })
        } catch(err){
            dispatch({ type: FETCH_AUTH_ADDRESS_ERROR, payload: err})
        }
    }
};

