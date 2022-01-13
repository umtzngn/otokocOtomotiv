import * as actionTypes from "./actionTypes"


export function changeModel(model) {
    return {
        type: actionTypes.CHANGE_MODEL,
        payload: model
    }
}


export function getModelsSuccess(models) {
    return {type: actionTypes.GET_MODELS_SUCCESS,payload:models}
}


export function getModels() {
    return function(dispatch) {
        let url = "http://localhost:3000/models"
        return fetch(url).then(response=> response.json())
        .then(result=>dispatch(getModelsSuccess(result)))

    }
    
}