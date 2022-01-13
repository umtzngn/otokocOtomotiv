import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function productListReducer(state=initialState.prodcuts,action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            
            return action.payload
            
    
        default:
            return state;
    }
    
}