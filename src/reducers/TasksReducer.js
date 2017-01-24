/**
 * Created by yura on 16.12.16.
 */

import * as actionTypes from '../actions/ActionTypes';
import _ from 'lodash';


const initialState = {
    tasks: [
        {id: 1, title: 'asdasd', text: 'asdasdasd'},
        {id: 2, title: 'asdasd', text: 'asdasdasd'},
        {id: 3, title: 'asdasd', text: 'asdasdasd'},
        {id: 4, title: 'asdasd', text: 'asdasdasd'},
    ],
    currentTask: -1,
    editingTask: {title: '', text: ''},
    editing: false
};

export default function (state = initialState, action) {
    switch( action.type ) {
        case actionTypes.ADD_NEW_TASK:
            return {...state, editing: true, currentTask: -1 };

        case actionTypes.REMOVE_TASK:
            _.remove(state.tasks, task =>task.id == action.id);
            return { ...state };

       /* case actionTypes.INCREMENT_PRODUCT:
            product = _.find(newState.products, { id: action.id });
            product.availableCount -= 1;
            return newState;

        case actionTypes.DECREMENT_PRODUCT:
            product = _.find(newState.products, { id: action.id });
            product.availableCount += 1;
            return newState;*/

        default:
            return state
    }
}