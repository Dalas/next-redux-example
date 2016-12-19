/**
 * Created by yura on 16.12.16.
 */

import { createStore, combineReducers } from 'redux';
import plReducer from '../reducers/ProductListReducer';
import scReducer from '../reducers/ShoppingCartReducer';
import pcReducer from '../reducers/PromoCodeReducer';


export default createStore(
    combineReducers({
        plReducer: plReducer,
        scReducer: scReducer,
        pcReducer: pcReducer
    })
);