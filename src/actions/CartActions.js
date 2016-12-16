/**
 * Created by yura on 16.12.16.
 */

import * as actionTypes from './ActionTypes';


export function addToCart (id) => {
    return {
        type: actionTypes.ADD_TO_CART,
        id: id
    }
}

export function removeFromCart (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        id: id
    }
}

export function incrementProductCount (id) => {
    return {
        type: actionTypes.INCREMENT_PRODUCT,
        id: id
    }
}

export function decrementProductCount (id) => {
    return {
        type: actionTypes.DECREMENT_PRODUCT,
        id: id
    }
}