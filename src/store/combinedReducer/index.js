import {combineReducers} from "redux"
import authReducer from "../auth/reducer/authReducer";
import {productsState} from "../products/reducer/productReducer";


const reducer = combineReducers({
    Auth: authReducer,
    ProductsState: productsState,
});

export default reducer
