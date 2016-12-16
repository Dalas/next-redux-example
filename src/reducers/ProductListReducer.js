/**
 * Created by yura on 16.12.16.
 */

import * as actionTypes from '../actions/ActionTypes';


const initialState = {
    products: [
        {
            title: 'P1',
            imgUrl: '/static/product1.png',
            description: 'Some description',
            cost: 10,
            availableCount: 12,
            addedToCart: false
        },
        {
            title: 'P2',
            imgUrl: '/static/product2.png',
            description: 'Some description',
            cost: 12,
            availableCount: 12,
            addedToCart: false
        },
        {
            title: 'P3',
            imgUrl: '/static/product3.png',
            description: 'Some description',
            cost: 20,
            availableCount: 12,
            addedToCart: false
        }
    ]
};

export default function productListReducer(state = initialState, action) {
    switch( action.type ) {
        case actionTypes.ADD_TO_CART:
            state.products[ action.product.id ].addedToCart = true;
            return state;

        case actionTypes.REMOVE_FROM_CART:
            state.products[ action.product.id ].addedToCart = false;
            return state;

        case actionTypes.INCREMENT_PRODUCT:
            state.products[ action.id ].availableCount -= 1;
            return state;

        case actionTypes.DECREMENT_PRODUCT:
            state.products[ action.id ].availableCount += 1;
            return state;
    }
}