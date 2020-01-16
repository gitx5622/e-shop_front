import {combineReducers} from "redux";
import authReducer from "../auth/reducer/authReducer";
import {productsState} from "../products/reducer/productReducer";
import Cart from "../cart/cartReducer/cartReducer";
import Total from "../total/totalReducer/totalReducer";


const reducer = combineReducers({
    Auth: authReducer,
    Products: productsState,
    Cart: Cart,
    Total: Total,

});

export default reducer;