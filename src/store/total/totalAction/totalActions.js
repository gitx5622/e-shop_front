import { UPDATE_CART } from '../actionTypes';


export const updateCart = cartProducts => dispatch => {
    let productQuantity = cartProducts.reduce((sum, p) => {
        sum += p.quantity;
        return sum;
    }, 0);

    let totalPrice = cartProducts.reduce((sum, p) => {
        sum += p.price * p.quantity;
        return sum;
    }, 0);

    let cartTotal = {
        productQuantity,
        totalPrice,
        currencyFormat: 'Kshs'
    };

    dispatch({
        type: UPDATE_CART,
        payload: cartTotal
    });
    localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
};

