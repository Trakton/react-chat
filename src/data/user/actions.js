export const LOGIN = 'data/user/LOGIN';

export function login(username){
    return {
        type: LOGIN,
        username
    }
}
    
