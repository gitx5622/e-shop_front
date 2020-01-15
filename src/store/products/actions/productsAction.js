import API_ROUTE from "../../../constants";
import axios from 'axios';
import {
    BEFORE_STATE_PRODUCT,
    FETCH_PRODUCTS,
<<<<<<< HEAD
    FETCH_PRODUCTS_ERROR, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS
} from "../actionTypes";

import  {history} from "../../../history";
=======
    FETCH_PRODUCTS_ERROR,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS
} from "../actionTypes";

import {history} from "../../../history";
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702


export const fetchProducts = () => {

    return (dispatch) => {

        axios.get(`${API_ROUTE}/getproducts`).then(res => {
<<<<<<< HEAD
            dispatch({ type: FETCH_PRODUCTS, payload: res.data.response })
        }).catch(err => {
            dispatch({ type: FETCH_PRODUCTS_ERROR, payload: err.response ? err.response.data.error : "" })
=======
            dispatch({type: FETCH_PRODUCTS, payload: res.data.response})
        }).catch(err => {
            dispatch({type: FETCH_PRODUCTS_ERROR, payload: err.response ? err.response.data.error : ""})
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
        })
    }
};

export const getProduct = id => {

    return async (dispatch) => {

<<<<<<< HEAD
        dispatch({ type: BEFORE_STATE_PRODUCT });

        try {
            const res  = await axios.get(`${API_ROUTE}/getproduct/${id}`);
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.response })
        } catch(err){
            dispatch({ type: GET_PRODUCT_ERROR, payload: err.response.data.error });
=======
        dispatch({type: BEFORE_STATE_PRODUCT});

        try {
            const res = await axios.get(`${API_ROUTE}/getproduct/${id}`);
            dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data.response})
        } catch (err) {
            dispatch({type: GET_PRODUCT_ERROR, payload: err.response.data.error});
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
            history.push('/'); //incase the user manually enter the param that dont exist
        }
    }
};

