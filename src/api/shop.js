/**
 * Mocking client-server processing
 */
import React from 'react';
import * as types from '../constants/ActionTypes'

export default {
    getProducts: (cb, timeout) => (
        //setTimeout(() => cb(_products), timeout || TIMEOUT)
        fetch(types.API + types.PRODUCTS_SUCCESS)
            .then(
                response => response.json()
            )
            .then(
                data => (
                    cb(data.data.products)
                    //console.log('then #1', data)
                )
            )
    ),
    getFilteredProducts: (cb, timeout) => (
        //setTimeout(() => cb(_products), timeout || TIMEOUT)
        fetch(types.API + types.FILTER_SUCCESS)
            .then(
                response => response.json()
            )
            .then(
                data => (
                    cb(data.data.products)
                    //console.log('then #1', data)
                )
            )
    )
}
