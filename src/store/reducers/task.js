import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    tasks: [

    ],
    taskSelected: false
}

const addTask = (state, action) => {
    let updatedTasks = state.tasks.concat({description: action.description});
    console.log(updatedTasks);
    let updatedState = {
        ...state,
        tasks: updatedTasks
    }
    console.log(updatedState)
    return updatedState;
    //return updateObject( state, updatedState );
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TASK: return addTask(state, action);
        default: return state;
    }
}

export default taskReducer;