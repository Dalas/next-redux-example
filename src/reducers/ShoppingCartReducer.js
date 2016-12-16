/**
 * Created by yura on 16.12.16.
 */

import * as actionTypes from '../actions/ActionTypes';


const initialState = {
    productsInCart: {}
};

export default function shoppingCartReducer(state = initialState, action) {
    switch( action.type ) {
        case actionTypes.ADD_TO_CART:
            state.products[ action.product.id ] = action.product;
            return state;

        case actionTypes.REMOVE_FROM_CART:
            delete state.products[ action.product.id ];
            return state;

        case actionTypes.INCREMENT_PRODUCT:
            state.products[ action.id ].count += 1;
            return state;

        case actionTypes.DECREMENT_PRODUCT:
            state.products[ action.id ].count -= 1;
            return state;

        default:
            return state
    }
}