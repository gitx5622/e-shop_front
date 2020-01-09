import {
    BEFORE_STATE_PRODUCT, CREATE_PRODUCT_ERROR, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_ERROR,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_SUCCESS
} from "../actionTypes";

export const initState = {
    products: [],
    product: {},
    productsError: null,
    isLoading: false,
};

export const productsState = (state = initState, action) => {

    const { payload, type } = action;
    switch(type) {

        case BEFORE_STATE_PRODUCT:
            return {
                ...state,
                productsError: null,
                isLoading: true,
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: payload,
                isLoading: false,
            };

        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                productsError: payload,
                isLoading: false
            };

        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                product: payload,
                productsError: null,
                isLoading: false
            };

        case GET_PRODUCT_ERROR:
            return {
                ...state,
                productsError: payload,
                isLoading: false
            };

        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [payload, ...state.products],
                postsError: null,
                isLoading: false
            };

        case CREATE_PRODUCT_ERROR:
            return {
                ...state,
                productsError: payload,
                isLoading: false
            };

        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === payload.id ?
                        {...product, title: payload.title, price: payload.price} : product
                ),
                product: payload,
                productsError: null,
                isLoading: false
            };

        case UPDATE_PRODUCT_ERROR:
            return {
                ...state,
                productsError: payload,
                isLoading: false
            };

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== payload.deletedID),
                productsError: null,
                isLoading: false
            };

        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                productsError: payload,
                isLoading: false
            };

        default:
            return state
    }
};
