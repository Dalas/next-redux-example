/**
 * Created by yura on 16.12.16.
 */

import { createStore, combineReducers } from 'redux';
import plReducer from '../reducers/ProductListReducer';
import scReducer from '../reducers/ShoppingCartReducer';


export default createStore(
    combineReducers({
        plReducer: plReducer,
        scReducer: scReducer
    })
);