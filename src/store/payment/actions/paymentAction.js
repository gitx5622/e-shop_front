import API_ROUTE from "../../../constants";
import axios from 'axios';
import {Modal} from "antd";
import {PAYMENT_STATE, SEND_PAYMENT_ERROR, SEND_PAYMENT_SUCCESS} from "../actionTypes";



export const sendStkPush = (credentials) => {
    return async (dispatch) => {

        dispatch({ type: PAYMENT_STATE });

        try {
            const res = await axios.post(`${API_ROUTE}/stkpush`, credentials);
            dispatch({
                type: SEND_PAYMENT_SUCCESS,
                payload: res.data.response
            });
            Modal.success({
                title: 'Success',
                content: 'Your payment have been sent successfully',
            });
            localStorage.removeItem('myCart');
            localStorage.removeItem('cartTotal');
            window.location.reload(false);
        } catch(err) {
            dispatch({ type: SEND_PAYMENT_ERROR, payload: err.response.data.error });
        }
    }
};
