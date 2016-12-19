/**
 * Created by yura on 19.12.16.
 */

import { createStore } from 'redux';
import reducer from '../reducers/ShoppingCartReducer';

export default createStore(
    reducer
)