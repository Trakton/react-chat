import { combineReducers } from 'redux';

import { reducer as messagesReducer } from './messages/reducer';

export const reducer = combineReducers({
    messages: messagesReducer,
});