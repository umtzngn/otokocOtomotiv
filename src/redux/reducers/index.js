import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer";
import modelListReducer from "./modelListReducer";
import changeModelReducer from "./changeModelReducer";
import cartReducer from "./cartReducer";
import changeSearchReducer from "./changeSearchReducer";


const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    modelListReducer,
    changeModelReducer,
    productListReducer,
    cartReducer,
    changeSearchReducer
})

export default rootReducer;