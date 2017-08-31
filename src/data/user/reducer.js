import { LOGIN } from './actions';

export const reducer = (state = { name: ' ' }, action) => {
    switch(action.type){
        case LOGIN:
            var a = Object.assign({}, state, {...state, name: action.username});
            console.log(a);
            return a;
        default:
            return state;
    }
}

