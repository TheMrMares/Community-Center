import {SET_TEST} from './../constants/action-types';

const initialState = {
    testValue: {}
}

const testReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TEST:
            return {testValue: action.payload}
        default:
            return state;
    }
}

export default testReducer;