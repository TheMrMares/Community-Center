import { combineReducers } from 'redux';
import testReducer from './testReducer';
import notificationReducer from './notificationReducer';

export default combineReducers({ 
    notifications: notificationReducer,
    test: testReducer
});