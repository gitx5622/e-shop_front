import { UPDATE_CART } from '../actionTypes';

const initialState = {
    data: {
        productQuantity: 0,
        totalPrice: 0,
    }
};

const Total = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CART:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};

export default Total;