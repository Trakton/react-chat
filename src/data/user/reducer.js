import { LOGIN } from './actions';

export const reducer = (state = { name: ' ' }, action) => {
    switch(action.type){
        case LOGIN:
            return Object.assign({}, state, {...state, name: action.username});
        default:
            return state;
    }
}

