import {SUBSCRIBE_STATE,SUBSCRIBED_ERROR,SUBSCRIBED_SUCCESS} from "../actionTypes";


export const initState = {
    subscribe: "",
    error: null,
    isLoading: false,
};

export const subscribeState = (state = initState, action) => {

    const { payload, type } = action;
    switch(type) {

        case SUBSCRIBE_STATE:
            return {
                ...state,
                error: null,
                isLoading: true,
            };
        case SUBSCRIBED_SUCCESS:
            return {
                ...state,
                subscribe: payload,
                isLoading: false,
            };

        case SUBSCRIBED_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            };

        default:
            return state
    }
};
