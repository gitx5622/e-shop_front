<<<<<<< HEAD:src/store/combinedReducer/index.js
import { combineReducers } from "redux"
import authReducer from "../auth/reducer/authReducer";
import { productsState} from "../products/reducer/productReducer";
=======
import {combineReducers} from "redux"
import authReducer from "../auth/reducer/authReducer";
import {productsState} from "../products/reducer/productReducer";
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702:src/store/combinedReducer/index.js


const reducer = combineReducers({
    Auth: authReducer,
    ProductsState: productsState,
});

export default reducer
