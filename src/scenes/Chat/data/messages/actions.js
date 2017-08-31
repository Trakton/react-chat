export const ADD = 'Chat/data/messages/ADD';

export function add(username, content, fromMe){
    return {
        type: ADD,
        username,
        content,
        fromMe
    }
}
    
