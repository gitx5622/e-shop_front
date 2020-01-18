import { ADDRESS_STATE, FETCH_AUTH_ADDRESS_ERROR, FETCH_AUTH_ADDRESS_SUCCESS } from "../actionTypes";


export const initState = {
    authAddress: [],
    error: null,
    isLoading: false,
};

export const addressState = (state = initState, action) => {

    const { payload, type } = action;
    switch(type) {

        case ADDRESS_STATE:
            return {
                ...state,
                error: null,
                isLoading: true,
            };
        case FETCH_AUTH_ADDRESS_SUCCESS:
            return {
                ...state,
                authAddress: payload,
                isLoading: false,
            };

        case FETCH_AUTH_ADDRESS_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            };


        default:
            return state
    }
};
