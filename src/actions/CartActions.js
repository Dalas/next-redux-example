/**
 * Created by yura on 16.12.16.
 */

import * as actionTypes from './ActionTypes';


export function addToCart (product) {
    return {
        type: actionTypes.ADD_TO_CART,
        product: product
    }
}

export function removeFromCart (product) {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        product: product
    }
}

export function incrementProductCount (id) {
    return {
        type: actionTypes.INCREMENT_PRODUCT,
        id: id
    }
}

export function decrementProductCount (id) {
    return {
        type: actionTypes.DECREMENT_PRODUCT,
        id: id
    }
}

export function handleDiscountEnter (promoCode) {
    return {
        type: actionTypes.ENTER_DISCOUNT,
        promoCode: promoCode
    }
}