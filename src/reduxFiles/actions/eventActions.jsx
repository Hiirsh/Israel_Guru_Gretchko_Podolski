export const ADD_EVENT = 'ADD_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const addEvent = event => ({
    type: ADD_EVENT,
    payload: event,
});

export const removeEvent = event => ({
    type: REMOVE_EVENT,
    payload: event,
});
