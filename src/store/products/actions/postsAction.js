import API_ROUTE from "../../../constants";
import axios from 'axios';
import {
    BEFORE_STATE_PRODUCT,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_ERROR,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS
} from "../actionTypes";

import {history} from "../../../history";


export const fetchProducts = () => {

    return (dispatch) => {

        axios.get(`${API_ROUTE}/getproducts`).then(res => {
            dispatch({type: FETCH_PRODUCTS, payload: res.data.response})
        }).catch(err => {
            dispatch({type: FETCH_PRODUCTS_ERROR, payload: err.response ? err.response.data.error : ""})
        })
    }
};

export const getProduct = id => {

    return async (dispatch) => {

        dispatch({type: BEFORE_STATE_PRODUCT});

        try {
            const res = await axios.get(`${API_ROUTE}/getproduct/${id}`);
            dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data.response})
        } catch (err) {
            dispatch({type: GET_PRODUCT_ERROR, payload: err.response.data.error});
            history.push('/'); //incase the user manually enter the param that dont exist
        }
    }
};

