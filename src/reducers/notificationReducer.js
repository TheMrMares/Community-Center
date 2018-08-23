import {ADD_NOTIFICATION, DELETE_NOTIFICATION} from './../constants/action-types';
import {DeleteNotification} from './../actions/index';
import store from './../store/index';

const initialState = [];

const notificationReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NOTIFICATION:

            window.setTimeout(() => {
                store.dispatch(DeleteNotification(action.payload.noteID));
            },action.payload.livetime);

            return [...state, action.payload]
        case DELETE_NOTIFICATION:
            let arr = state;
            arr.forEach((item , index) => {
                if(item.noteID === action.payload){
                    arr.splice(index, 1);
                }
            });
            return arr;
        default:
            return state;
    }
}

export default notificationReducer;