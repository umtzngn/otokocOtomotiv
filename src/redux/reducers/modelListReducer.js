import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function modelListReducer(state=initialState.models,action) {
    switch (action.type) {
        case actionTypes.GET_MODELS_SUCCESS:
            
            return action.payload
            
    
        default:
            return state;
    }
    
}