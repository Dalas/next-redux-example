/**
 * Created by yura on 16.12.16.
 */

import { createStore, combineReducers } from 'redux';
import * as reducers from '../reducers'


export default createStore(
    combineReducers( reducers.default )
);