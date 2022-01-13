import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function changeSearchReducer(state=initialState.search,action) {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCH:
            
            return action.payload
            
    
        default:
            return state;
    }
    
}