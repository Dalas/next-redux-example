/**
 * Created by yura on 19.12.16.
 */

import { CHANGE_GROUP } from '../actions/ActionTypes';
import _ from 'lodash';


const initialState = {
    groups: [
        {id: 1, title: 'KI-11-4'},
        {id: 2, title: 'KI-11-5'},
        {id: 3, title: 'KI-11-6'},
        {id: 4, title: 'KI-11-2'}
    ],
    currentGroup: 1
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CHANGE_GROUP:
            return Object.assign({}, state, { currentGroup: action.id });

        default:
            return state;
    }
}

