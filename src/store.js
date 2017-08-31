import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as chatReducer } from './scenes/Chat/reducer';
import { reducer as dataReducer } from './data/reducer';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const initialState = { };
const enhancers = [];
const middleware = [
    routerMiddleware(history)
];


const appReducer = combineReducers({
    routing: routerReducer,
    chat: chatReducer,
    data: dataReducer
});

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
    appReducer,
    initialState,
    composedEnhancers
);

export default store;