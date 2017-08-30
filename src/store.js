import { createStore, combineReducers } from 'redux';

import { reducer as chatReducer } from './scenes/Chat/reducer';

const appReducer = combineReducers({
    chat: chatReducer,
});

export default createStore(
    appReducer
);