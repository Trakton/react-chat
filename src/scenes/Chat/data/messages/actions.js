export const ADD = 'Chat/data/messages/ADD';

export const add = (payload) => (
    payload.username && payload.content && ({
        type: ADD,
        payload,
    })
)