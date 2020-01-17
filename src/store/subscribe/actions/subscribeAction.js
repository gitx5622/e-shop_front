import API_ROUTE from "../../../constants";
import axios from 'axios';
import {SUBSCRIBE_STATE, SUBSCRIBED_ERROR, SUBSCRIBED_SUCCESS} from "../actionTypes";
import {message} from "antd";



export const emailSubscribe = (email) => {
    return async (dispatch) => {

        dispatch({ type: SUBSCRIBE_STATE });

        try {
            const res = await axios.post(`${API_ROUTE}/subscribe`, email);
            dispatch({
                type: SUBSCRIBED_SUCCESS,
                payload: res.data.response
            });
            message.success("You email have been subscribed successfully")
        } catch(err) {
            dispatch({ type: SUBSCRIBED_ERROR, payload: err.response.data.error });
        }
    }
};

