import * as actionTypes from "./actionTypes"

export function changeSearch(product) {
    return {
        type: actionTypes.CHANGE_SEARCH,
        payload: product
    }
}


export function getCategoriesSuccess(products) {
    return {type: actionTypes.GET_SEARCH_SUCCESS,payload:products}
}

