/**
 * Created by yura on 16.12.16.
 */

import { createStore } from 'redux';
import reducer from '../reducers/ProductListReducer'


export default createStore(
    reducer
);