/**
 * Created by yura on 16.12.16.
 */

import { createStore, combineReducers } from 'redux';
import tasksReducer from '../reducers/TasksReducer';
import groupReducer from '../reducers/GroupReducer';


export default createStore(
    combineReducers({
        tasks: tasksReducer,
        group: groupReducer
    })
);