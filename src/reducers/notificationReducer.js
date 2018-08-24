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
            let newArr = state;
            newArr = newArr.filter((item, index) => {
                return (item.noteID !== action.payload)
            });
            return newArr;
        default:
            return state;
    }
}

export default notificationReducer;