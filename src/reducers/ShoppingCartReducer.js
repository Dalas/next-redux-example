/**
 * Created by yura on 16.12.16.
 */

import * as actionTypes from '../actions/ActionTypes';


const initialState = {
    productsInCart: {}
};

export default function shoppingCartReducer(state = initialState, action) {

    let newState = { productsInCart: Object.assign({}, state.productsInCart) };

    switch( action.type ) {
        case actionTypes.ADD_TO_CART:
            newState.productsInCart[ action.product.id ] = action.product;
            newState.productsInCart[ action.product.id ].count = 1;
            return newState;

        case actionTypes.REMOVE_FROM_CART:
            delete newState.productsInCart[ action.product.id ];
            return newState;

        case actionTypes.INCREMENT_PRODUCT:
            newState.productsInCart[ action.id ].count += 1;
            return newState;

        case actionTypes.DECREMENT_PRODUCT:
            newState.productsInCart[ action.id ].count -= 1;
            return newState;

        default:
            return newState
    }
}