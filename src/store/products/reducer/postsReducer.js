import {
    BEFORE_STATE_PRODUCT,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_ERROR,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS
} from "../actionTypes";

export const initState = {
    products: [],
    product: {},
    productsError: null,
    isLoading: false,
};

export const productsState = (state = initState, action) => {

    const {payload, type} = action;
    switch (type) {

        case BEFORE_STATE_PRODUCT:
            return {
                ...state,
                postsError: null,
                isLoading: true,
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                posts: payload,
                isLoading: false,
            };

        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                postsError: payload,
                isLoading: false
            };

        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                post: payload,
                postsError: null,
                isLoading: false
            };

        case GET_PRODUCT_ERROR:
            return {
                ...state,
                postsError: payload,
                isLoading: false
            };

        default:
            return state
    }
};
