import React from 'react';
import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
    type: types.PRODUCTS_SUCCESS,
    products
})

export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}

const addToFavoriteUnsafe = productId => ({
    type: types.FAVORITE_SUCCESS,
    productId
})

export const addToFavorite = productId => (dispatch, getState) => {
    fetch(types.API + types.FAVORITE_SUCCESS)
        .then(
            response => response.json()
        )
        .then(
            data => (
                getState().products.byId[productId].inFav =  data.data.inFav,
                dispatch(addToFavoriteUnsafe(productId)),
                    console.log(data)
            )
        )
        .catch(
            error => (
                console.error(error)
            )
        )
}

export const applyFilter = () => dispatch => {
    shop.getFilteredProducts(products => {
        dispatch(receiveProducts(products))
    })
}

export const resetFilter = () => dispatch => {
    //$("input[type=text], textarea").val("");
    document.getElementById('filter-rorm').reset();
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}