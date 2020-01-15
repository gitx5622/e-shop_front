import {
    BEFORE_STATE_PRODUCT,
    FETCH_PRODUCTS,
<<<<<<< HEAD
    FETCH_PRODUCTS_ERROR, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS
=======
    FETCH_PRODUCTS_ERROR,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
} from "../actionTypes";

export const initState = {
    products: [],
    product: {},
    productsError: null,
    isLoading: false,
};

export const productsState = (state = initState, action) => {

<<<<<<< HEAD
    const { payload, type } = action;
    switch(type) {
=======
    const {payload, type} = action;
    switch (type) {
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702

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
