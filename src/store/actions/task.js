import * as actionTypes from './actionTypes';

export const addTask = (task) => {
    return {
        type: actionTypes.ADD_TASK,
        description: task
    }
}