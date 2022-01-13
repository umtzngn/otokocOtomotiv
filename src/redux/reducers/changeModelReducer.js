import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function changeModelReducer(state=initialState.currentModel,action) {
    switch (action.type) {
        case actionTypes.CHANGE_MODEL:
            
            return action.payload
            
    
        default:
            return state;
    }
    
}