import {PAYMENT_STATE, SEND_PAYMENT_ERROR, SEND_PAYMENT_SUCCESS} from "../actionTypes";


export const initState = {
    payment: "",
    error: null,
    isLoading: false,
};

export const paymentState = (state = initState, action) => {

    const { payload, type } = action;
    switch(type) {

        case PAYMENT_STATE:
            return {
                ...state,
                error: null,
                isLoading: true,
            };
        case SEND_PAYMENT_SUCCESS:
            return {
                ...state,
                payment: payload,
                isLoading: false,
            };

        case SEND_PAYMENT_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            };


        default:
            return state
    }
};
