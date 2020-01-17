import {combineReducers} from "redux";
import authReducer from "../auth/reducer/authReducer";
import {productsState} from "../products/reducer/productReducer";
import Cart from "../cart/cartReducer/cartReducer";
import Total from "../total/totalReducer/totalReducer";
import {subscribeState} from "../subscribe/reducer/subscribeReducer";


const reducer = combineReducers({
    Auth: authReducer,
    Products: productsState,
    Cart: Cart,
    Total: Total,
    Subscribe: subscribeState,

});

export default reducer;