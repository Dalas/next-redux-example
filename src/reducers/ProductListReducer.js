/**
 * Created by yura on 16.12.16.
 */

import * as actionTypes from '../actions/ActionTypes';
import _ from 'lodash';


const initialState = {
    products: [
        {
            id: 0,
            title: 'P1',
            imgUrl: '/static/product1.png',
            description: 'Some description',
            cost: 10,
            availableCount: 12,
            addedToCart: false
        },
        {
            id: 1,
            title: 'P2',
            imgUrl: '/static/product2.png',
            description: 'Some description',
            cost: 12,
            availableCount: 12,
            addedToCart: false
        },
        {
            id: 2,
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

    let newState = { products: state.products.slice() };
    let product;

    switch( action.type ) {
        case actionTypes.ADD_TO_CART:

            product = _.find(newState.products, { id: action.product.id });
            product.addedToCart = true;

            return newState;

        case actionTypes.REMOVE_FROM_CART:
            product = _.find(newState.products, { id: action.product.id });
            product.addedToCart = false;
            return newState;

        case actionTypes.INCREMENT_PRODUCT:
            product = _.find(newState.products, { id: action.id });
            product.availableCount -= 1;
            return newState;

        case actionTypes.DECREMENT_PRODUCT:
            product = _.find(newState.products, { id: action.id });
            product.availableCount += 1;
            return newState;

        default:
            return state
    }
}