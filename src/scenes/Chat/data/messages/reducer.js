import { ADD } from './actions';

export const reducer = (state = [], action) => {
    switch(action.type){
        case ADD:
            return state.concat({ username: action.username, content: action.content, fromMe: action.fromMe});
        default:
            return state;
    }
}

