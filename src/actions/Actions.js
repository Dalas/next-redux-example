import * as actionTypes from './ActionTypes';


export function addnewTask () {
    return {
        type: actionTypes.ADD_NEW_TASK
    }
}

export function removeTask (id) {
    return {
        type: actionTypes.REMOVE_TASK,
        id: id
    }
}

export function saveTask (task) {
    return {
        type: actionTypes.SAVE_TASK,
        task: task
    }
}

export function changeGroup (id) {
    return {
        type: actionTypes.CHANGE_GROUP,
        id: id
    }
}