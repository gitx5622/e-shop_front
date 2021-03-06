import API_ROUTE from "../../../constants";
import axios from "axios";
import {
  BEFORE_STATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
} from "../actionTypes";
import { history } from "../../../history";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_PRODUCT });

    try {
      await axios.get(`${API_ROUTE}/getproducts`).then((res) => {
        dispatch({ type: FETCH_PRODUCTS, payload: res.data.response });
      });
    } catch (err) {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: err.response ? err.response.data.error : "",
      });
    }
  };
};

export const createProduct = (createPost) => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_PRODUCT });

    try {
      const res = await axios.post(`${API_ROUTE}/createproduct`, createPost);
      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: res.data.response,
      });
      history.push("/");
    } catch (err) {
      dispatch({
        type: CREATE_PRODUCT_ERROR,
        payload: err.response.data.error,
      });
    }
  };
};

export function getProduct(id) {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_PRODUCT });

    try {
      const res = await axios.get(`${API_ROUTE}/getproduct/${id}`);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.response });
    } catch (err) {
      dispatch({ type: GET_PRODUCT_ERROR, payload: err.response.data.error });
      history.push("/"); //incase the user manually enter the param that dont exist
    }
  };
}
