import * as actionTypes from "./actionTypes"
// import { useState, useEffect } from "react"

export function getProductsSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}


export function getProducts(markaId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products"
        if (markaId) {
            url = url + "?markaId=" + markaId
        }
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))

    }
}

export function getProducts2(modelId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products"
        if (modelId) {
            url = url + "?modelId=" + modelId
        }
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))

    }
}


export function getProducts3(parcaNo) {
    return function (dispatch) {
        let url = "http://localhost:3000/products"
        if (parcaNo) {
            url = url + "?parcaNo=" + parcaNo
        }
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))

    }
}